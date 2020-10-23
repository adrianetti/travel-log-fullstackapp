const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares.js');

const app = express();
app.use(morgan('dev'));
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(helmet());
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.get('/', (req, res) => {
  res.json({
    message: 'hello world!',

  });
  res.status(200);
});

const port = process.env.PORT || 2525;
app.listen(port, () => console.log(`listening on localhost:${port}`));
