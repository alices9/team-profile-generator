const inquirer = require("inquirer");
const fs = require("fs");

const questions =[
{
    type: "input",
    message: "Please enter the team manager's name: ",
    name: "teamManagerName"
},
{
    type: "input",
    message: "Please enter the team manager's employee ID: ",
    name: "teamManagerID"
},
{
    type: "input",
    message: "Please enter the team manager's email: ",
    name: "teamManagerEmail"
},
{
    type: "input",
    message: "Please enter the team manager's office number: ",
    name: "teamManagerNum"
},
{
    type: "choice",
    message: "Do you have more employees to add?",
    choices: ["Engineer", "Intern", "No, I'm done"],
    name: "otherEmployees"
},
{
    type: "input",
    message: "Please enter the engineer's name: ",
    name: "engineer-name",
    // when user selects engineer
    when: (choice) => choice.otherEmployees[0] === "Engineer"
},
{
    
}
]