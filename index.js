const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");


// Manager questions
const questions = [
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
    }
]

// Engineer questions
const questions2 = [
    {
        type: "checkbox",
        message: "Do you have more employees to add?",
        choices: ["Engineer", "Intern", "No, I'm done"],
        name: "otherEmployees"
    },
    {
        type: "input",
        message: "Please enter the engineer's name: ",
        name: "engineerName",
        when: (choice) => choice.otherEmployees[0] === "Engineer"
    },
    {
        type: "input",
        message: "Please enter the engineer's employee ID: ",
        name: "engineerID",
        when: (choice) => choice.otherEmployees[0] === "Engineer"
    },
    {
        type: "input",
        message: "Please enter the engineer's email: ",
        name: "engineerEmail",
        when: (choice) => choice.otherEmployees[0] === "Engineer"
    },
    {
        type: "input",
        message: "Please enter the engineer's office number: ",
        name: "engineerNum",
        when: (choice) => choice.otherEmployees[0] === "Engineer"
    },
    {
        type: "input",
        message: "Please enter the intern's name: ",
        name: "internName",
        when: (choice) => choice.otherEmployees[0] === "Intern"
    },
    {
        type: "input",
        message: "Please enter the engineer's employee ID: ",
        name: "internID",
        when: (choice) => choice.otherEmployees[0] === "Intern"
    },
    {
        type: "checkbox",
        message: "Do you have more employees to add?",
        choices: ["Intern", "No, I'm done"],
        name: "otherEmployees2"
    }
]

// Intern questions
const questions3 = [
    {
        type: "input",
        message: "Please enter the intern's name: ",
        name: "internName",
    },
    {
        type: "input",
        message: "Please enter the engineer's employee ID: ",
        name: "internID"
    },
    {
        type: "input",
        message: "Please enter the engineer's email: ",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Please enter the engineer's office number: ",
        name: "internNum"
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!"))
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile(("./dist/test.html"), generateHTML(answers));
    })
    .then((answers2) => {
        console.log(answers2);
        writeToFile(("./dist/test.html"), generateHTML(answers2));
    })
}

init()