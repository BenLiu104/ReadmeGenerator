// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return renderLicenseSection(license) + renderLicenseLink(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "(https://img.shields.io/badge/License-MIT-yellow.svg)";
  };
  if (license == "GNU GPL v3") {
    return "(https://img.shields.io/badge/License-GPLv3-blue.svg)"
  }
  if (license == "Mozilla") {
    return "(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
  }
  if (license == "None") {
    return "(https://img.shields.io/badge/license-Unlicense-blue.svg)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "MIT") { return "![License: MIT]" };
  if (license == "GNU GPL v3") { return "![License: GPL v3]" };
  if (license == "Mozilla") { return "![License: MPL 2.0]" };
  if (license == "None") { return "![License: Unlicense]" };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, license, contributor, test, github, email }) {

  return `
${renderLicenseBadge(license)}

# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)


## Installation
${installation}

## Usage
${usage}

## Credits

${contributor} : https://github.com/${contributor}

## License

License - ${license}

## Tests

${test}

## Questions
If there is any question, plesae find more information on my github
${github} : https://github.com/${github}

or contact me by email : ${email}
`;
}

module.exports = { generateMarkdown };

