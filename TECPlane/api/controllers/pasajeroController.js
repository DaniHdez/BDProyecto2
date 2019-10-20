var mongoose = require("mongoose");
pasajero = mongoose.model("Pasajero");

exports.lista_pasajeros = function(req, res) {
  pasajero.find({}, function(error, lista) {
    if (error) res.send(error);
    res.json(lista);
  });
};

exports.crear_nuevo = function(req, res) {
  var new_port = new pasajero(req.body);
  new_port.save(function(error, pasajero) {
    if (error) res.send(error);
    res.json(pasajero);
  });
};

exports.obtener_info = function(req, res) {
  pasajero.find({ Cedula: req.params.cedula }, function(error, pasajero) {
    if (error) res.send(error);
    res.json(pasajero);
  });
};

exports.actualizar = function(req, res) {
  pasajero.findOneAndUpdate(
    { Cedula: req.params.cedula },
    req.body,
    { new: true },
    function(err, pasajero) {
      if (err) res.send(err);
      res.json(pasajero);
    }
  );
};

exports.eliminar = function(req, res) {
  pasajero.remove({ Cedula: req.params.cedula }, function(err, pasajero) {
    if (err) res.send(err);
    res.json({ message: "Pasajero eliminado correctamente" });
  });
};
