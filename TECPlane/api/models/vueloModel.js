var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VueloSchema = new Schema({
  Codigo: Number,
  Nombre: String,
  Origen: String,
  Destino: String,
  Itinerario: String,
  Precio: Number,
  Restricciones: String,
  Caracteristicas: String,
  Estado: String,
  Capacidad: Number,
  CodigoAerolinea: Number,
  BoletosVendidos: Number
});

module.exports = mongoose.model("Vuelo", VueloSchema);
