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
    .then(answers => console.log(answers))
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


// questions()
//     .then(data => {
//         const filename = generateMarkdown(data);

//         fs.writeFile('README.md', filename, err => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }

//             console.log('Success')
//         });
//     }); 

// TODO: Create a function to write README file
// const writeToFile = (fileName, data) => {
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log('README written!!');
//     })
// };

// // TODO: Create a function to initialize app
// const init = () => {
//     inquirer.prompt(questions)
//     .then(userInput => {
//         console.log(userInput);
//         writeToFile('README.md', generateMarkdown(userInput));
//     });
// };

// // Function call to initialize app
// init();
