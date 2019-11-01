import React from 'react';
import Aeropuerto from './adminviews/aeropuertoTable'
import Aerolinea from './adminviews/aerolineaTable'
import Vuelo from './adminviews/vuelosTable'
import Funcionario from './adminviews/FuncionariosTable'
import reporteVuelos from './reportes/vuelosxAerolineas'
import reporteRango from './reportes/vuelosxAerolineas'


import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import GroupIcon from '@material-ui/icons/Group';

const routeAdmin = [
    {
        text : "Aeropuerto",
        key : "home",
        component : Aeropuerto,
        icon : <LocalAirportIcon/>,
        subTabs: []
    },
    {
        text : "Aerolineas",
        key : "airline",
        component : Aerolinea,
        icon : <FontDownloadIcon/>,
        subTabs: []
    },
    {
        text : "Vuelos",
        key : "flight",
        component : Vuelo,
        icon : <FlightTakeoffIcon/>, 
        subTabs: []
    },
    {
        text : "Funcionarios",
        key : "staff",
        component :  Funcionario,
        icon : <GroupIcon/>, 
        subTabs: []
    },
    {
        text : "Reportes",
        key : "reports",
        component :() => {return ( <h1> Hola Reportes </h1>) },
        icon : <TrendingUpIcon/>, 
        subTabs: [
            {
                text : "Vuelos por Aerolinea",
                key : "reports/vuelos",
                component : reporteVuelos,
            },
            {
                text : "Rango por Pasajero",
                key : "reports/rangos",
                component : reporteRango,
            },
            {
                text : "Destinos más Visitados",
                key : "reports/destinos",
                component : reporteVuelos,
            },
            {
                text : "Operaciones de Compra",
                key : "reports/operaciones",
                component : reporteVuelos,
            },
            
        ]
    }
];

export default routeAdmin