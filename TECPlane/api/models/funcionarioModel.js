var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FuncionarioSchema = new Schema({
  Cedula: Number,
  Nombre: String,
  Tipo: String,
  FechaRegistro: Date,
  AreaTrabajo: String,
  CodigoAeropuerto: Number,
  Usuario: String,
  Contrasena: String
});

module.exports = mongoose.model("Funcionario", FuncionarioSchema);
