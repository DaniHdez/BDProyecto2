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
        subTabs: []
    }
];

export default routeAdmin