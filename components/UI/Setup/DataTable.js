import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function SimpleTable(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
        <h2>
          Current Data Model
        </h2>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">attribName</TableCell>
            <TableCell align="right">dataType</TableCell>
            <TableCell align="right">length</TableCell>
            <TableCell align="right">order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.attribName}</TableCell>
              <TableCell align="right">{row.dataType}</TableCell>
              <TableCell align="right">{row.length}</TableCell>
              <TableCell align="right">{row.order}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>   
  )
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);