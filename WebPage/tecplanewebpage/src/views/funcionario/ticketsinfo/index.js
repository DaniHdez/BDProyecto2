import React, { Component } from 'react';
import TicketsTable from './components/TicketsTable'
import Title from '../../general/Title';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

class Tickets extends Component{
  constructor (props) {
    super(props)
    this.classes = useStyles;
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      flightstate: 1,
    };
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }
  handleStartChange(date) {
    this.setState({
      startDate: date
    })
  }
  handleEndChange(date) {
    this.setState({
      startDate: date
    })
  }
  handleStateChange(event) {
    console.log(this.state.flightstate);
    this.setState({
      flightstate: event.target.value
    });
    console.log(this.state.flightstate);
  }

  render (){
    return(
      <Container>
        <Title>Boletos Registrados</Title>
        <Container>
          <Row style={{marginTop:20, marginBottom:20}}>
            <Col>
            <Container>
              <Row>
                <Col style={{alignItems:'start'}}>
                  <form className={this.classes.container} noValidate>
                    <TextField
                        id="standard-basic"
                        label="No. identificación del pasajero"
                        margin="normal"
                        className={this.classes.textField}
                        InputLabelProps={{shrink: true,}}
                      />
                    </form>
                </Col>
                </Row>
              </Container>
            </Col>
            <Col>
            <Container>
              <Row>
                <Col style={{alignItems:'start'}}>
              <form className={this.classes.container} noValidate style={{paddingTop:17}}>
                <TextField
                  id="startdate"
                  label="Fecha inicial"
                  type="date"
                  defaultValue="2015-05-24"
                  className={this.classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  
                />
              </form>
            </Col>
                <Col style={{alignItems:'start' }}>
              <form className={this.classes.container} noValidate style={{paddingTop:17}}>
                <TextField
                  id="enddate"
                  label="Fecha final"
                  type="date"
                  defaultValue="2019-12-01"
                  className={this.classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Col>
                <Col style={{alignItems:'end'}}>
              <Button style={{backgroundColor:'#29b6f6', outlineColor:'#29b6f6', borderColor:'#29b6f6', marginTop:30}}>
                Filtrar
              </Button>
            </Col>
              </Row>
            </Container>
            </Col>
          </Row>
        </Container>
        <TicketsTable></TicketsTable>
      </Container>
    );
  }
}
export default Tickets;