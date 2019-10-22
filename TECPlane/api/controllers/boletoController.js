var mongoose = require("mongoose");
boleto = mongoose.model("Boleto");
vuelo = mongoose.model("Vuelo");

exports.lista_boletos = function(req, res) {
  boleto.find({}, function(error, lista) {
    if (error) res.send(error);
    res.json(lista);
  });
};

exports.crear_nuevo = function(req, res) {
  var new_port = new boleto(req.body);
  new_port.save(function(error, boleto) {
    if (error) res.send(error);
    res.json(boleto);
  });
};

exports.obtener_info = function(req, res) {
  boleto.find({ Codigo: req.params.codigo }, function(error, boleto) {
    if (error) res.send(error);
    res.json(boleto);
  });
};

exports.actualizar = function(req, res) {
  boleto.findOneAndUpdate(
    { Codigo: req.params.codigo },
    req.body,
    { new: true },
    function(err, boleto) {
      if (err) res.send(err);
      res.json(boleto);
    }
  );
};

exports.eliminar = function(req, res) {
  boleto.remove({ Codigo: req.params.codigo }, function(err, boleto) {
    if (err) res.send(err);
    res.json({ message: "Boleto eliminado correctamente" });
  });
};

//ESPECIALES//

exports.cantidad_vuelo = function(req, res) {
  boleto.count({ CodigoVuelo: req.params.codigoVuelo }, function(err, boleto) {
    if (err) res.send(err);
    res.json(boleto);
  });
};

exports.cantidad_vuelo_vendidos = function(req, res) {
  boleto.count(
    { CodigoVuelo: req.params.codigoVuelo, Estado: req.params.estado },
    function(err, boleto) {
      if (err) res.send(err);
      res.json(boleto);
    }
  );
};

exports.boleto_pasajero = function(req, res) {
  boleto.find({ CodigoPasajero: req.params.codigoPasajero }, function(
    err,
    boleto
  ) {
    if (err) res.send(err);
    res.json(boleto);
  });
};
