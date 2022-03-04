// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'open') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-red)
    `;
  } else {
    return ' ';
  }}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'open') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'open') {
    return `
    ## [License](#table-of-contents)
    - [License](#license)
    ![badge](https://img.shields.io/badge/license-Open-red)
  
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}

  ${renderLicenseBadge(data.license)}

## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
    
 ## [Description](#table-of-contents) 
${data.description}
    
## [Installation](#table-of-contents)
${data.installation}
    
## [Usage](#table-of-contents)
${data.usage}
    
## [Contributing](#table-of-contents)
${data.contributing}
    
## [Tests](#table-of-contents)
${data.tests}
    
## [License](#table-of-contents)

The application is cover under the following license:

${data.license}


## [Questions](#table-of-contents)
Please contact me using the following links:

[Email: ${data.email}](mailto:${data.email})

[GitHub](https://github.com/${data.githubUsername})

`;
}

module.exports = generateMarkdown;
