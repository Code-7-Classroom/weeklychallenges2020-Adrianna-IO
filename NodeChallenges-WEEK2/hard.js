// Add the remaining CRUD functionality to your medium problem.

// Make sure you return the proper HTTP status codes based on the 
// outcome of the request. Be sure to implement error checking here.

// If an invalid request is made, we want to return some sort of error 
// message and the correct HTTP status code for the situation.
 
// POST::myendpointname.com/employees = Inserts new employee into your data.

// GET::myendpointname.com/employees = Returns json with information 
// from all employees.

// GET::myendpointname.com/employees/<employeeID> = Returns json with 
// the information from that specific employee.

// PUT::myendpointname.com/employees/<employeeID> = Updates information 
// or specified employee.

// DELETE::myendpointname.com/employees/<employeeID> = Removes the employee 
// with that ID from the data.


const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
const employeeData = require('./public/employeeData.json')


// GET Method
// http://localhost:3000/employees
app.get('/employees', (req, res) => {
    res.send(employeeData)
})


// http://localhost:3000/employees/1
app.get('/employees/:employeeID', (req, res) => {
    const eData = employeeData.employees.find((employee) => {
    
        return parseInt(req.params.employeeID) === employee.employeeID
    })

    if (!employeeData) {
        res.status(404).send(`Couldn't find the employee IDs.`)
    } 

    res.send(eData)
})


// POST Method
app.post('/employees', (req, res) => {
    const newEmployee = {
        employeeID: employeeData.employees.length + 1,
        name: req.body.name,
        salary: req.body.salary,
        departmentName: req.body.departmentName
    }
    if (!employeeData) {
        res.status(404).send(`Couldn't add the employee.`)
    }
    employeeData.employees.push(newEmployee)
    res.send(newEmployee)
});





app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})