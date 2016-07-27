var Employee = function () {

};

Employee.prototype.getEmployee = function (key) {
  return {
    key: 'abcd',
    first: 'First',
    last: 'Last',
    address1: 'Address1',
    address2: 'Address2'
  };
}

module.exports = Employee;
