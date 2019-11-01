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
                                Fecha de ingreso:
                            </Col>
                            <Col>
                                {this.props.fechaingreso}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='5'>
                                Tipo
                            </Col>
                            <Col>
                                {this.props.tipo}
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col xs='5'>
                                Áreas: 
                            </Col>
                            <Col>
                                <React.Fragment>
                                    {this.props.areas.map(row => (
                                        <Row key={row.id}  style={{ textAlign:'left', marginLeft:2}}>
                                            {row.num}
                                        </Row>
                                    ))}
                                </React.Fragment>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
            </Container>
        );
    }
};

export default InfoCard;