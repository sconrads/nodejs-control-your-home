var express = require('express');
var sanntid = require('sanntid');

//var holdeplass = {id:'3012072' };

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var holdeplassid = '3012072';
    console.log('Henter data for : ' + holdeplassid);
    var holdeplass = {id:holdeplassid};
    sanntid.getRealtimeData(holdeplass, "2", function(data){
        console.log(data);
        res.render('sanntid', { title: holdeplassid, avganger: data });
    });
});

module.exports = router;
