import React, { Component } from 'react';
//import { Container } from '@material-ui/core';
import { Row, Col, Container} from 'react-bootstrap';

class InfoCard extends Component {
    constructor(props) {
        super(props);
        // Just to see what was passed...
        console.log(props);
    }
    render(){
        return(
            <Container style={{ textAlign:'left'}}> 
                <Row>
                    <Col >
                        <Row>
                            <Col xs='5'>
                                Nombre:
                            </Col>
                            <Col>
                                {this.props.nombre}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='5'>
                                No. Identificación:
                            </Col>
                            <Col>
                                {this.props.cedula}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='5'>
                                Fecha de nacimiento:
                            </Col>
                            <Col>
                                {this.props.fechanacimiento}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='5'>
                                Nacionalidad:
                            </Col>
                            <Col>
                                {this.props.nacionalidad}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='5'>
                                Lugar de residencia:
                            </Col>
                            <Col>
                                {this.props.lugarresidencia}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='5'>
                                Teléfono: 
                            </Col>
                            <Col>
                                <React.Fragment>
                                    {this.props.telefonos.map(row => (
                                        <Row key={row.id}  style={{ textAlign:'left', marginLeft:2}}>
                                            {row.num}
                                        </Row>
                                    ))}
                                </React.Fragment>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='5'>
                                Correo electrónico:
                            </Col>
                            <Col>
                                {this.props.correo}
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
            </Container>
        );
    }
};

export default InfoCard;