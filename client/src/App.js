import React, { Component } from 'react';
import Customer from './components/customer';
import './App.css';
import Paper from '@material-ui/core/Table';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

//https://material-ui.com/demos/tables

const styles = theme => ({
  root: {
    width:'100%',
    marginTop: theme.spacing.unit *3,
    overflowX:"auto"
  },
  table: {
    minWidth:1080
  }
})

class App extends Component {

  state = {
    customers:""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    const {classes } = this.props;
    return (
      <paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
            <TableCell>no</TableCell>
            <TableCell>iamge</TableCell>
            <TableCell>name</TableCell>
            <TableCell>birthday</TableCell>
            <TableCell>gender</TableCell>
            <TableCell>job</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c=> {
              return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)
            }) : ""}
          </TableBody>
        </Table>

        </paper>
    );
  }
}

export default withStyles(styles)(App);
