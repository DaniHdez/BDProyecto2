import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

class CheckInForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            idnumber: '',
            flightcode: '',
            ticketcode: '',
            open: false,
        };
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleFlightCodeChange = this.handleFlightCodeChange.bind(this);
        this.handleTicketCodeChange = this.handleTicketCodeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);

    }

    handleIdChange(event) {
        this.setState({idnumber: event.target.value});
    }
    handleFlightCodeChange(event) {
        this.setState({flightcode: event.target.value});
    }
    handleTicketCodeChange(event) {
        this.setState({ticketcode: event.target.value});
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    handleClick(){
        console.log(this.state);
        this.handleClickOpen();
        //event.preventDefault();    
    }
    handleClickOpen = () => {
        this.setState({open: true})
    };
    handleClose = () => {
        this.setState({open: false})
    };

    render(){
        return(
            <Container style={{ textAlign: 'left'}}>
                <Form>
                    <Form.Group controlId="useridform">
                        <Form.Label>No. Identificación: </Form.Label>
                        <Form.Control type="idnumber " onChange={this.handleIdChange}  placeholder="Introduzca su número de indentificación" style={{ marginLeft: '2%', marginRight: '3%'}}/>
                    </Form.Group>
                    <Form.Group controlId="flighcodeform">
                        <Form.Label>Código de vuelo:</Form.Label>
                        <Form.Control type="flightcode" onChange={this.handleFlightCodeChange}  placeholder="Introduzca el código de su vuelo" style={{ marginLeft: '2%', marginRight: '3%'}}/>
                    </Form.Group>
                    <Form.Group controlId="ticketcodeform">
                        <Form.Label>Código de boleto:</Form.Label>
                        <Form.Control type="ticketcode" onChange={this.handleTicketCodeChange} placeholder="Introduzca el código de su tiquete" style={{ marginLeft: '2%', marginRight: '3%'}}/>
                    </Form.Group>
                    <div style={{ display: "flex" }}>
                    
                    <Button variant="primary" style={{ backgroundColor:'#29b6f6', outlineColor:'#29b6f6', borderColor:'#29b6f6', marginLeft: "auto" }} onClick={this.handleClick} >
                        Enviar
                    </Button>
                    </div>
                </Form>
                <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                        Checked-In 
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Se ha realizado el check-in para el vuelo {this.state.flightcode} con el boleto {this.state.ticketcode}.
                        </Typography>
                    </DialogContent>
                </Dialog>
            </Container>
        );
    }
};

export default CheckInForm;
/*
<DialogActions>
<Button autoFocus onClick={this.handleClose} color="primary">
    Listo
</Button>
</DialogActions>*/