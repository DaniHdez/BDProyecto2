import React, { Component } from 'react';
import MyFlightsTable from './components/MyFlightsTable'
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

class History extends Component{
  constructor (props) {
    super(props)
    this.classes = useStyles;
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      flightstate: 'Todos',
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
        <Title>Historial</Title>
        <Container style={{alignItems:'start'}}>
          <Row style={{marginTop:20, marginBottom:20}}>
            <Col style={{alignItems:'start'}}>
              <FormControl className={this.classes.formControl}>
                <InputLabel id="statelabelid">Estado</InputLabel>
                <Select
                  labelId="statelabelidselect"
                  id="stateselectid"
                  value={this.state.flightstate}
                  onChange={this.handleStateChange}
                >
                  <MenuItem value={'Todos'}>Todos</MenuItem>
                  <MenuItem value={'A tiempo'}>A tiempo</MenuItem>
                  <MenuItem value={'Retrasado'}>Retrasado</MenuItem>
                  <MenuItem value={'Cancelado'}>Cancelado</MenuItem>
                </Select>
              </FormControl>
            </Col>
            <Col style={{alignItems:'start'}}>
              <Container>
              <form className={this.classes.container} noValidate>
                <TextField
                  id="startdate"
                  label="Fecha inicial"
                  type="date"
                  defaultValue="2017-05-24"
                  className={this.classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
              </Container>
            </Col>
            <Col style={{alignItems:'start' }}>
              <Container>
              <form className={this.classes.container} noValidate>
                <TextField
                  id="enddate"
                  label="Fecha final"
                  type="date"
                  defaultValue="2017-05-24"
                  className={this.classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
              </Container>
            </Col>
            <Col style={{alignItems:'end'}}>
              <Button style={{backgroundColor:'#29b6f6', outlineColor: '#29b6f6'}}>
                Filtrar
              </Button>
            </Col>
          </Row>
        </Container>
        <MyFlightsTable></MyFlightsTable>
      </Container>
    );
  }
}
export default History;