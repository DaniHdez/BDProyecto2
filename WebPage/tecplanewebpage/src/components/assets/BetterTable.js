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
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
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
        var colus =[];
        if(props.editable)
            colus.push({ 'label' : 'Seleccionar' })
        colus.push(...props.labels)
        this.state = {
            check : false,
            save : false,
            confirm : false, 
            data : props.data,
            data_temp : props.data,
            labels : colus,
            data_panel : []
        };
        
        this.set_values()
    }


    /**
     * DATA HANDLERS IN THE TABLE
     */

    /**
     * 
     * @param {*} b 
     */
    check_row(b){
        var key = b.target.id
        this.state.data[key].check = !this.state.data[key].check
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
        this.state.data_temp[i][field] = value
    }
    editvalue(row, colum, val){
        
    }
    save_value(){
        var i = this.state.data_temp.length - 1
        let newRow = this.state.data_temp[i]
        if(newRow !== {} && newRow.hasOwnProperty(this.props.labels[1]["field"]) )
            this.props.actions.newData(newRow,this)
        else{
            let labelKey = this.props.labels[1]['label']
            alert("Favor Ingresar dato en el Campo: "+labelKey)
        }
    }
    addRow(row){
        this.state.data_panel.pop()
        alert("HOLA")
        this.state.data_temp.pop()
        this.state.data.push(row)
        this.setState();
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
                elements.push(row[this.props.labels[0]["field"]])
        }
        this.props.actions.delData(elements)
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
            <MDBBtn outline  onClick = {() => this.delete_elements()}size="sm" color="white" className="px-2">
                <DeleteIcon/>
            </MDBBtn>
            </div>}
        </MDBCardHeader>
        <MDBCardBody cascade>
            <MDBTable btn fixed>
            <MDBTableHead columns={this.state.labels} />
            <MDBTableBody rows={this.state.data_panel} />
            </MDBTable>
        </MDBCardBody>
        </MDBCard>
    );}
};


export default TablePage;




