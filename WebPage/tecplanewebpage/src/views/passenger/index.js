import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter as Router, Route } from "react-router-dom"
// ROUTES
import History from './history/index';
import Flights from './flights/index';
import Profile from './profile/index';
import CheckIn from './checkin/index';
// ICONS
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import HistoryIcon from '@material-ui/icons/History';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HowToReg from '@material-ui/icons/HowToReg';

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
                                <NavItem eventKey="history">
                                    <NavIcon><HistoryIcon></HistoryIcon></NavIcon>
                                    <NavText>  Historial </NavText>
                                </NavItem>
                                <NavItem eventKey="flights">
                                    <NavIcon><LocalAirportIcon></LocalAirportIcon></NavIcon>
                                    <NavText> Vuelos </NavText>
                                </NavItem>
                                <NavItem eventKey="profile">
                                    <NavIcon><AccountCircle></AccountCircle></NavIcon>
                                    <NavText> Perfil </NavText>
                                </NavItem>
                                <NavItem eventKey="checkin">
                                    <NavIcon><HowToReg></HowToReg></NavIcon>
                                    <NavText> Check-In </NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                        <main style={{
                                marginLeft: expanded ? 240 : 64,
                                padding: '15px 20px 0 20px'
                            }}>
                            <Route path="/history" exact component={props => <History />} />
                            <Route path="/flights" component={props => <Flights />} />
                            <Route path="/checkin" component={props => <CheckIn />} />
                            <Route path="/profile" component={props => <Profile />} />
                        </main>
                    </React.Fragment>
                )}
                />
            </Router>
            
        );
    }
}
