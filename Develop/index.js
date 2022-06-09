// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const readme = "README.md"

// TODO: Create an array of questions for user input

const questions = [

  {
    type: 'input',
    name: 'title',
    message: "Title of your project:",
  },
  {
    type: 'input',
    name: 'description',
    message: "Project Description:",
  },
  {
    type: 'input',
    name: 'install',
    message: "What are the install instructions for your application",
  },
  {
    type: 'input',
    name: 'usage',
    message: "How do you use this application?",
  },
  {
    type: 'checkbox',
    name: 'license',
    message: "Select your license",
    choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified License'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: "Contributing guidelines to follow...",
  },
  {
    type: 'input',
    name: 'testing',
    message: "Test instructions to be aware of",
  },
  {
    type: 'input',
    name: 'gitHub',
    message: "Please enter your Github Name to link",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter email for people to contact and ask questions",
  },
]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data)),
    (err) => err ? console.log(err) : console.log('Success!')
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(data => writeToFile(readme, data))
}

// Function call to initialize app
init();
