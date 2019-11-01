import React,{Component} from 'react';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

// MATERIAL ICONS
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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
import { Container, TextField } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


  const fields = [
    {
    'label' : 'Seleccionar' 
    },
    {
        'label' : 'Código',
        'field' : 'Codigo',
        'sort'  : 'asc'
    },
    {
        'label' : 'Nombre',
        'field' : 'Nombre',
        'sort'  : 'asc'
    },
    {
        'label' : 'Ver Países'
    }
];


const subheader = {
    backgroundColor : '#0080ff',
    display :"flex",
    flexWrap : "nowrap",
    justifyContent: "space-around",
    alignItems : "center",
}
const deletePais = {
display :"flex",
// flexWrap : "nowrap",
justifyContent: "space-between",
alignItems : "center",
}


var rows =  [
    {
        dato:
     <MDBCard narrow>
         <MDBCardHeader style={subheader}>
         <MDBInput size="sm" type="textbox" background  hint={"Nombre"}/>
         <h7 className="white-text mx-3">12389</h7>
         <MDBBtn outline size="sm" color="white" className="px-1">
                <CheckCircleIcon/>
            </MDBBtn>
            <MDBBtn outline size="sm" color="white" className="px-1">
                <CancelIcon/>
            </MDBBtn>
         {/* <MDBBtn outline color="white" className="px-2"><a>Ver Paises</a></MDBBtn> */}
         </MDBCardHeader>
     <MDBCardBody>
     Lista de Paises:
     <MDBListGroup style={{ width: "%100" }}>
    
     <MDBListGroupItem style ={deletePais}>
         <div><a> Panamá jajjaja</a></div>
        <MDBBtn outline size="sm" color="#0080ff" className="px-1"><DeleteIcon/></MDBBtn>   
     </MDBListGroupItem>
     <MDBListGroupItem style ={deletePais}>
         <div><a> México</a></div>
         <div>
            <MDBBtn outline size="sm" color="#0080ff" className="px-1"><DeleteIcon/></MDBBtn>   
        </div>  
     </MDBListGroupItem>
     <MDBListGroupItem style ={deletePais}>
        <a> Costa Rica</a>    
        <MDBBtn outline size="sm" color="#0080ff" className="px-1"><DeleteIcon/></MDBBtn>   
     </MDBListGroupItem>
     <MDBListGroupItem style ={deletePais}>
        <a> Puerto Rico</a>    
        <MDBBtn outline size="sm" color="#0080ff" className="px-1"><DeleteIcon/></MDBBtn>   
     </MDBListGroupItem>
     <MDBListGroupItem style ={deletePais}>
        <a>Estados Unidos</a>    
        <MDBBtn outline size="sm" color="#0080ff" className="px-1"><DeleteIcon/></MDBBtn>   
     </MDBListGroupItem>
     <MDBBtn outline size="sm" color="#0080ff" className="px-1"><AddCircleOutlineIcon/></MDBBtn>   
     </MDBListGroup>
     </MDBCardBody>     
  </MDBCard>,
  dato3:
  <MDBCard narrow>
      <MDBCardHeader style={subheader}>
      <h6 className="white-text mx-3">United Airlines</h6>
      <h7 className="white-text mx-3">2456</h7>
      <MDBBtn outline size="sm" color="white" className="px-1">
                <EditIcon/>
            </MDBBtn>
      {/* <MDBBtn outline color="white" className="px-2"><a>Ver Paises</a></MDBBtn> */}
      </MDBCardHeader>
  <MDBCardBody>
  Lista de Paises:
  <MDBListGroup style={{ width: "%100" }}>
      <MDBListGroupItem>España</MDBListGroupItem>
      <MDBListGroupItem>Guatemala</MDBListGroupItem>

  </MDBListGroup>
  </MDBCardBody>     
</MDBCard>,
dato4:
<MDBCard narrow>
    <MDBCardHeader style={subheader}>
    <h6 className="white-text mx-3">Singapore Airlines</h6>
    <h7 className="white-text mx-3">10987</h7>
    <MDBBtn outline size="sm" color="white" className="px-1">
                <EditIcon/>
            </MDBBtn>
    {/* <MDBBtn outline color="white" className="px-2"><a>Ver Paises</a></MDBBtn> */}
    </MDBCardHeader>
<MDBCardBody>
Lista de Paises:
<MDBListGroup style={{ width: "%100" }}>
    <MDBListGroupItem>Singapore</MDBListGroupItem>
    <MDBListGroupItem>Estados Unidos</MDBListGroupItem>
    <MDBListGroupItem>Costa Rica</MDBListGroupItem>
</MDBListGroup>
</MDBCardBody>     
</MDBCard>
    },

    {
        dato:
        <MDBCard narrow>
            <MDBCardHeader style={subheader}>
            <h6 className="white-text mx-3">Avianca</h6>
            <h7 className="white-text mx-3">77782</h7>
            <MDBBtn outline size="sm" color="white" className="px-1">
                <EditIcon/>
            </MDBBtn>
            {/* <MDBBtn outline color="white" className="px-2"><a>Ver Paises</a></MDBBtn> */}
            </MDBCardHeader>
        <MDBCardBody>
        Lista de Paises:
        <MDBListGroup style={{ width: "%100" }}>
            <MDBListGroupItem>Costa Rica</MDBListGroupItem>
            <MDBListGroupItem>Estados Unidos</MDBListGroupItem>

        </MDBListGroup>
        </MDBCardBody>     
     </MDBCard>,
     dato2:
     <MDBCard narrow>
         <MDBCardHeader style={subheader}>
         <h6 className="white-text mx-3">Copa Airlines</h6>
         <h7 className="white-text mx-3">12389</h7>
         <MDBBtn outline size="sm" color="white" className="px-1">
                <EditIcon/>
            </MDBBtn>
         {/* <MDBBtn outline color="white" className="px-2"><a>Ver Paises</a></MDBBtn> */}
         </MDBCardHeader>
     <MDBCardBody>
     Lista de Paises:
     <MDBListGroup style={{ width: "%100" }}>
         <MDBListGroupItem>Panamá</MDBListGroupItem>
         <MDBListGroupItem>México</MDBListGroupItem>
         <MDBListGroupItem>Costa Rica</MDBListGroupItem>
         <MDBListGroupItem>Puerto Rico</MDBListGroupItem>
         <MDBListGroupItem>Estados Unidos</MDBListGroupItem>
     </MDBListGroup>
     </MDBCardBody>     
  </MDBCard>,
dato4:
<MDBCard narrow>
    <MDBCardHeader style={subheader}>
    <h6 className="white-text mx-3">Singapore Airlines</h6>
    <h7 className="white-text mx-3">10987</h7>
    <MDBBtn outline size="sm" color="white" className="px-1">
                <EditIcon/>
            </MDBBtn>
    {/* <MDBBtn outline color="white" className="px-2"><a>Ver Paises</a></MDBBtn> */}
    </MDBCardHeader>
<MDBCardBody>
Lista de Paises:
<MDBListGroup style={{ width: "%100" }}>
    <MDBListGroupItem>Singapore</MDBListGroupItem>
    <MDBListGroupItem>Estados Unidos</MDBListGroupItem>
    <MDBListGroupItem>Costa Rica</MDBListGroupItem>
</MDBListGroup>
</MDBCardBody>     
</MDBCard>
    }
]




class TablePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            check : false,
            save : false,
            confirm : false, 
            data : [],
            data_temp : [],
            data_panel : [],
        };
        this.delete_aeropuerto = this.delete_aeropuerto.bind(this);
        this.post_aeropuerto = this.post_aeropuerto.bind(this);
    }


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
      
    //   }

    post_aeropuerto(aeropuerto){
        var json = {}
        var contacto = {}
        fields.forEach(element => {
            if(element.field == 'email' || element.field == 'telefono')
              contacto[element.field] = aeropuerto[element.field]
            else
                json[element.field] = aeropuerto[element.field]
        });
        
        json['Contacto'] = contacto;
        
        axios.post('http://localhost:8080/aeropuerto/', json)
        .then(response => {
            var line = response["data"];
            var temp = {}  
              fields.forEach(element => {
                if(element.field == "telefono"||element.field == "email")
                  temp[element.field] = line.Contacto[element.field]
                else
                  temp[element.field] = line[element.field]
              })
            this.state.data.push(temp)
            this.set_values(this.state.data)
            // this.setState()
            alert("Aeropuerto agregado correctamente")
            
          })
          .catch( error =>{
            alert(error)
          }
        )
      }
     


      delete_aeropuerto(borrados){
        borrados.forEach(element => {
          var route = 'http://localhost:8080/aeropuerto/'+ element.Codigo;
          var url = new URL(route)
            axios.delete(url)
            .then(response => {
                // if(response.message === "Aeropuerto eliminado correctamente"){
                    this.state.data.splice(element.index, 1)
                    this.state.data_panel.splice(element.index, 1)
                    this.setState({data_temp:this.state.data})
                    alert("UPDATE!!!")

                // }
            } )
            .catch(error=>{
              console.log("print",error)
              alert(error)
            })
          } );
      }
      



    /**
     * DATA HANDLERS IN THE TABLE
     */
    set_values(data){
        alert("SET VALUES CALL")
        console.log(data)
        var panel = []
        data.forEach(row => {
            let panel_row = {};
            row.check = false;
            let id = data.indexOf(row)
            fields.forEach(element => {
                if(element.label !== 'Seleccionar')
                    panel_row[element.field] = row[element.field]
                else
                    panel_row['checkbox'] = <MDBInput size="sm" label=" " type="checkbox"  onClick={b=>this.check_row(b)} id={id} />;
            });
            panel.push(panel_row);
        });
        this.setState( { data_panel:panel, } )
        console.log(this.state.data_panel)
    }
    
    check_row(b){
        console.log("CHECK",this.state.data)
        var key = b.target.id
        console.log("CHECK",key)
        this.state.data[key].check = !this.state.data[key].check
    }

    get_value(value,field){
        let i = this.state.data_temp.length - 1
        this.state.data_temp[i][field] = value
    }
    
    editvalue(row, colum, val){
        
    }

    save_value(){
        var i = this.state.data_temp.length - 1
        let newRow = this.state.data_temp[i]
        if(newRow !== {} && newRow.hasOwnProperty(fields[1]["field"]) ){
            this.state.data_panel.pop()
            this.state.data_temp.pop()
            this.post_aeropuerto(newRow)
            this.setState({save:!this.state.save})
        }
        else{
            let labelKey = fields[1]['label']
            alert("Favor Ingresar dato en el Campo: "+labelKey)
        }
    }
    

    cancel_save(){
        this.state.data_panel.pop();
        this.setState({
            save : !this.state.save
        });
    }
    
    
    create_elements(){
        if(!this.state.save && !this.state.edit) {
            var newElement = {};
            var confirm  = <div>
                         <CheckCircleIcon onClick = {() => this.save_value()}/> 
                         <CancelIcon onClick = {() => this.cancel_save()}/>
                </div>
            newElement["confirm"]= confirm;
            fields.forEach(col => {
                if(col.label !== "Seleccionar")
                    newElement[col.field]=(<MDBInput size="sm" type="textbox" hint={col.label} getValue={b=>this.get_value(b,col.field)} />)
            });
            
            this.state.data_panel.push(newElement)
            this.state.data_temp.push({})
            
            this.setState ({save : !this.state.save});
        }
    }

    edit_elements(){
        if(!this.state.save){
            var check = false
            
            if(!this.state.edit){
                for (let index = 0; index < this.state.data.length; index++) {
                    var row = this.state.data[index];
                    if (row.check){
                        check = true
                        for(let key in this.state.data_panel[index]){
                            if(key != 'checkbox' && key !== '__proto__' ){
                                let text = this.state.data[index][key]
                                this.state.data_panel[index][key] = <MDBInput size="sm" type="textbox" hint={text}/>
                            }
                        }
                    }
                }
            }
            if(check)
                this.setState({ edit:!this.state.edit });
            else
                alert("Seleccione los datos que desea editar")
        }
    else
        alert("Finalice la acción anterior para realizar una nueva")
    }

    
    delete_elements(){
        if(this.state.edit || this.state.save)
            alert("Finalice la acción anterior para realizar una nueva")
        else{
            var check = false
            for (let index = 0; index < this.state.data.length; index++) {
                var row = this.state.data[index];
                if (row.check)
                    check = true
            }            
            if(check)
                this.setState({ confirm:true});
            else
                alert("Seleccione los datos que desea editar")
        }
    }

    handleClose(){
        this.setState({confirm : false})
      };

    confirmDelete() {
        var elements = [];
        for (let index = 0; index < this.state.data.length; index++) {
            var row = this.state.data[index];
            if (row.check)
                elements.push({
                    Codigo:row.Codigo,
                    index:index
                })
        }
        this.delete_aeropuerto(elements)
        this.setState({confirm:false})
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
            <a href="#" className="white-text mx-3">{'Aerolíneas'}</a>
            <div>
            <MDBBtn outline onClick = {() => this.create_elements()} size="sm" color="white" className="px-2">
                <AddCircleOutlineIcon/>
            </MDBBtn>
            <MDBBtn outline  onClick = {() => this.delete_elements()}size="sm" color="white" className="px-2">
                <DeleteIcon/>
            </MDBBtn>
            </div>
        </MDBCardHeader>
        <MDBCardBody cascade>
            <MDBTable btn fixed>
            <MDBTableBody rows={rows} />
            </MDBTable>
            
        </MDBCardBody>
        </MDBCard>
    );}
};


export default TablePage;




