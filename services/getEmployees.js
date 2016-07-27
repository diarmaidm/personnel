function getEmployees () {
  var employees = [
  {
    key: 'abcd',
    first: 'First',
    last: 'Last',
    address1: 'Address1',
    address2: 'Address2'
  },
  {
    key: 'efgh',
    first: 'OtherFirst',
    last: 'OtherLast',
    address1: 'OtherAddress1',
    address2: 'OtherAddress2'
  }
  ];
  return employees;
}

module.exports = getEmployees;