var mongoose = require("mongoose");
aeropuerto = mongoose.model("Aeropuerto");

exports.lista_aeropuertos = function(req, res) {
  aeropuerto.find({}, function(error, lista) {
    if (error) res.send(error);
    res.json(lista);
  });
};

exports.crear_nuevo = function(req, res) {
  var new_port = new aeropuerto(req.body);
  new_port.save(function(error, aeropuerto) {
    if (error) res.send(error);
    res.json(aeropuerto);
  });
};

exports.obtener_info = function(req, res) {
  aeropuerto.findById(req.params.codigo, function(error, aeropuerto) {
    if (error) res.send(error);
    res.json(aeropuerto);
  });
};

exports.actualizar = function(req, res) {
  aeropuerto.findOneAndUpdate(
    { Codigo: req.params.codigo },
    req.body,
    { new: true },
    function(err, aeropuerto) {
      if (err) res.send(err);
      res.json(aeropuerto);
    }
  );
};

exports.eliminar = function(req, res) {
  aeropuerto.remove({ Codigo: req.params.codigo }, function(err, aeropuerto) {
    if (err) res.send(err);
    res.json({ message: "Aeropuerto eliminado correctamente" });
  });
};
