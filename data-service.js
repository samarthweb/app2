const file_system = require('fs');


var employees = [];
var departments = [];
var managers = [];

module.exports.initialize = function () {

  return new Promise((resolve, reject) => {

    file_system.readFile('./data/departments.json', (error, info) => {
      if (!error) 
      {
        departments = JSON.parse(info);
        resolve();
      }

      else 
      {
        reject();
      }
    });


    file_system.readFile('./data/employees.json', (error, info) => {
      if (!error) 
      {
        employees = JSON.parse(info);
        resolve();
      }

      else 
      {
        reject();
      }
    });
    
  });
};

module.exports.getAllEmployees = function () {
  
  return new Promise((resolve, reject) => {
    
    if ((employees.length != 0)||(employees.length >0))
    {
      resolve(employees);
    }

    else {
      reject();
    }
  });
};

module.exports.getManagers = function () {

  return new Promise((resolve, reject) => {
   
    for (var randomvarname = 0; randomvarname < employees.length; randomvarname++) 
    {
      if (employees[randomvarname].isManager == true) 
      {
        managers.push(employees[randomvarname]);
      }
    }
    if ((managers.length != 0) || (managers.length>0))
    {
      resolve(managers);
    } 

    else
    {
      reject();
    }
    
  });
};

module.exports.getDepartments = function () {

  return new Promise((resolve, reject) => {

    if ((departments.length != 0) || (departments.length>0) )
    {
      resolve(departments);
    }

    else
    {
    reject();
    }
  });
};
