"use strict";
module.exports = function(app) {
  var aeropuerto = require("../controllers/aeropuertoController");

  // ##################################
  // RUTAS AEROPUERTO                 #
  // ##################################
  app.route("/aeropuertos/").get(aeropuerto.lista_aeropuertos);

  app.route("/aeropuerto/").post(aeropuerto.crear_nuevo);

  app
    .route("/aeropuerto/:codigo")
    .get(aeropuerto.obtener_info)
    .put(aeropuerto.actualizar)
    .delete(aeropuerto.eliminar);

  // Agregar rutas con consultas especiales (si hay)
  // a .route("aeropuerto/idAeropuerto/<nombre consulta>") un aeropuerto especifico
  // a .route("aeropuerto/<nombre consulta>") para todos los aeropuertos

  var funcionario = require("../controllers/funcionarioController");

  // ##################################
  // RUTAS FUNCIONARIOS               #
  // ##################################
  app.route("/funcionarios/").get(funcionario.lista_funcionarios);

  app.route("/funcionario/").post(funcionario.crear_nuevo);

  app
    .route("/funcionario/:cedula")
    .get(funcionario.obtener_info)
    .put(funcionario.actualizar)
    .delete(funcionario.eliminar);

  var aerolinea = require("../controllers/aerolineaController.js");

  // ##################################
  // RUTAS AEROLINEAS                 #
  // ##################################
  app.route("/aerolineas/").get(aerolinea.lista_aerolineas);

  app.route("/aerolinea/").post(aerolinea.crear_nuevo);

  app
    .route("/aerolinea/:codigo")
    .get(aerolinea.obtener_info)
    .put(aerolinea.actualizar)
    .delete(aerolinea.eliminar);

  var vuelo = require("../controllers/vueloController.js");

  // ##################################
  // RUTAS VUELOS                     #
  // ##################################
  app.route("/vuelos/").get(vuelo.lista_vuelos);

  app.route("/vuelo/").post(vuelo.crear_nuevo);

  app
    .route("/vuelo/:codigo")
    .get(vuelo.obtener_info)
    .put(vuelo.actualizar)
    .delete(vuelo.eliminar);

  var pasajero = require("../controllers/pasajeroController.js");

  // ##################################
  // RUTAS PASAJEROS                  #
  // ##################################
  app.route("/pasajeros/").get(pasajero.lista_pasajeros);

  app.route("/pasajero/").post(pasajero.crear_nuevo);

  app
    .route("/pasajero/:cedula")
    .get(pasajero.obtener_info)
    .put(pasajero.actualizar)
    .delete(pasajero.eliminar);

  var boleto = require("../controllers/boletoController.js");

  // ##################################
  // RUTAS BOLETOS                    #
  // ##################################
  app.route("/boletos/").get(boleto.lista_boletos);

  app.route("/boleto/").post(boleto.crear_nuevo);

  app
    .route("/boleto/:codigo")
    .get(boleto.obtener_info)
    .put(boleto.actualizar)
    .delete(boleto.eliminar);
};
