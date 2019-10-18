var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  aeropuerto = require('./api/models/aeropuertoModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TECPlaneDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/tecplaneRoutes');
routes(app);



app.listen(port);

console.log("todo list RESTful API server started on: " + port);
