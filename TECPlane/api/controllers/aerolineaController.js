var mongoose = require("mongoose");
aerolinea = mongoose.model("Aerolinea");
vuelo = mongoose.model("Vuelo");
boleto = mongoose.model("Boleto");

exports.lista_aerolineas = function(req, res) {
  aerolinea.find({}, function(error, lista) {
    if (error) res.send(error);
    res.json(lista);
  });
};

exports.crear_nuevo = function(req, res) {
  var new_port = new aerolinea(req.body);
  new_port.save(function(error, aerolinea) {
    if (error) res.send(error);
    res.json(aerolinea);
  });
};

exports.obtener_info = function(req, res) {
  aerolinea.find({ Codigo: req.params.codigo }, function(error, aerolinea) {
    if (error) res.send(error);
    res.json(aerolinea);
  });
};

exports.actualizar = function(req, res) {
  aerolinea.findOneAndUpdate(
    { Codigo: req.params.codigo },
    req.body,
    { new: true },
    function(err, aerolinea) {
      if (err) res.send(err);
      res.json(aerolinea);
    }
  );
};

exports.eliminar = function(req, res) {
  aerolinea.remove({ Codigo: req.params.codigo }, function(err, aerolinea) {
    if (err) res.send(err);
    res.json({ message: "Aerolinea eliminada correctamente" });
  });
};
