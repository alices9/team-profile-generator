const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const { create } = require("domain");

function TeamManager(name, id, email, number){
    this.name = name;
    this.id = id;
    this.email = email;
    this.number = number;
}

function Engineer(name, id, email, number){
    this.name = name;
    this.id = id;
    this.email = email;
    this.number = number;
}

function Intern(name, id, email, number){
    this.name = name;
    this.id = id;
    this.email = email;
    this.number = number;
}


// Manager questions
function createManager() {
    inquirer.prompt([
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
    }])
    .then((answers => {
        const teamManager = new TeamManager(answers.teamManagerName, answers.teamManagerID, answers.teamManagerEmail, answers.teamManagerNum);
        console.log(teamManager)
        otherTeamMembers();
    }))
}

// Questions for the engineer and intern
function otherTeamMembers(){
    inquirer.prompt([
    {
        type: "checkbox",
        message: "Do you have more employees to add?",
        choices: ["Engineer", "Intern", "No, I'm done"],
        name: "otherEmployees"
    }])
    .then((answer) => {
        if(answer.otherEmployees === "Engineer"){
            createEngineer();
        }else if(answer.otherEmployees === "Intern"){
            createIntern();
        }else return
    })
}
    
    
function createEngineer(){
    inquirer.prompt([
    {
        type: "input",
        message: "Please enter the engineer's name: ",
        name: "engineerName",
    },
    {
        type: "input",
        message: "Please enter the engineer's employee ID: ",
        name: "engineerID",
    },
    {
        type: "input",
        message: "Please enter the engineer's email: ",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "Please enter the engineer's office number: ",
        name: "engineerNum",
    }])
}



function createIntern() {
    inquirer.prompt([
    {
        type: "input",
        message: "Please enter the intern's name: ",
        name: "internName",
    },
    {
        type: "input",
        message: "Please enter the intern's employee ID: ",
        name: "internID",
    },
    {
        type: "input",
        message: "Please enter the intern's email: ",
        name: "internEmail",
    },
    {
        type: "input",
        message: "Please enter the intern's office number: ",
        name: "internNum",
    }])
}


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!"))
}

function init() {
    createManager();
    writeToFile(("./dist/test.html"), generateHTML(answers2));
}

createManager()