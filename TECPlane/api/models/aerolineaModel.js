var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AerolineaSchema = new Schema({
  Codigo: Number,
  Nombre: String,
  Paises: String,
  CodigoAeropuerto: Number
});

module.exports = mongoose.model("Aerolinea", AerolineaSchema);
