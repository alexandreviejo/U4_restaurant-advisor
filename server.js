require('dotenv').config({ path: 'variables.env' });

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running at PORT ${server.address().port} **`);
});