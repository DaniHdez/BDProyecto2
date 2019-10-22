import React from 'react';
import Aeropuerto from './adminviews/aeropuerto'
import Aerolinea from './adminviews/aerolineaview'

import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import GroupIcon from '@material-ui/icons/Group';

const routeAdmin = [
    {
        text : "Aeropuerto",
        key : "airport",
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
        component :Aerolinea,
        icon : <FlightTakeoffIcon/>, 
        subTabs: []
    },
    {
        text : "Funcionarios",
        key : "staff",
        component :  () => <h1> Hola Funcionarios </h1> ,
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
                text : "Boletos",
                key : "reports/tickets",
                component : () => { return ( <h1> Hola Reportes Boletos </h1>)} 
            },
            {
                text : "Compras",
                key : "reports/purshase",
                component : () =><h1> Hola Reportes Compras </h1> 
            },
            {
                text : "Destinos",
                key : "reports/locations",
                component :() => <h1> Hola Reportes Destinos </h1> 
            }
        ]
    }
];

export default routeAdmin