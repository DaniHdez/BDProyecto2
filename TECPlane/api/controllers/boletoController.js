var mongoose = require("mongoose");
boleto = mongoose.model("Boleto");
pasajero = mongoose.model("Pasajero");
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

function reporteBoletosComprados(res, listaBoletosComprados, listaPasajeros) {
  var listaFinal = [];
  var boleto = {};
  listaBoletosComprados.forEach(element => {
    var codigoPasajero = element.CodigoPasajero;
    listaPasajeros.forEach(element2 => {
      var cedula = element2.Cedula;
      if (codigoPasajero == cedula) {
        boleto = {
          codigo: element.Codigo,
          pasajero: element2.Nombre,
          estado: element.Estado,
          fecha: element.FechaCompra
        };
      }
    });
    listaFinal.push(boleto);
  });
  // res.json(listaBoletosComprados);
  res.json(listaFinal);
}

function pasajerosCodigo(res, listaBoletos) {
  pasajero.find({}, { Cedula: 1, Nombre: 1, _id: 0 }, function(err, pasajero) {
    if (err) res.send(err);
    reporteBoletosComprados(res, listaBoletos, pasajero);
    //res.json(pasajero);
  });
}

exports.boletos_comprados = function(req, res) {
  boleto.find(
    {
      $or: [
        { Estado: "Comprado" },
        { Estado: "Chequeado" },
        { Estado: "Utilizado" }
      ]
    },
    {
      Codigo: 1,
      Estado: 1,
      CodigoPasajero: 1,
      CodigoVuelo: 1,
      FechaCompra: 1,
      _id: 0
    },
    function(err, boleto) {
      if (err) res.send(err);
      pasajerosCodigo(res, boleto);
      //res.json(boleto);
    }
  );
};

exports.boletos_comprados_estado = function(req, res) {
  boleto.find(
    { Estado: req.params.estado },
    {
      Codigo: 1,
      Estado: 1,
      CodigoPasajero: 1,
      CodigoVuelo: 1,
      FechaCompra: 1,
      _id: 0
    },
    function(err, boleto) {
      if (err) res.send(err);
      pasajerosCodigo(res, boleto);
      //res.json(boleto);
    }
  );
};

exports.boletos_comprados_fechas = function(req, res) {
  boleto.find(
    {
      $and: [
        {
          FechaCompra: {
            $gte: req.params.fechainicial,
            $lt: req.params.fechafinal
          }
        },
        {
          $or: [
            { Estado: "Comprado" },
            { Estado: "Chequeado" },
            { Estado: "Utilizado" }
          ]
        }
      ]
    },
    {
      Codigo: 1,
      Estado: 1,
      CodigoPasajero: 1,
      CodigoVuelo: 1,
      FechaCompra: 1,
      _id: 0
    },
    function(err, boleto) {
      if (err) res.send(err);
      pasajerosCodigo(res, boleto);
      //res.json(boleto);
    }
  );
};

function boletos_comprados_pnombre(res, cedula) {
  console.log(cedula);
  boleto.find(
    {
      $and: [
        { CodigoPasajero: cedula[0].Cedula },
        {
          $or: [
            { Estado: "Comprado" },
            { Estado: "Chequeado" },
            { Estado: "Utilizado" }
          ]
        }
      ]
    },
    {
      Codigo: 1,
      Estado: 1,
      CodigoPasajero: 1,
      CodigoVuelo: 1,
      FechaCompra: 1,
      _id: 0
    },
    function(err, boleto) {
      if (err) res.send(err);
      pasajerosCodigo(res, boleto);
      //res.json(boleto);
    }
  );
}

exports.boletos_comprados_pasajero = function(req, res) {
  pasajero.find({ Nombre: req.params.nombre }, { Cedula: 1, _id: 0 }, function(
    err,
    pasajero
  ) {
    if (err) res.send(err);
    // res.json(pasajero);
    boletos_comprados_pnombre(res, pasajero);
  });
};

function pasajeros_distintos(res, listaPasVuelo) {
  listaVuelos = {};
  listaPasVuelo.forEach(element => {
    var passenger = element.CodigoPasajero;
    var flight = element.CodigoVuelo;
    if (!(passenger in listaVuelos)) {
      listaVuelos[passenger] = {
        vuelos: [],
        cantidad: 0
      };
      listaVuelos[passenger].vuelos.push(flight);
      listaVuelos[passenger].cantidad += 1;
    } else {
      if (listaVuelos[passenger].vuelos.indexOf(flight) == -1) {
        listaVuelos[passenger].vuelos.push(flight);
        listaVuelos[passenger].cantidad += 1;
      }
    }
  });
  res.json(listaVuelos);
}

exports.top_pasajeros = function(req, res) {
  listaVuelos = {};
  boleto.find(
    {
      $or: [
        { Estado: "Comprado" },
        { Estado: "Chequeado" },
        { Estado: "Utilizado" }
      ]
    },
    { CodigoPasajero: 1, CodigoVuelo: 1, _id: 0 },
    function(err, boleto) {
      if (err) res.send(err);
      // res.json(boleto);
      pasajeros_distintos(res, boleto);
    }
  );
};
// ESPECIALES PASAJEROS //

function obtener_info_vuelos(res, listaVuelos) {
  listaReporte = [];
  vueloPass = {};
  vuelo.find(
    {},
    { Codigo: 1, Nombre: 1, Estado: 1, FechaVuelo: 1, _id: 0 },
    function(err, vuelo) {
      if (err) res.send(err);
      //res.json(vuelo);
      vuelo.forEach(element => {
        var flight = element.Codigo;
        if (listaVuelos.indexOf(flight) != -1) {
          vueloPass = {
            Nombre: element.Nombre,
            Estado: element.Estado,
            Fecha: element.FechaVuelo
          };
          listaReporte.push(vueloPass);
        }
      });
      res.json(listaReporte);
    }
  );
}

exports.vuelos_pasajero = function(req, res) {
  boleto.find(
    {
      $and: [
        { CodigoPasajero: req.params.cedula },
        {
          $or: [
            { Estado: "Comprado" },
            { Estado: "Chequeado" },
            { Estado: "Utilizado" }
          ]
        }
      ]
    },
    { CodigoVuelo: 1, _id: 0 },
    function(err, boleto) {
      if (err) res.send(err);
      //res.json(boleto);
      vuelos = [];
      boleto.forEach(element => {
        var flight = element.CodigoVuelo;
        if (vuelos.indexOf(flight) == -1) {
          vuelos.push(flight);
        }
      });
      // res.json(vuelos);
      obtener_info_vuelos(res, vuelos);
    }
  );
};

function obtener_info_vuelos_fecha(res, listaVuelos, inicial, final) {
  listaReporte = [];
  vueloPass = {};
  vuelo.find(
    {
      FechaVuelo: {
        $gte: inicial,
        $lt: final
      }
    },
    { Codigo: 1, Nombre: 1, Estado: 1, FechaVuelo: 1, _id: 0 },
    function(err, vuelo) {
      if (err) res.send(err);
      // res.json(vuelo);
      vuelo.forEach(element => {
        var flight = element.Codigo;
        if (listaVuelos.indexOf(flight) != -1) {
          vueloPass = {
            Nombre: element.Nombre,
            Estado: element.Estado,
            Fecha: element.FechaVuelo
          };
          listaReporte.push(vueloPass);
        }
      });
      res.json(listaReporte);
    }
  );
}

exports.vuelos_pasajero_fecha = function(req, res) {
  boleto.find(
    {
      $and: [
        { CodigoPasajero: req.params.cedula },
        {
          $or: [
            { Estado: "Comprado" },
            { Estado: "Chequeado" },
            { Estado: "Utilizado" }
          ]
        }
      ]
    },
    { CodigoVuelo: 1, _id: 0 },
    function(err, boleto) {
      if (err) res.send(err);
      //res.json(boleto);
      vuelos = [];
      boleto.forEach(element => {
        var flight = element.CodigoVuelo;
        if (vuelos.indexOf(flight) == -1) {
          vuelos.push(flight);
        }
      });
      // res.json(vuelos);
      obtener_info_vuelos_fecha(
        res,
        vuelos,
        req.params.fechainicial,
        req.params.fechafinal
      );
    }
  );
};

function obtener_info_vuelos_estado(res, listaVuelos, estado) {
  listaReporte = [];
  vueloPass = {};
  vuelo.find(
    {
      Estado: estado
    },
    { Codigo: 1, Nombre: 1, Estado: 1, FechaVuelo: 1, _id: 0 },
    function(err, vuelo) {
      if (err) res.send(err);
      // res.json(vuelo);
      vuelo.forEach(element => {
        var flight = element.Codigo;
        if (listaVuelos.indexOf(flight) != -1) {
          vueloPass = {
            Nombre: element.Nombre,
            Estado: element.Estado,
            Fecha: element.FechaVuelo
          };
          listaReporte.push(vueloPass);
        }
      });
      res.json(listaReporte);
    }
  );
}

exports.vuelos_pasajero_estado = function(req, res) {
  boleto.find(
    {
      $and: [
        { CodigoPasajero: req.params.cedula },
        {
          $or: [
            { Estado: "Comprado" },
            { Estado: "Chequeado" },
            { Estado: "Utilizado" }
          ]
        }
      ]
    },
    { CodigoVuelo: 1, _id: 0 },
    function(err, boleto) {
      if (err) res.send(err);
      //res.json(boleto);
      vuelos = [];
      boleto.forEach(element => {
        var flight = element.CodigoVuelo;
        if (vuelos.indexOf(flight) == -1) {
          vuelos.push(flight);
        }
      });
      // res.json(vuelos);
      obtener_info_vuelos_estado(res, vuelos, req.params.estado);
    }
  );
};
