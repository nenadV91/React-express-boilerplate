import React, { Component } from 'react';
import {withStyles} from '@material-ui/core'
import Sidebar from 'components/sidebar';
import Clients from './Clients';
import Items from './Items';
import styles from './index.style';

class ClientsPage extends Component {
  render() {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        <Sidebar width={400}>
          <Items />
        </Sidebar>
        <Clients />
      </div>
    );
  }
}

export default withStyles(styles)(ClientsPage)
