let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./Database/db');

// Connecting mongoDB
mongoose.Promise = global.Promise;

mongoose.connect(dataBaseConfig.db, {

  useNewUrlParser: true,

  useUnifiedTopology: true,

  useFindAndModify: false

}).then(() => {

  console.log('Database connected sucessfully ')

},

error => {

  console.log('Could not connect to database  ' + error)

}

)

const itemRoute = require('./rutas/items.rutas');



const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({

  extended: false

}));

app.use(cors());

// RESTful API root

app.use('/Server', itemRoute);


// PORT
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {

  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();

});

app.listen(port, () => {

  console.log('PORT Connected on: ' + port)

})




