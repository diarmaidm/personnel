var express = require('express');
var router = express.Router();
var getEmployees = require('../services/getEmployees');

/* GET home page. */
router.get('/', function(req, res, next) {

  var employees = getEmployees();

  res.render('personnel', { title: 'Personnel', employees: employees });

});

module.exports = router;
