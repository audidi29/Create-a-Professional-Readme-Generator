const fs = require('fs');
const inquirer = require('inquirer');
const { writeFileSync } = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); // Import the generateMarkdown function

// Create an array of questions for user input
// Add more questions for other sections of the README
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of the project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install the project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is the project used?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'Other'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to the project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Are there any tests for the project?',
  },
  {
    type: 'input',
    name: 'githubusername',
    message: 'Enter your Github username:',
  },
  {
    type: 'input',
    name: 'githubprofile',
    message: 'Enter the link to your GitHub profile',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
  // Add more questions for other sections here
];

// Function to write README file
function writeToFile(fileName, data) {
  writeFileSync(fileName, data);
  console.log('README.md file generated successfully!');
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers); // Call the generateMarkdown function
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Call the init function to start the app
init();

