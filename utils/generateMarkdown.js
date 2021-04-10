// TODO: Create a function that returns a license badge based on which license is passed in
const noLicense = "";

function renderLicenseBadge(license) {
  if(license === "MIT") {
    return `![Mozilla](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Mozilla") {
    return `![IBM](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  } else if (license === "IBM") {
    return `![IBM](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`;
  } else if (license === "WTFPL") {
    return `![WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)`;
  } else {
    return noLicense;
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if(license === "MIT") {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "IBM") {
    return `(https://opensource.org/licenses/IPL-1.0)`;
  } else if (license === "WTFPL") {
    return `(http://www.wtfpl.net/about/)`;
  } else {
    return noLicense;
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "MIT") {
    return `[License: MIT]`;
  } else if (license === "Mozilla") {
    return `[License: MPL 2.0]`;
  } else if (license === "IBM") {
    return `[License: IPL 1.0]`;
  } else if (license === "WTFPL") {
    return `[License: WTFPL]`;
  } else {
    return noLicense;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("creating README now...")
  return`${renderLicenseBadge(data.license)}
# Title
${data.title}

# Description 
${data.description}

## Table of Contents 
This table of contents is to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contribution)
* [Tests](#test)
* [License](#license)
* [Questions](#questions)

# Installation 
${data.installation}
  
# Usage 
${data.usage}

# Contributing 
${data.contribution}

# Tests 
${data.test}
  
# License 
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

# Questions
You can find me on GitHub here:
${data.username}
You can email me here:
${data.email}
`;
}

module.exports = generateMarkdown;






