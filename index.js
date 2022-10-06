// TODO: Include packages needed for this application
let inquirer = require("./node_modules/inquirer");
let fs = require("fs");
let genMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is your project title",
        type: "string",
        name: "title",
    },
    {
        message: "Please type in the project description.",
        type: "string",
        name: "description",
    },
    {
        message: "What are the installation steps?",
        type: "string",
        name: "installation",
    },
    {
        message: "What are the usage",
        type: "string",
        name: "usage",
    },
    {
        message: "Please choose the license",
        type: "list",
        name: "license",
        choices: ["MIT", "GNU GPL v3", "Mozilla","None"]
    },
    {
        message: "Please enter github ID of contributor",
        type: "string",
        name: "contributor",
    },
    {
        message: "Please write down the test case if any.",
        type: "string",
        name: "test",
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("success!!");
    });

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(
        questions
    ).then(answer => {
        writeToFile(`${answer.title}.md`,genMarkdown.generateMarkdown(answer));
    })

}

// Function call to initialize app
init();
