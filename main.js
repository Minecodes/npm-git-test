const { prompt } = require('enquirer');
const question = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your username?'
  },
  {
    type: 'password',
    name: 'password',
    message: 'What is your password?'
  }
];
 
let answers = prompt(question);
 
exports.run = function() {
  console.log(answers)
}
