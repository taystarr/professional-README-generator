// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// License link included in function
const renderLicenseBadge = license => {
  if (!license) {
    return '';
  } else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'GPL') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseDescription = license => {
  if (!license) {
    return '';
  } else if (license === 'Apache') {
    return `## License
  This project is under Apache license. Apache is a type of permissive free software license, it allows the user to do nearly anything they want with the code, with very few exceptions. Given that the Apache License text is quite dense, to further read up on the legality please click the license badge at the top of the page.
  `;
  } else if (license === 'MIT') {
    return `## License
  This project is under MIT license. MIT is a type of permissive free software license, it is the leanest license and basically means that users can do whatever they want with the application.
  `;
  } else if (license === 'GPL') {
    return `## License
  This project is under GPL license. GPL is the heaviest open source license. This license prevent users from using work in unfair way, any copy or modification of the original code must also be released under same license.
  `;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage 
  ${data.usage}

  ${renderLicenseDescription(data.license)}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  For addational information please click here ${data.name} to see my GitHub repositories or email me at ${data.email}.
  `;
}

module.exports = generateMarkdown;
