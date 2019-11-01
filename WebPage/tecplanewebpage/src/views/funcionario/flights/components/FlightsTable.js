import React, { Component } from 'react';
import FlightCard from './FlightCard';

  function createData(id, nombre, origen, destino, fecha, hora, estado, precio, capacidad, caracteristicas, itinerario,restricciones) {
    return { id, nombre, origen, destino, fecha, hora, estado, precio, capacidad, caracteristicas, itinerario,restricciones};
  }

  const rows = [
    // createData(Id,Nombre,Origen,Destino, Fecha, Hora, Estado, Precio, Capacidad, Caracteristics, Itinerario, Restricciones),
    createData(1,"CRFrancia",'Costa Rica', 'Francia', '22/03/2020', '06:00:00', 'A tiempo', 980, 120, "Vuelo en clase turista, bebidas incluidas. Una comida en el avión, venta de snacks.", "19:00 - Primer Check-in. 20:00 - Ingreso al avión. 20:30 - Despegue.", "Presentar pasaporte y tiquete en el check in y en el ingreso al avión."),
    createData(2,"ColAle",'Colombia', 'Alemania', '02/01/2020', '17:30:00', 'A tiempo', 750, 120, "Vuelo en clase turista, bebidas incluidas. Una comida en el avión, venta de snacks.", "19:00 - Primer Check-in. 20:00 - Ingreso al avión. 20:30 - Despegue.", "Presentar pasaporte y tiquete en el check in y en el ingreso al avión."),
    createData(3,"CRFrancia",'Costa Rica', 'Francia', '25/01/2020', '16:00:00', 'A tiempo', 980, 120, "Vuelo en clase turista, bebidas incluidas. Una comida en el avión, venta de snacks.", "19:00 - Primer Check-in. 20:00 - Ingreso al avión. 20:30 - Despegue.", "Presentar pasaporte y tiquete en el check in y en el ingreso al avión."),
    createData(4,"CRMex",'Costa Rica', 'México', '20/12/2019', '08:30:00', 'A tiempo', 400, 120, "Vuelo en clase turista, bebidas incluidas. Una comida en el avión, venta de snacks.", "19:00 - Primer Check-in. 20:00 - Ingreso al avión. 20:30 - Despegue.", "Presentar pasaporte y tiquete en el check in y en el ingreso al avión."),
    createData(5,"CRFrancia",'Costa Rica', 'Francia', '12/11/2019', '20:30:00', 'A tiempo', 980, 120, "Vuelo en clase turista, bebidas incluidas. Una comida en el avión, venta de snacks.", "19:00 - Primer Check-in. 20:00 - Ingreso al avión. 20:30 - Despegue.", "Presentar pasaporte y tiquete en el check in y en el ingreso al avión."),
    createData(6,"EspañaUSA",'España', 'Estados Unidos', '22/12/2019', '20:30:00', 'A tiempo', 700, 120, "Vuelo en clase turista, bebidas incluidas. Una comida en el avión, venta de snacks.", "19:00 - Primer Check-in. 20:00 - Ingreso al avión. 20:30 - Despegue.", "Presentar pasaporte y tiquete en el check in y en el ingreso al avión."),
  ];

  class FlightsTable extends Component {
    render (){
      return (
        <React.Fragment>
          {rows.map(row => (
          <FlightCard 
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
          </FlightCard>
          ))}
        </React.Fragment>
      );
    }
  }

  export default FlightsTable;