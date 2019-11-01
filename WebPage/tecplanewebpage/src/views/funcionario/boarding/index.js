import React, { Component } from 'react';
import Title from '../../general/Title';
import { Container } from 'react-bootstrap';
import BoardingForm from './components/boardingform';

class Boarding extends Component{
    render(){
        return(
            <Container>
                <Title>Abordaje</Title>
                <BoardingForm></BoardingForm>
            </Container>
        )
    }
}

export default Boarding;