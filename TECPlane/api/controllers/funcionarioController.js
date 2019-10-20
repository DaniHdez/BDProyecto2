var mongoose = require("mongoose");
funcionario = mongoose.model("Funcionario");

exports.lista_funcionarios = function(req, res) {
  funcionario.find({}, function(error, lista) {
    if (error) res.send(error);
    res.json(lista);
  });
};

exports.crear_nuevo = function(req, res) {
  var new_port = new funcionario(req.body);
  new_port.save(function(error, funcionario) {
    if (error) res.send(error);
    res.json(funcionario);
  });
};

exports.obtener_info = function(req, res) {
  funcionario.find({ Cedula: req.params.cedula }, function(error, funcionario) {
    if (error) res.send(error);
    res.json(funcionario);
  });
};

exports.actualizar = function(req, res) {
  funcionario.findOneAndUpdate(
    { Cedula: req.params.cedula },
    req.body,
    { new: true },
    function(err, funcionario) {
      if (err) res.send(err);
      res.json(funcionario);
    }
  );
};

exports.eliminar = function(req, res) {
  funcionario.remove({ Cedula: req.params.cedula }, function(err, funcionario) {
    if (err) res.send(err);
    res.json({ message: "funcionario eliminado correctamente" });
  });
};
