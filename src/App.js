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

const customers = [{
  'id':1,
  'image': 'https://placeimg.com/64/64/any',
  'name':'gildong hong',
  'birthday':'7307231',
  'gender': 'male',
  'job':'student'
},
{
  'id':2,
  'image': 'https://placeimg.com/64/64/any',
  'name':'jungho park',
  'birthday':'7007231',
  'gender': 'male',
  'job':'student'
}
,
{
  'id':3,
  'image': 'https://placeimg.com/64/64/any',
  'name':'siyun park',
  'birthday':'7207231',
  'gender': 'male',
  'job':'student'
}]

class App extends Component {
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
            {customers.map(c=> {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)})}
          </TableBody>
        </Table>

        </paper>
    );
  }
}

export default withStyles(styles)(App);
