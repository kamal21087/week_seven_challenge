// utils.js
import fs from 'fs';

// Function to write data to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md has been generated!')
  );
}

// Function to render license badge
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case 'Apache 2.0':
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    case 'GPL 3.0':
      return `![License: GPL v3](https://img.shields.io/badge/License-GPL_v3-blue.svg)`;
    default:
      return '';
  }
}

// Function to render license section
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
This project is licensed under the ${license} License.`;
}

export { writeToFile, renderLicenseBadge, renderLicenseSection };
