// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## License Badge
  // How to display a license badge?
  ${data.license}

  ##Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Test](#test)
  5. [Contribution](#contribution)
  6. [Questions](#questions)

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##License
  ${data.license}

  ##Test
  ${data.test}

  ##Contribution
  ${data.contribution}

  ##Questions
  ${data.questions}
  *If you have any questions, email me at: ${data.email},
  *GitHub Profile Link: https://github.com/${data.gitHub}
`;
}

module.exports = generateMarkdown;
