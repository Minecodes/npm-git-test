const { prompt } = require('enquirer');
 
const response = await prompt({
  type: 'input',
  name: 'username',
  message: 'What is your username?'
});
 
exports.run = function() {
  console.log(response)
}
