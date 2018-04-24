const path = require('path');

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const env = require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();

const kanye_types_Router = require('./routes/kanye_types_Routes');
const kanye_instances_Router = require('./routes/kanye_instances_Routes');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.get('/', (req,res) => {
  res.render('home/index');
})


app.use('/kanye_types', kanye_types_Router);
app.use('/kanye_instances', kanye_instances_Router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
