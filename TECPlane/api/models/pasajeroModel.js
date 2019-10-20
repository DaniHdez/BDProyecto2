var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PasajeroSchema = new Schema({
  Cedula: Number,
  Nombre: String,
  FechaNacimiento: Date,
  Nacionalidad: String,
  Residencia: String,
  Contacto: {
    Telefono: Number,
    email: String
  },
  Usuario: String,
  Contrasena: String
});

module.exports = mongoose.model("Pasajero", PasajeroSchema);
