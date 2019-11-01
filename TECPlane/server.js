
var cors = require('cors');
var express = require("express"),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require("mongoose"),
  aeropuerto = require("./api/models/aeropuertoModel"),
  funcionario = require("./api/models/funcionarioModel"),
  aerolinea = require("./api/models/aerolineaModel"),
  vuelo = require("./api/models/vueloModel"),
  pasajero = require("./api/models/pasajeroModel"),
  boleto = require("./api/models/boletoModel"),
  bodyParser = require("body-parser");
  
useStyle


const connectionString = "mongodb+srv://admin:paso1234@basesavanzadas-hxybp.mongodb.net/test?retryWrites=true&w=majority"
// const connectionString = "mongodb://localhost/TECPlaneDB"
mongoose.Promise = global.Promise;
mongoose.connect(connectionString)
.catch(error => {
  console.log(error)
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require("./api/routes/tecplaneRoutes");
routes(app);

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
