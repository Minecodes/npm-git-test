const { BasicAuth } = require('enquirer');

exports.run = (msg, name, ps, show, code) => {
 const prompt = new BasicAuth({
  name: 'password',
  message: msg,
  username: name,
  password: ps,
  showPassword: show
});
 
 prompt
  .run()
  .then(answer => code)
  .catch(console.error);
}
