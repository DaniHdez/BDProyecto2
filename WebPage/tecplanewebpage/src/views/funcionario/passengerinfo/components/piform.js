import React, { Component } from 'react';
import { Container, Form, Button} from 'react-bootstrap';
import InfoCard from './infocard';


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

class PIForm extends Component{
    state ={value: '', isThereInfo: false};
    info = [createData('','','','','','',this.telefonos)];
    telefonos = [createPhoneNumbers(0,'')];
    constructor(props) {    
        super(props);
        this.state ={value: '', isThereInfo: false};
        this.info = [createData('','','','','','',this.telefonos)];
        this.telefonos = [createPhoneNumbers(0,'')];
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getPassengerInfo = this.getPassengerInfo.bind(this);
    }
    
    handleChange(event) {
        //this.setState({value: event.target.value});
        this.state.value = event.target.value;
        console.log(this.state);
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    getPassengerInfo(){
        if(this.state.value!=''){
            this.setState({
                isThereInfo: true
              });
            this.info = info;
        }
    }
    
    render(){
        return(
            <Container style={{ textAlign: 'left'}}>
                <Form>
                    <Form.Group controlId="useridform">
                        <Form.Label>No. Identificación del pasajero:</Form.Label>
                        <Form.Control type="idnumber " placeholder="Introduzca su número de indentificación" style={{ marginLeft: '2%', marginRight: '3%'}} onChange={this.handleChange}/>
                    </Form.Group>
                    <div style={{ display: "flex" }}>
                    <Button variant="primary" style={{ backgroundColor:'#29b6f6', outlineColor:'#29b6f6', borderColor:'#29b6f6', marginLeft: "auto" }} onClick={this.getPassengerInfo}>
                        Consultar
                    </Button>
                    </div>
                </Form>
                <Container>
                    {this.state.isThereInfo && (<React.Fragment style={{marginTop:'10'}}>
                        {this.info.map(row => (
                            <InfoCard 
                                key='0'
                                nombre={row.nombre}
                                cedula={row.cedula}
                                fechanacimiento={row.fechanacimiento}
                                nacionalidad={row.nacionalidad}
                                lugarresidencia={row.lugarresidencia}
                                correo={row.correo}
                                telefonos={row.telefonos}
                        />))}
                        </React.Fragment>) }
                </Container>
    
            </Container>
        );
    }
};

export default PIForm;