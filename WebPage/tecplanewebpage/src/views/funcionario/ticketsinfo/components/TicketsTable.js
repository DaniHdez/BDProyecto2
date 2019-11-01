import React, { Component } from 'react';
import TicketCard from './TicketCard';

  function createData(id, codigo, codigovuelo, maletas, observaciones, estado, idpasajero, asiento) {
    return { id, codigo, codigovuelo, maletas, observaciones, estado, idpasajero, asiento};
  }

  const rows = [
    // createData(Id,Nombre,Origen,Destino, Fecha, Hora, Estado, Precio, Capacidad, Caracteristics, Itinerario, Restricciones),
    createData(1, 11728, 20202, 2,'Maleta de mano y mascota también.','Utilizado',116784453, 52),
    createData(2, 20222, 28829, 2,'Boleto de primera clase. ','Comprado',116784453, 6),
    createData(3, 13443, 28829, 1,'Boleto para clase turista sin maleta de mano.','Comprado',110334453, 113),
    createData(4, 44432, 20202, 1,'Maleta por encima del peso permitido, cobro adicional.','Utilizado',416834459, 44),
    createData(5, 77765, 20202, 1,'Maleta de material delicado.','Utilizado',323327756, 99),
    createData(6, 87866, 20202, 1,'Boleto para clase turista sin maleta de mano.','Utilizado',110334453, 23),
    createData(7, 44543, 28829, 1,'Maleta por encima del peso permitido, cobro adicional.','Comprado',733400440, 67),
    createData(8, 99776, 23002, 1,'Maleta por encima del peso permitido, cobro adicional.','Chequeado',277669898, 55),
    createData(9, 78011, 23002, 1,'Maleta de material delicado.','Chequeado',110334453, 26),
    createData(10, 44533, 99938, 1,'Maleta de material delicado.','Comprado',116784453, 45),

  ];

  class FlightsTable extends Component {
    render (){
      return (
        <React.Fragment>
          {rows.map(row => (
          <TicketCard 
            key={row.id}
            codigo={row.codigo}
            codigovuelo={row.codigovuelo} 
            maletas={row.maletas}
            observaciones={row.observaciones}
            idpasajero={row.idpasajero}
            estado={row.estado}
            asiento={row.asiento}
            >
          </TicketCard>
          ))}
        </React.Fragment>
      );
    }
  }

  export default FlightsTable;