import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Icon } from 'semantic-ui-react';

// ROUTES
import Boarding from './boarding/index';
import Flights from './flights/index';
import CheckInInfo from './checkininfo/index';
import PassengerInfo from './passengerinfo/index';
import Perfil from './profile';
import Tickets from './ticketsinfo';
// ICONS
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import HowToReg from '@material-ui/icons/HowToReg';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Receipt from '@material-ui/icons/Receipt';


const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

export default class extends PureComponent {
    state = {
        selected: 'history',
        expanded: false
    };

    onSelect = (selected) => {
        this.setState({ selected: selected });
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };
    navigate = (pathname) => () => {
        this.setState({ selected: pathname });
    };

    render() {
        const { expanded, selected } = this.state;
        return (
            <Router>
                <Route render={({ location, history }) => (
                    <React.Fragment>
                        <SideNav
                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                }
                            }}
                            onToggle={this.onToggle}
                            style={{position:'fixed', color:'#29b6f6', backgroundColor:'#29b6f6'}}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="history">
                                <NavItem eventKey="boarding">
                                    <NavIcon><SupervisedUserCircle></SupervisedUserCircle></NavIcon>
                                    <NavText>  Abordaje </NavText>
                                </NavItem>
                                <NavItem eventKey="flights">
                                    <NavIcon><LocalAirportIcon></LocalAirportIcon></NavIcon>
                                    <NavText> Vuelos </NavText>
                                </NavItem>
                                <NavItem eventKey="tickets">
                                    <NavIcon><Receipt></Receipt></NavIcon>
                                    <NavText> Tiquetes </NavText>
                                </NavItem>
                                <NavItem eventKey="checkininfo">
                                    <NavIcon><HowToReg></HowToReg></NavIcon>
                                    <NavText> Información de check-In </NavText>
                                </NavItem>
                                <NavItem eventKey="passengerinfo">
                                    <NavIcon><AssignmentInd></AssignmentInd></NavIcon>
                                    <NavText> Información de pasajero </NavText>
                                </NavItem>
                                <NavItem eventKey="funcionarioinfo">
                                    <NavIcon><AccountCircle></AccountCircle></NavIcon>
                                    <NavText> Perfil </NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav> 
                        <main style={{
                                marginLeft: expanded ? 240 : 64,
                                padding: '15px 20px 0 20px'
                            }}>
                            <Route path="/boarding" exact component={props => <Boarding />} />
                            <Route path="/flights" component={props => <Flights />} />
                            <Route path="/tickets" component={props => <Tickets />} />
                            <Route path="/checkininfo" component={props => <CheckInInfo />} />
                            <Route path="/passengerinfo" component={props => <PassengerInfo />} />
                            <Route path="/funcionarioinfo" component={props => <Perfil />} />
                        </main>
                    </React.Fragment>
                )}
                />
            </Router>
            
        );
    }
}
