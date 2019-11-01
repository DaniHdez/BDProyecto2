import React, { Component } from 'react';
import MyFlightCard from './MyFlightCard';

function createData(id, nombre, origen, destino, fecha, hora, estado, precio, capacidad, caracteristicas, itinerario,restricciones) {
    return { id, nombre, origen, destino, fecha, hora, estado, precio, capacidad, caracteristicas, itinerario,restricciones};
}
  
const rows = [
  // createData(Id,Nombre,Origen,Destino, Fecha, Hora, Estado, Precio, Capacidad, Caracteristics, Itinerario, Restricciones),
  createData(1,"CRBrasil",'Costa Rica', 'Brasil', '12/06/2012', '20:30:00', 'A tiempo', 980, 120, "Vuelo en clase turista, bebidas incluidas. Una comida en el avión, venta de snacks.", "19:00 - Primer Check-in. 20:00 - Ingreso al avión. 20:30 - Despegue.", "Presentar pasaporte y tiquete en el check in y en el ingreso al avión."),
  createData(2,"BrasilCR",'Brasil', 'Costa Rica', '18/06/2012', '5:00:00', 'Retrasado', 980, 120, "Vuelo en clase turista, bebidas incluidas. Una comida en el avión, venta de snacks.", "19:00 - Primer Check-in. 20:00 - Ingreso al avión. 20:30 - Despegue.", "Presentar pasaporte y tiquete en el check in y en el ingreso al avión."),
  createData(3,"BrasilPR",'Brasil', 'Puerto Rico', '17/07/2017', '20:30:00', 'A tiempo', 700, 120, "Vuelo en clase turista, bebidas incluidas. Una comida en el avión, venta de snacks.", "19:00 - Primer Check-in. 20:00 - Ingreso al avión. 20:30 - Despegue.", "Presentar pasaporte y tiquete en el check in y en el ingreso al avión."),
  createData(4,"PRBrasil",'Puerto Rico', 'Brasil', '12/12/2017', '17:30:00', 'A tiempo', 750, 120, "Vuelo en clase turista, bebidas incluidas. Una comida en el avión, venta de snacks.", "19:00 - Primer Check-in. 20:00 - Ingreso al avión. 20:30 - Despegue.", "Presentar pasaporte y tiquete en el check in y en el ingreso al avión."),
  createData(5,"CRUSA",'Costa Rica', 'Estados Unidos', '20/09/2019', '08:30:00', 'Cancelado', 400, 120, "Vuelo en clase turista, bebidas incluidas. Una comida en el avión, venta de snacks.", "19:00 - Primer Check-in. 20:00 - Ingreso al avión. 20:30 - Despegue.", "Presentar pasaporte y tiquete en el check in y en el ingreso al avión."),
];

  class MyFlightsTable extends Component {
    render (){
      return (
        <React.Fragment>
          {rows.map(row => (
          <MyFlightCard 
            key={row.id}
            nombre={row.nombre}
            origen={row.origen} 
            destino={row.destino}
            fecha={row.fecha}
            hora={row.hora}
            estado={row.estado}
            precio={row.precio}
            capacidad={row.capacidad}
            caracteristicas={row.caracteristicas}
            itinerario={row.itinerario}
            restricciones={row.restricciones}
            >
          </MyFlightCard>
          ))}
        </React.Fragment>
      );
    }
  }

  export default MyFlightsTable;