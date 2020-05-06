// Create a JSON file that will have 10 employees in it, their 
// employeeID, their name, their salary and department name.

// Then, create an express API so that when you hit the endpoint 
// with a GET request we want the api to respond with all data on 
// the employees.

// If you hit the endpoint with their employeeID, we want to 
// hand up only the information on that one employee.

// If you hit the endpoint with an incorrect employeeID, 
// send back the correct HTTP status code and an error 
// message stating that the employee was not found.

// GET::myendpointname.com/employees = Json with 
// information from all 10 employees.

// GET::myendpointname.com/employees/<employeeID> = Json 
// with the information from that specific employee.

const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
const employeeData = require('./public/employeeData.json')



app.get('/employees', (req, res) => {
    res.send(employeeData)
})

app.get('/employees/:employeeID', (req, res) => {
    const eData = employeeData.employees.find((employee) => {
    
        return parseInt(req.params.employeeID) === employee.employeeID
    })

    if (!employeeData) {
        res.status(404).send(`Couldn't find the employee IDs.`)
    } 

    res.send(eData)
})





app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})