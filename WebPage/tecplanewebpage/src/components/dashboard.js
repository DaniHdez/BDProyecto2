import React, {Component} from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"

import './dashboard.css'



const Hello = () => {
    return (
        <h1>
            Hola
        </h1>
    )
} 


class dashboard extends Component {
    constructor(props){
        super()
        var views = {
            "profile":Hello,
            "settings/logout":Hello
        };
        props.routes.forEach(rout => {
            if(rout.subTabs.length>0){
                rout.subTabs.forEach(sub => {
                    views   [sub.key] = sub.component
                })
            }
            else views [rout.key] = rout.component
        });
        this.state = {
            view : Hello,
            viewsxroutes : views
        }
        
    }
    changeview(selected){
        this.setState({
            view : this.state.viewsxroutes[selected],
            viewsxroutes : this.state.viewsxroutes
            }
        )
    }
    render() {
        return (
            <Router>
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                                this.changeview(selected)
                    } } } >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="profile">
                        {
                            this.props.routes !== undefined &&
                            this.props.routes.length > 0 && 
                            this.props.routes.map(tab => { return (
                            <NavItem eventKey={tab.key}>
                                <NavIcon> {tab.icon} </NavIcon>
                                <NavText> {tab.text} </NavText>
                                {
                                tab.subTabs.length > 0 && tab.subTabs.map(subTab => {
                                    return(
                                        <NavItem eventKey = {subTab.key}>
                                            <NavText>{subTab.text}</NavText>
                                        </NavItem>
                                    ) } ) }
                            </NavItem>   
                        ) } ) }
                        <hr/>
                        <NavItem eventKey = "profile">
                            <NavIcon><AccountCircleIcon/></NavIcon>
                            <NavText> Perfil </NavText>
                        </NavItem>
                        <NavItem eventKey ="settings">
                            <NavIcon>
                                <SettingsIcon/>
                            </NavIcon>
                            <NavText style = {{textAlign : "left"}}>
                                Opciones
                            </NavText>
                            <NavItem eventKey ="settings/logout">
                                <NavText>
                                    Salir
                                </NavText>
                            </NavItem>
                        </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                    <React.Fragment>{<this.state.view/>}</React.Fragment>
                </React.Fragment>
            ) }/>
        </Router>
        );
    }
}


export default dashboard;

