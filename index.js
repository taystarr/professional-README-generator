// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            // Project title
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            // add validate to all prompts below
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a project title!');
                    return false;
                }
            }
        },
        {
            // Enter github username for questions section
            type: 'input',
            name: 'name',
            message: 'Enter your GitHub username',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'licenseConfirm',
            message: 'Would you like to add a license for this project?',
            default: false
        },
        {
            // Lisence from List
            type: 'list',
            name: 'license',
            message: 'Choose the appropriate license from the following choices',
            choices: ['MIT', 'Apache', 'GPL'],
            when: ({ licenseConfirm }) => {
                if (licenseConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
            // https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#1-mit
            // follow link for license description
        },
        {
            // Project description
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a project description!');
                    return false;
                }
            }
        },
        {
            // Installation instructions
            type: 'input',
            name: 'install',
            message: 'Provide installation instructions for user',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            // Usage information
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions!');
                    return false;
                }
            }
        },
        {
            // Contribution guidelines
            type: 'input',
            name: 'contribute',
            message: 'Provide guidelines on how others can contribute',
            validate: contInput => {
                if (contInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidelines!');
                    return false;
                }
            }
        },
        {
            // Test instructions
            type: 'input',
            name: 'test',
            message: 'Provide test instructions for application',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions!');
                    return false;
                }
            }
        },
        {
            // Enter email address for Questions section
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ]);
};


questions()
    .then(data => {
        const readMeData = generateMarkdown(data);
        fs.writeFile('README.md', readMeData, err => {
            if (err) {
                console.log(err);
                return;
            }

            console.log('Success')
        });

    });


