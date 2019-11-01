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
          title={this.props.nombre}
          subheader={
            <Container style={{marginTop:"2%", marginBottom:"0%"}}>
              <Row>
              <Col>
              <Row>
                <Col xs="auto">
                  <Row>
                    Origen:
                  </Row>
                  <Row>
                    Destino:
                  </Row>
                </Col>
                <Col style={{ marginLeft: 10}}>
                  <Row>
                    {this.props.origen}
                  </Row>
                  <Row>
                    {this.props.destino}
                  </Row>
                </Col>
                </Row>
              </Col>
              <Col>
              <Row>
                <Col xs="auto">
                  <Row>
                    Fecha:
                  </Row>
                  <Row>
                    Hora:
                  </Row>
                </Col>
                <Col style={{ marginLeft: 10}}>
                  <Row>
                    {this.props.fecha}
                  </Row>
                  <Row>
                    {this.props.hora}
                  </Row>
                </Col>
              </Row>
              </Col>
              <Col>
              <Row>
                <Col xs="auto">
                  <Row>
                    Estado: 
                  </Row>
                  <Row>
                    Precio: 
                  </Row>
                </Col>
                <Col style={{ marginLeft: 10}}>
                  <Row>
                    {this.props.estado}
                  </Row>
                  <Row>
                    ${this.props.precio}
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
                    Capacidad máxima:
                  </Row>
                  <Row>
                    Características:
                  </Row>
                  <Row> 
                    Itinerario:
                  </Row>
                  <Row>
                    Restricciones:
                  </Row>
                </Col>
                <Col style={{ marginLeft: 10}}>
                  <Row>
                    {this.props.capacidad}
                  </Row>
                  <Row>
                    {this.props.caracteristicas}
                  </Row>
                  <Row> 
                    {this.props.itinerario}
                  </Row>
                  <Row>
                    {this.props.restricciones}
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