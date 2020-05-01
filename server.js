const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

//console.log(process.env.PORT);
const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`App is running on ${port}...`);
});
