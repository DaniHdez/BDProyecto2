var mongoose = require("mongoose");
boleto = mongoose.model("Boleto");

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

// var rangoPasajeros = [];

// function addRango(rango) {
//   rangoPasajeros.push(rango);
// }

function crearReporte(res, listaBoletos) {
  var listaPasajeros = {};
  listaBoletos.forEach(element => {
    var passCode = element.CodigoPasajero;
    if (!(passCode in listaPasajeros)) {
      listaPasajeros[passCode] = {
        vuelos: [],
        cantidad: []
      };
      listaPasajeros[passCode].vuelos.push(element.CodigoVuelo);
      listaPasajeros[passCode].cantidad.push(1);
    } else {
      var i = listaPasajeros[passCode].vuelos.indexOf(element.CodigoVuelo);
      if (i < 0) {
        listaPasajeros[passCode].vuelos.push(element.CodigoVuelo);
        listaPasajeros[passCode].cantidad.push(1);
      } else listaPasajeros[passCode].cantidad[i] += 1;
    }
  });
  var listaFinal = [];
  for (const key in listaPasajeros) {
    var element = listaPasajeros[key];
    var pasajero = {
      CodigoPasajero: key,
      Rango: [Math.max(...element.cantidad), Math.min(...element.cantidad)]
    };

    listaFinal.push(pasajero);
  }
  res.json(listaFinal);
}

exports.boletos_pasajeros = function(req, res) {
  boleto.find(
    {},
    { Codigo: 1, CodigoPasajero: 1, CodigoVuelo: 1, _id: 0 },
    function(err, boleto) {
      if (err) res.send(err);
      crearReporte(res, boleto);
      // res.json(boleto);
    }
  );
};
