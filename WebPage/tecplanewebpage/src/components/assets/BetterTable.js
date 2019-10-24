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


/**
 * TablePage
 * Props:
 *  data: Datos que desea ingresar a la tabla
 *  labels: Titulo de cada columna de la tabla
 *  actions: Funciones mapeadas a los botones de la tabla
 *      Nombres Fijos:
 *          newData (Aeropuerto)
 *          updateData ()
 *          deleteData
 */



class TablePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit : false,
            save : false,  
            data : props.data,
            labels : props.labels,
            data_panel : [],
        };
        
        this.set_values()
    }
    check_row(b){
        var key = b.target.id
        this.state.data[key].edit = !this.state.data[key].edit
        alert(key)
    }
    set_values(){
            this.state.data.forEach(row => {
                let panel_row = {};
                let id = this.state.data.indexOf(row)
                if(this.props.editable)
                    panel_row['checkbox'] = <MDBInput size="sm" label=" " type="checkbox"  onClick={b=>this.check_row(b)} id={id} />;
                for (const key in row) {
                    if(key !== 'checkbox' || key !== '__proto__')
                        panel_row[key] = row[key]                     
                } 
                this.state.data_panel.push(panel_row);
        });

    }
    get_value(value,field){
        let i = this.state.data.length - 1
        this.state.data[i][field] = value
    }
    editvalue(row, colum, val){
        
    }
    save_value(){
        let newRow = this.state.data.pop()
        if(newRow !== {} && newRow.hasOwnProperty(this.props.labels[1]["field"]) )
            if(this.props.actions.newData(newRow)){
                alert("Agregado Correctamente");
                this.set_values()
            }
            else {
                alert("Ha ocurrido un error con la conexión.\nIntente más tarde.")
                this.cancel_save()
            }
        else{
            let labelKey = this.props.labels[1]['label']
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
            this.state.labels.forEach(col => {
                if(col.label !== "Seleccionar")
                    newElement[col.field]=(<MDBInput size="sm" type="textbox" hint={col.label} getValue={b=>this.get_value(b,col.field)} />)
            });
            
            this.state.data_panel.push(newElement)
            this.state.data.push({})
            
            this.setState ({save : !this.state.save});
        }
        else
            alert("Finalice la acción anterior para realizar una nueva")
    }

    edit_elements(){
        if(!this.state.save){
            var check = false
            
            if(!this.state.edit){
                for (let index = 0; index < this.state.data.length; index++) {
                    var row = this.state.data[index];
                    if (row.edit){
                        check = true
                        for(let key in this.state.data_panel[index]){
                            if(key != 'checkbox'){
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
    render(){
    return(
        <MDBCard narrow>
        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
            <a href="#" className="white-text mx-3">{this.props.title}</a>
            {this.props.editable && <div>
            {
                this.state.edit &&
                <MDBBtn outline  size="sm" color="green" className="px-2" onClick = {()=>this.get_values()}>
                    <CheckCircleIcon/>
                </MDBBtn>
            }
            {
                (this.state.edit )&& 
                <MDBBtn outline  size="sm" color="red" className="px-2">
                    <CancelIcon/>
                </MDBBtn>
            }
            <MDBBtn outline size="sm" onClick = {()=>this.edit_elements()} color="white" className="px-2">
                <EditIcon/>
            </MDBBtn>
            <MDBBtn outline onClick = {() => this.create_elements()} size="sm" color="white" className="px-2">
                <AddCircleOutlineIcon/>
            </MDBBtn>
            <MDBBtn outline  size="sm" color="white" className="px-2">
                <DeleteIcon/>
            </MDBBtn>
            </div>}
        </MDBCardHeader>
        <MDBCardBody cascade>
            <MDBTable btn fixed>
            <MDBTableHead columns={this.props.labels} />
            <MDBTableBody rows={this.state.data_panel} />
            </MDBTable>
        </MDBCardBody>
        </MDBCard>
    );}
};

export default TablePage;




