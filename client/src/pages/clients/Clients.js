import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import styles from './Clients.style';

class Clients extends Component {
  render() {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        Clients
      </div>
    );
  }
}

export default withStyles(styles)(Clients)
