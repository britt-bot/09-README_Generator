// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter a Title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a Description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter Installation Instructions',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter Usage Information',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter Contribution Guidelines',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Enter Test Instructions',
      name: 'test',
    },
    {
      type: 'list',
      message: 'Select License.',
      name: 'license',
      choices: ['MIT', 'Mozilla', 'IBM', 'WTFPL'],
    },
    {
      type: 'input',
      message: 'Enter GitHub Username.',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Enter Email Address.',
      name: 'email',
    },
  ])
  // TODO: Create a function to write README file
  .then((response) => {
    console.log(response);
      fs.writeFile('README.md', generateMarkdown(response), (err) => {
        // err ? console.error(err) : console.log(success)
  })
  });




// const questions = [];

// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
