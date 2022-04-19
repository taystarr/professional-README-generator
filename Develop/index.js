// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            // Project title
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
            // add validate to all prompts below
        },
        {
            // Project description
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project'
        },
        {
            // Installation instructions
            type: 'input',
            name: 'install',
            message: 'Provide installation instructions for user'
        },
        {
            // Usage information
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use'
        },
        {
            // Lisence from List
            type: 'list',
            name: 'license',
            message: 'Choose the appropriate license from the following choices',
            choices: ['MIT', 'Apache', 'GPL']
            // https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#1-mit
            // follow link for license description
        },
        {
            // Contribution guidelines
            type: 'input',
            name: 'contribute',
            message: 'Provide guidelines on how others can contribute'
        },
        {
            // Test instructions
            type: 'input',
            name: 'test',
            message: 'Provide test instructions for application'
        },
        {
            // Enter github username for questions section
            type: 'input',
            name: 'name',
            message: 'Enter your GitHub username'
        },
        {
            // Enter email address for Questions section
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        }
    ])
    .then(answers => console.log(answers));
};

questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
