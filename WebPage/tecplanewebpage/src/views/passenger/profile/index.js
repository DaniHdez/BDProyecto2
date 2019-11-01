import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import Title from '../../general/Title';
import InfoCard from './components/infocard';

function createPhoneNumbers(id,num){
    return {id, num};
}

function createData(nombre,cedula,fechanacimiento,nacionalidad,lugarresidencia,correo,telefonos) {
    return {nombre,cedula,fechanacimiento,nacionalidad,lugarresidencia,correo,telefonos};
}
  
const tels = [
    createPhoneNumbers(1,88775699),
    createPhoneNumbers(2,67573992),
];

const info = [
    createData('María Jośe Jiménez Nuñez',116784453,'12/03/1997','Costarricense','San José, Cantón Vásquez de Coronado, Distrito Patalillo, Urb. Venecia Casa 130F.','mariajimenez@gmail.com', tels),
];

class Profile extends Component{
  render (){
    return(
      <Container>
        <Title>Información Personal</Title>
        <React.Fragment>
          {info.map(row => (
            <InfoCard 
                key='0'
                nombre={row.nombre}
                cedula={row.cedula}
                fechanacimiento={row.fechanacimiento}
                nacionalidad={row.nacionalidad}
                lugarresidencia={row.lugarresidencia}
                correo={row.correo}
                telefonos={row.telefonos}
            ></InfoCard>
          ))}
          </React.Fragment>
      </Container>
    );
  }
}
export default Profile;