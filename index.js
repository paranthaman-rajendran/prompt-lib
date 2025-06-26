const fs = require('fs');
const path = require('path');

const securityReviewPrompt = fs.readFileSync(
  path.join(__dirname, 'prompts/security-review-rest-api.prompt.md'),
  'utf8'
);

module.exports = {
  securityReviewPrompt
};
module.exports = { getPrompt };
