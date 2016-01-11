var express = require('express');
var yrno = require('yr.no-forecast');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    yrno.getWeather({
        lat: 59.94913,
        lon: 10.81416
    }, function(err, weather) {
        // Weather for next five days (Array with five object)
        weather.getFiveDaySummary(function (err, summary) {
            console.log(summary);
            res.render('yr', { title: 'Vær Stig', langtidsvarsel: summary });
        });
    });

});

module.exports = router;
