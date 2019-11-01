import React, { Component } from 'react';
import Title from '../../general/Title';
import { Container } from 'react-bootstrap';
import PIForm from './components/piform';

class PassengerInfo extends Component{
    render(){
        return(
            <Container>
                <Title>Consultar Información de pasajero</Title>
                <PIForm></PIForm>
            </Container>
        )
    }
}

export default PassengerInfo;