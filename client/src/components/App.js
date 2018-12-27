import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';

import Navbar from 'components/navbar';
import Content from 'components/content'
import styles from 'assets/jss/global';

class App extends Component {
  render() {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        <Navbar/>

        <div className={classes.layout}>
          <Content />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App)
