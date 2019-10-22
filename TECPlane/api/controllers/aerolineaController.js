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

//ESPECIALES//
// var resultado = [];

// function add_aerolinea(linea) {
//   resultado.push(linea);
// }

// exports.get_reporte = function(req, res) {
//   var resultado = [];
//   var error = [];
//   aerolinea.find({}, { Nombre: 1, Codigo: 1, _id: 0 }, function(
//     err,
//     aerolineas
//   ) {
//     if (err) error.push(err);
//     else {
//       aerolineas.forEach(linea => {
//         var temp = {
//           Nombre: linea.Nombre,
//           vuelos: []
//         };
//         vuelo.find(
//           { CodigoAerolinea: aerolinea.codigo },
//           { Codigo: 1, Precio: 1, _id: 0 },
//           function(err, vuelo) {
//             if (err) error = err;
//             else {
//               for (const flight in vuelo) {
//                 if (vuelo.hasOwnProperty(flight)) {
//                   var tempVuelo = {
//                     Nombre: flight.Nombre,
//                     Cantidad: 0,
//                     Monto: 0
//                   };

//                   boleto.count(
//                     { CodigoVuelo: flight.Codigo, Estado: "Vendido" },
//                     function(err, cantidad) {
//                       if (err) error = err;
//                       else {
//                         tempVuelo.Cantidad = cantidad;
//                         tempVuelo.Monto = cantidad * tempVuelo.Precio;
//                       }
//                     }
//                   );
//                   temp.vuelos.push(tempVuelo);
//                 }
//               }
//             }
//           }
//         );
//       });
//     }
//     console.log("result", resultado);
//     if (error.length > 0) res.send(json(error));
//     res.json(resultado);
//   });
// };
