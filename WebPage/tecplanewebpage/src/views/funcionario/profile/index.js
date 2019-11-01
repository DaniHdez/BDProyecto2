import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import Title from '../../general/Title';
import InfoCard from './components/infocard';

function createPhoneNumbers(id,num){
    return {id, num};
}

function createData(nombre,cedula,tipo,fechaingreso,areas) {
    return {nombre,cedula,tipo,fechaingreso,areas};
}
  
const areaslist = [
    createPhoneNumbers(1,'Carga'),
    createPhoneNumbers(2,'Mantenimiento'),
];

const info = [
    createData('Catalina Díaz Pereira',107782293,'Técnico','26/08/2018',areaslist),
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
                fechaingreso={row.fechaingreso}
                tipo={row.tipo}
                areas={row.areas}
            ></InfoCard>
          ))}
          </React.Fragment>
      </Container>
    );
  }
}
export default Profile;