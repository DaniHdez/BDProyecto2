var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AeropuertoSchema = new Schema(
    {
        Codigo: Number,
        Nombre: String, 
        Ubicacion: String,
        Contacto:{
            telefono: Number,
            email: String
        },
        url: String 
    }
);



module.exports = mongoose.model("Aeropuerto", AeropuertoSchema);