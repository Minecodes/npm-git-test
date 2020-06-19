const { BasicAuth } = require('enquirer');

exports.run = function(msg, name, ps, show) {
 const prompt = new BasicAuth({
  name: 'password',
  message: msg,
  username: name,
  password: ps,
  showPassword: show
});
 
 prompt
  .run()
  .then(answer => console.log('Please wait...'))
  .catch(console.error);
}
