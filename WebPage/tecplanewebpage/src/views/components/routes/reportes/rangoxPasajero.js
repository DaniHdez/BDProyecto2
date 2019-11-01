import React,{Component} from 'react';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

// MATERIAL ICONS
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RefreshIcon from '@material-ui/icons/Refresh';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';

import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

// HTTP
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


  const fields = [
    {
        'label' : 'Código',
        'field' : 'Codigo',
        'sort'  : 'asc'
    },
    {
        'label' : 'Pasajero',
        'field' : 'Pasajero',
        'sort'  : 'asc'
    },
    {
        'label' : 'Rango de Boletos Adquiridos',
        'field' : 'rango',
        'sort'  : 'asc'
    },
];


const rows1 = [
    {
        'Codigo':1234,
        'Vuelo':'VueloSC',
        'boletosVendidos':12,
        'monto':'$100'
    },
    {
        'Codigo':2,
        'Vuelo':'Brasil - CR',
        'boletosVendidos':90,
        'monto':'$1820'
    },
    {
        'Codigo':43,
        'Vuelo':'US - Guatemala',
        'boletosVendidos':50,
        'monto':'$1000'
    }

]

const rows2 = [
    {
        'Codigo':89,
        'Vuelo':'Vuelo Premium',
        'boletosVendidos':75,
        'monto':'$8762'
    },
    {
        'Codigo':2,
        'Vuelo':'CR - NICARAGUA',
        'boletosVendidos':90,
        'monto':'$845'
    },
    {
        'Codigo':43,
        'Vuelo':'UK - US',
        'boletosVendidos':60,
        'monto':'$2940'
    }

]

const aerolineas = [
        <MDBListGroup style={{ width: "%100" }}>
        
        <MDBListGroupItem>
        Avianca
        <MDBTable btn fixed>
        <MDBTableHead columns={fields} />
        <MDBTableBody rows={rows1} />
        </MDBTable>
        </MDBListGroupItem>

        <MDBListGroupItem>
            Copa Airlines
            <MDBTable btn fixed>
            <MDBTableHead columns={fields} />
            <MDBTableBody rows={rows2} />
            </MDBTable>
            </MDBListGroupItem>
    </MDBListGroup>
]

class Reporte extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            data_temp : [],
            data_panel : [],
        };



    // componentDidMount(){
    //     axios.get('http://localhost:8080/aeropuertos/')
    //     .then(response => {
    //       var rows = []
    //       if(response.data.length>0){
    //         response.data.forEach(line => {
    //           var temp = {}  
    //           fields.forEach(element => {
    //               console.log("COMPONENT DIDMOUTN",element)
    //               if(element.label !== 'Seleccionar'){
    //                     if(element.field == "telefono"||element.field == "email")
    //                         temp[element.field] = line.Contacto[element.field]
    //                     else
    //                     temp[element.field] = line[element.field]
    //                 }
    //             } );    
    //           console.log("print", temp)  
    //           rows.push(temp)
    //         });
    //       }
    //       else
    //         rows = []
    //       var empty_data = rows.length>0 ? false : true; 
    //       this.set_values(rows);
    //       this.setState( { data:rows, empty:empty_data } );
          
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       alert('Error tratando de obtener Aeropuertos')
    
    //     });
      
    }


    render(){
    return(
        <MDBCard narrow>
         <Dialog
            open={this.state.confirm}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
        <DialogTitle id="alert-dialog-slide-title">{"¿Seguro que desea eleminar los elementos seleccionados?"}</DialogTitle>
        <DialogActions>
          <Button onClick={() => this.handleClose()} color="primary">
            CANCELAR
          </Button>
          <Button onClick={() => this.confirmDelete()} color="primary">
            ACEPTAR
          </Button>
        </DialogActions>
      </Dialog>

        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
            <a href="#" className="white-text mx-3">{'Reporte de Vuelos por Aerolíneas'}</a>
            <div>

            <MDBBtn outline size="sm" color="white" className="px-2">
                <RefreshIcon/>
            </MDBBtn>
            </div>
        </MDBCardHeader>
            <MDBCardBody cascade>{aerolineas}</MDBCardBody>
        </MDBCard>
    );}
};


export default Reporte;




