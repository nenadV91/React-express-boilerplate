import React, { Component } from 'react';
import styles from './Home.style';
import {withStyles, Grid} from '@material-ui/core';

class Home extends Component {
  render() {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        <Grid spacing={24} container>
          <Grid item>Content</Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home)
