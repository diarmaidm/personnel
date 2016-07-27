var express = require('express');
var router = express.Router();
var Employee = require('../models/employee');

/* GET home page. */
router.get('/:id', function (req, res, next) {

  var employee = new Employee();
  res.render('employee', {
    title: 'Personnel',
    employee: employee.getEmployee()
  });

});

module.exports = router;
