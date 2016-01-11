var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('musikk', { title: 'Musikk' });
});

module.exports = router;
