var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  getEmployees ();

  res.render('personnel', { title: 'Personnel', employees: employees });

});

module.exports = router;
