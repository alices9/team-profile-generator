const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");


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

const teamMembers = [];
let team = false;

// Questions for Manager
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
        teamMembers.push(teamManager)
        otherTeamMembers();
    }))
}

// Confirm if adding team members
function otherTeamMembers(){
    inquirer.prompt([
    {
        type: "checkbox",
        message: "Do you have more employees to add?",
        choices: ["Engineer", "Intern", "No, I'm done"],
        name: "otherEmployees"
    }])
    .then((answer => {
        if(answer.otherEmployees[0] === "Engineer"){
            createEngineer();
        }else if(answer.otherEmployees[0] === "Intern"){
            createIntern();
        }else{
            team = true;
            console.log(teamMembers)
            return team;
        }
    }))
    .then (() => {
        if (team) {
        writeFile(("./dist/test.html"), generateHTML(teamMembers));
    }})
}
    
// Questions for Engineer
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
        message: "Please enter the engineer's GitHub username: ",
        name: "engineerGitHub",
    }])
    .then((answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerNum);
        teamMembers.push(engineer)
        otherTeamMembers();
    }))
}


// Questions for Intern
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
        message: "Please enter the intern's school name: ",
        name: "internSchool",
    }])
    .then((answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internNum);
        teamMembers.push(intern)
        otherTeamMembers();
    }))
}


function writeFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!"))
}


// function check(){
//     console.log(team)
//     if (team) {
//         writeFile(("./dist/test.html"), generateHTML(teamMembers));
//     }
// }



createManager()
// check()
