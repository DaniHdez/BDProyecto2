import React, { Component } from 'react';
import Table from '../../assets/BetterTable';
import axios from 'axios';


const fields = [
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
        'label' : 'Ubicación',
        'field' : 'Ubicacion',
        'sort'  : 'asc'
    },
    {
        'label' : 'Teléfono',
        'field' : 'telefono',
        'sort'  : 'asc'
    },
    {
        'label' : 'Email',
        'field' : 'email',
        'sort'  : 'asc'
    },
    {
        'label' : 'Página Web',
        'field' : 'url',
        'sort'  : 'asc'
    }
];


class aeropuerto extends Component {
  constructor(props){
    super(props)
    this.state = {
      aeropuertos : [],
      error : ''
    }
    this.actions = {
      newData : this.post_aeropuerto,
      delData : this.delete_aeropuerto
    };
    
  }  

  post_aeropuerto(aeropuerto, b){
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
        console.log('PRIIINT',response["data"])
        var line = response["data"];
        var temp = {}  
          fields.forEach(element => {
            if(element.field == "telefono"||element.field == "email")
              temp[element.field] = line.Contacto[element.field]
            else
              temp[element.field] = line[element.field]
          })
        console.log("Antes de PUSH")
        console.log("PRINT",this)  
        b.addRow(temp)
        
      })
      .catch( error =>{
        alert(error)
      }
    )
  }
  handleResponse(response){
    console.log("print",response)
    console.log("print",this.state.aeropuertos)
    
  }

  delete_aeropuerto(codes){
    codes.forEach(code => {
      var route = 'http://localhost:8080/aeropuerto/'+ code;
      var url = new URL(route)
        axios.delete(url)
        .then(response => {this.handleResponse(response)})
        .catch(error=>{
          console.log("print",error)
          alert(error)
        })
      } );
  }
  
  
  componentDidMount(){
    axios.get('http://localhost:8080/aeropuertos/')
    .then(response => {
      console.log(response.data)
      var rows = []
      response.data.forEach(line => {
        var temp = {}  
        fields.forEach(element => {
          if(element.field == "telefono"||element.field == "email"){
            console.log("PRINT",line.Contacto[element.field])
            temp[element.field] = line.Contacto[element.field]
        }
          else
            temp[element.field] = line[element.field]
        });
        console.log("print", temp)  
        rows.push(temp)
      });
      this.setState(
        {
          // aeropuertos:
          aeropuertos:rows
        }
      )
    })
    .catch(error => {
      console.log(error);
      alert('Error tratando de obtener Aeropuertos')

    });
  }
  render() {
    // const {aeropuertos} = this.state
    return (
      <React.Fragment>
      {
        this.state.aeropuertos.length>0 &&
        <Table title="Aeropuertos" data={this.state.aeropuertos} labels={fields} actions={this.actions} editable={true} /> 
      }
      </React.Fragment>
    ) };
  }
export default aeropuerto;
