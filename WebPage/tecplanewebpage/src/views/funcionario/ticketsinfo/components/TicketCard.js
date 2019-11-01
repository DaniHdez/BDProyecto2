import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Container, Row, Col } from 'reactstrap';

class FlightCard extends Component{
  render (){
    return(
      <Card >
        <CardHeader
          title='Boleto'
          subheader={
            <Container style={{marginTop:"2%", marginBottom:"0%"}}>
              <Row>
              <Col>
              <Row>
                <Col xs="auto">
                  <Row>
                    Código de boleto:
                  </Row>
                  <Row>
                    Código de vuelo:
                  </Row>
                </Col>
                <Col style={{ marginLeft: 10}}>
                  <Row>
                    {this.props.codigo}
                  </Row>
                  <Row>
                    {this.props.codigovuelo}
                  </Row>
                </Col>
                </Row>
              </Col>
              <Col>
              <Row>
                <Col xs="auto">
                  <Row>
                    Identificación de pasajero:
                  </Row>
                  <Row>
                    Estado:
                  </Row>
                </Col>
                <Col style={{ marginLeft: 10}}>
                  <Row>
                    {this.props.idpasajero}
                  </Row>
                  <Row>
                    {this.props.estado}
                  </Row>
                </Col>
              </Row>
              </Col>
              <Col>
              <Row>
                <Col xs="auto">
                  <Row>
                    Asiento: 
                  </Row>
                  <Row>
                    Maletas: 
                  </Row>
                </Col>
                <Col style={{ marginLeft: 10}}>
                  <Row>
                    {this.props.asiento}
                  </Row>
                  <Row>
                    {this.props.maletas}
                  </Row>
                </Col>
                </Row>
              </Col>
              </Row>
            </Container>
          }
          style={{ textAlign: 'left'}}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" paddingTop="0">
            <Container>
              <Row>
                <Col xs="auto">
                  <Row>
                    Observaciones: 
                  </Row>
                </Col>
                <Col style={{ marginLeft: 10}}>
                  <Row>
                    {this.props.observaciones}
                  </Row>
                </Col>
              </Row>
            </Container>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
export default FlightCard;