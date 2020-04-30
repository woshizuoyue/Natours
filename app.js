const express = require('express');
const app = express();
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// 1. middleware
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware...');
  req.requestTime = new Date().toISOString();
  next();
});

//3. routers
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//4. starts server
const port = 3000;
app.listen(port, () => {
  console.log(`App is running on ${port}...`);
});
