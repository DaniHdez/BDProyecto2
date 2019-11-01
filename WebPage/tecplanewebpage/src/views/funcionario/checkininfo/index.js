import React, { Component } from 'react';
import Title from '../../general/Title';
import { Container } from '@material-ui/core';
import CiIForm from './components/ciiform';

class CheckInInfo extends Component{
    render(){
        return(
            <Container>
                <Title>Comprobar información de Check-In</Title>
                <CiIForm></CiIForm>
            </Container>
        )
    }
}

export default CheckInInfo;