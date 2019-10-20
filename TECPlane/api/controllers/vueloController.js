var mongoose = require("mongoose");
vuelo = mongoose.model("Vuelo");

exports.lista_vuelos = function(req, res) {
  vuelo.find({}, function(error, lista) {
    if (error) res.send(error);
    res.json(lista);
  });
};

exports.crear_nuevo = function(req, res) {
  var new_port = new vuelo(req.body);
  new_port.save(function(error, vuelo) {
    if (error) res.send(error);
    res.json(vuelo);
  });
};

exports.obtener_info = function(req, res) {
  vuelo.find({ Codigo: req.params.codigo }, function(error, vuelo) {
    if (error) res.send(error);
    res.json(vuelo);
  });
};

exports.actualizar = function(req, res) {
  vuelo.findOneAndUpdate(
    { Codigo: req.params.codigo },
    req.body,
    { new: true },
    function(err, vuelo) {
      if (err) res.send(err);
      res.json(vuelo);
    }
  );
};

exports.eliminar = function(req, res) {
  vuelo.remove({ Codigo: req.params.codigo }, function(err, vuelo) {
    if (err) res.send(err);
    res.json({ message: "Vuelo eliminado correctamente" });
  });
};
