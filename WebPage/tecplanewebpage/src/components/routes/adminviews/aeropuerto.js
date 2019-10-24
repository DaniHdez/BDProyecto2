import React from 'react';
import Table from '../../assets/BetterTable';

var rows = [
    {
      'code': 'Mark',
      'name': 'Otto',
      'phone': '@mdo',
      'location': 'Mark',
      'email': 'Otto',
      'url': '@mdo',
    },
    {
      'first': 'Jacob',
      'last': 'Thornton',
      'phone': '@fat',
      'username2': 'Jacob',
      'username3': 'Thornton',
      'username4': '@fat',
    },
    {
      'first':'JUAN',
      'last': 'the Bird',
      'username': '@twitter',
      'username2': 'Larry',
      'username3': 'the Bird',
      'username4': '@twitter'
    },
    {
      'first': 'Paul',
      'last': 'Topolski',
      'username': '@P_Topolski',
      'username2': 'Paul',
      'username3': 'Topolski',
      'username4': '@P_Topolski'
    },
    {
     'first': 'Larry',
      'last': 'the Bird',
      'username': '@twitter',
      'username2': 'Larry',
      'username3': 'the Bird',
      'username4': '@twitter',
    }
  ];

const fields = [
    { 
      'label' : 'Seleccionar'
    }, //Select box
    {
        'label' : 'Código',
        'field' : 'code',
        'sort'  : 'asc'
    },
    {
        'label' : 'Nombre',
        'field' : 'name',
        'sort'  : 'asc'
    },
    {
        'label' : 'Ubicación',
        'field' : 'location',
        'sort'  : 'asc'
    },
    {
        'label' : 'Teléfono',
        'field' : 'phone',
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

function post_aeropuerto(aeropuerto){
  return false;
};
var actions = {
  newData : post_aeropuerto,
};

const aeropuerto = () => {
    // load_panel();
    return (
        <Table title="Aeropuertos" data={rows} labels={fields} actions={actions} editable={true} />
    );
};

export default aeropuerto