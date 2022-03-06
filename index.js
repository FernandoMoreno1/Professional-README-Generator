// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a TITLE!');
                return false;
            }
        }
    }, {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project:',
    }, {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process if any:',
    }, {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage for this project?',
    }, {
        type: 'list',
        name: 'license',
        message: 'Chose the appropriate license for this project: ',
        choices: [
            "MIT",
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "Mozilla",
            "Open"
        ]
    }, {
        type: 'input',
        name: 'contributing',
        message: 'Who took part in creating this project?',
    }, {
        type: 'input',
        name: 'test',
        message: 'Is there a test included?',
    }, {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username: (Required',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Github username:)');
                return false;
            }
        }
    }, {
        type: 'input',
        name: 'email',
        message: 'what is your E-mail address: (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your E-mail address!');
                return false;
            }
        }
    }  
];


// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((create, reject) => {
        fs.writeFile('./dist/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            create({
                ok: true,
                message: 'File created!'
            });
        });
    });


};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
        .then(readmeData => {
            return readmeData
        })
}

// Function call to initialize app
init()
    .then(readmeData => {
        console.log(readmeData);
        return generateMarkdown(readmeData);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    })