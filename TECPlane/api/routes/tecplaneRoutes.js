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

  //ESPECIALES//
  // app.route("/reportevuelos/").get(aerolinea.get_reporte);

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

  //ESPECIALES ADMIN//
  app.route("/vuelos/:codigoAerolinea").get(vuelo.vuelos_aerolinea);
  // app.route("/preciovuelo/:codigo").get(vuelo.precio_vuelo);
  app.route("/destinos/").get(vuelo.destinos);

  //EESPECIALES FUNCIONARIOS//
  app.route("/vuelosfecha/:fechainicial/:fechafinal").get(vuelo.vuelo_fecha);
  app.route("/vuelosestado/:estado").get(vuelo.vuelo_estado);

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

  // ESPECIALES funcionarios //
  app.route("/pasajerocedula/:cedula").get(pasajero.pasajero_codigo);
  app.route("/pasajeronombre/:nombre").get(pasajero.pasajero_nombre);

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

  //  ESPECIALES ADMIN  //
  app.route("/cantidadboletos/:codigoVuelo").get(boleto.cantidad_vuelo);
  app
    .route("/boletos/:codigoVuelo/:estado")
    .get(boleto.cantidad_vuelo_vendidos);
  app.route("/boletos/:codigoPasajero").get(boleto.boleto_pasajero);
  app.route("/boletospasajeros/").get(boleto.boletos_pasajeros);
  // Reporte boletos comprados y filtros/
  app.route("/boletosvendidos/").get(boleto.boletos_comprados);
  app.route("/boletosvendidos/:estado").get(boleto.boletos_comprados_estado);
  app
    .route("/boletosvendidos/:fechainicial/:fechafinal")
    .get(boleto.boletos_comprados_fechas);
  app
    .route("/boletosvendidospasajero/:nombre")
    .get(boleto.boletos_comprados_pasajero);
  app.route("/toppasajeros").get(boleto.top_pasajeros);

  // ESPECIALES PASAJEROS //

  app.route("/vuelospasajero/:cedula").get(boleto.vuelos_pasajero);
  app
    .route("/vuelospasajerofecha/:cedula/:fechainicial/:fechafinal")
    .get(boleto.vuelos_pasajero_fecha);

  app
    .route("/vuelospasajeroestado/:cedula/:estado")
    .get(boleto.vuelos_pasajero_estado);
};
