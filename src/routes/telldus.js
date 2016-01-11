var express = require('express');
var TelldusAPI = require('telldus-live');

require('dotenv').load();

var publicKey    = process.env.PUBLIC_KEY
    , privateKey   = process.env.PRIVATE_KEY
    , token        = process.env.TOKEN
    , tokenSecret  = process.env.TOKEN_SECRET
    , cloud
    ;

var router = express.Router();

cloud = new TelldusAPI.TelldusAPI({ publicKey  : publicKey
  , privateKey : privateKey }).login(token, tokenSecret, function(err, user) {
      if (!!err) return console.log('login error: ' + err.message);

      // otherwise, good to go!
      console.log('Bruker: '); console.log(user);
    }).on('error', function(err) {
      console.log('background error: ' + err.message);
    });

cloud.getDevices(function(err, devices) {
  var i;

  if (!!err) return console.log('getDevices: ' + err.message);

  for (i = 0; i < devices.length; i++) {
    if (devices[i].type === 'device') {
      cloud.getDeviceInfo(devices[i], deviceInfo(i, devices[i], 'getDeviceInfo'));
    }
  }
});

function deviceInfo(offset, p, s) {
  return function(err, device) {
    var d, type, types;

    if (!!err) return console.log(s + ' id=' + p.id + ': ' + err.message);

    console.log('device #' + offset + ' ' + s + ': '); console.log(device);
    types = { 'selflearning-switch' : 'onoff'
      , 'selflearning-dimmer' : 'dimmer'
      , 'codeswitch'          : 'onoff' };

    type = null;
    d = device.model.split(':');
    type = types[d[0]];
    if (!type) return;

    console.log('/device/switch' + '/' + (d[d.length - 1] || 'telldus') + '/' + type);
    console.log('    uuid=teldus:' + device.id);
    console.log('    perform: off, on');
    console.log('    name: ' + device.name);
    console.log('    status: ' + (device.online === '0' ? 'absent' : device.status));
    console.log('    info:');
    if (type === 'dimmer') console.log('      dimmer: percentage');
    console.log('    values:');
    if (type === 'dimmer') console.log('      dimmer: ' + Math.round((1-(255 - device.statevalue)/255)*100) + '%');
    console.log('');
  };
};


/* GET turn switch */
router.get('/switch/:state/:id', function(req, res) {

  var deviceToControl = req.params.id;
  var state = req.params.state;
  if (state == 'Off') state = undefined

  cloud.getDevices(function(err, devices) {
    var i;

    if (!!err) return console.log('getDevices: ' + err.message);

    for (i = 0; i < devices.length; i++) {
      if (devices[i].type === 'device' && devices[i].id === deviceToControl) {
        var deviceName = devices[i].name;
        console.log('Device: ' + deviceName);
        cloud.onOffDevice(devices[i], state, function(err, result) {
          if (!!err) return res.send('Klarte ikke å styre '+ deviceName + ' ' + err.message );
          else return res.send(deviceName + ' er skrudd ' + state );
        });
      }
    }
  });
});

module.exports = router;
