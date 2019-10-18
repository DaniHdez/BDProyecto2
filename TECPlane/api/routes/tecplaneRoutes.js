"use strict";
module.exports = function(app) {
  var aeropuerto = require("../controllers/aeropuertoController");

  // ##################################
  // RUTAS AEROPUERTO                 #
  // ##################################
  app
    .route("/aeropuertos/")
    .get(aeropuerto.lista_aeropuertos)
  
  app
    .route("/aeropuerto/")
    .post(aeropuerto.crear_nuevo);

  app
    .route("/aeropuerto/:idAeropuerto")
    .get(aeropuerto.obtener_info)
    //.put(aeropuerto.actualizar)
    //.delete(aeropuerto.eliminar);

    // Agregar rutas con consultas especiales (si hay)
    // a .route("aeropuerto/idAeropuerto/<nombre consulta>") un aeropuerto especifico
    // a .route("aeropuerto/<nombre consulta>") para todos los aeropuertos



};
