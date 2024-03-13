let employee = {
    name: "Hailey Green",
    streetAddress: "12 Banks Dr"
  }
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    let clone = Object.assign({}, employee);
    clone[key] = value;
    return clone;
  }
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Banks Dr");
console.log(updatedEmployee);
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function  deleteFromEmployeeByKey(employee, key){
    let clone = Object.assign({}, employee);
    delete clone[key];
    return clone;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}