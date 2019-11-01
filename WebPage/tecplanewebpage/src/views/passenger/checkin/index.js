import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import Title from '../../general/Title';
import CheckInForm from './components/checkin';

class CheckIn extends Component{
  render (){
    return(
      <Container>
          <Title>Check-In</Title>
          <CheckInForm></CheckInForm>
      </Container>
    );
  }
}
export default CheckIn;