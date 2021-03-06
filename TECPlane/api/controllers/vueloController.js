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

//ESPECIALES//

exports.precio_vuelo = function(req, res) {
  vuelo.find({ Codigo: req.params.codigo }, { Precio: 1, _id: 0 }, function(
    err,
    vuelo
  ) {
    if (err) res.send(err);
    res.json(vuelo);
  });
};

exports.vuelos_aerolinea = function(req, res) {
  vuelo.find(
    { CodigoAerolinea: req.params.codigoAerolinea },
    { Nombre: 1, BoletosVendidos: 1, Precio: 1, _id: 0 },
    function(err, vuelo) {
      if (err) res.send(err);
      res.json(vuelo);
    }
  );
};

function reporteDestinos(res, listaDestinos) {
  var listaFinal = {};
  listaDestinos.forEach(element => {
    var destiny = element.Destino;
    if (!(destiny in listaFinal)) {
      var cantidad = element.BoletosVendidos;
      if (cantidad != undefined) {
        listaFinal[destiny] = {
          cantidad: element.BoletosVendidos
        };
      }
    } else {
      var cantidad = element.BoletosVendidos;
      if (cantidad != undefined) {
        listaFinal[destiny].cantidad += element.BoletosVendidos;
      }
    }
  });
  res.json(listaFinal);
}

exports.destinos = function(req, res) {
  vuelo.find({}, { Destino: 1, BoletosVendidos: 1, _id: 0 }, function(
    err,
    vuelo
  ) {
    if (err) res.send(err);
    reporteDestinos(res, vuelo);
  });
};

exports.vuelo_fecha = function(req, res) {
  vuelo.find(
    {
      FechaVuelo: {
        $gte: req.params.fechainicial,
        $lt: req.params.fechafinal
      }
    },
    {
      Nombre: 1,
      Estado: 1,
      FechaVuelo: 1,
      Restricciones: 1,
      Caracteristicas: 1,
      _id: 0
    },
    function(err, infoVuelo) {
      if (err) res.send(err);
      res.json(infoVuelo);
    }
  );
};

exports.vuelo_estado = function(req, res) {
  vuelo.find(
    { Estado: req.params.estado },
    {
      Nombre: 1,
      Estado: 1,
      FechaVuelo: 1,
      Restricciones: 1,
      Caracteristicas: 1,
      _id: 0
    },
    function(err, infoVuelo) {
      if (err) res.send(err);
      res.json(infoVuelo);
    }
  );
};
