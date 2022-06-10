// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case "MIT License":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break
    case "Apache License 2.0":
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break
    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break
    case 'BSD 2-Clause "Simplified License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
      break
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data)}

  ## Description
  ${data.description}

  ## License Badge
  ![License Badge](https://img.shields.io/badge/License-${data.license}-green)

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Test](#test)
  5. [Contribution](#contribution)
  6. [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Test
  ${data.test}

  ## Contribution
  ${data.contribution}

  ## Questions
  ${data.questions}
  *If you have any questions, email me at: ${data.email},
  *GitHub Profile Link: https://github.com/${data.gitHub}
`;
}

module.exports = generateMarkdown;
