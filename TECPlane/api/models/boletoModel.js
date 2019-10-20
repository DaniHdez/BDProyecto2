var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BoletoSchema = new Schema({
  Codigo: Number,
  CodigoVuelo: Number,
  Maletas: Number,
  Observaciones: String,
  Estado: String,
  CodigoPasajero: Number,
  NumeroAsiento: Number
});

module.exports = mongoose.model("Boleto", BoletoSchema);
