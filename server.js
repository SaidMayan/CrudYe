const path = require('path');

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
