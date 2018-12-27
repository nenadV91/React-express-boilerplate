import React, { Component } from 'react';
import {AppBar, Toolbar, Typography, Tabs, Tab} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import styles from './index.style';

class MyNavbar extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    let {classes, location} = this.props;

    return (
      <AppBar className={classes.root} position="static" color="default">
        <Toolbar variant="dense">
          <Typography onClick={this.props.toggleSidebar} variant="h6" color="inherit">
            App
          </Typography>

          <Tabs 
          onChange={this.handleChange}
          className={classes.menu}
          value={this.state.value || location.pathname}
          indicatorColor="primary"
          textColor="primary" >
            <Tab value="/" component={Link} label="Home"  to="/"/>
            <Tab value="/clients" component={Link} label="Clients"  to="/clients"/>
          </Tabs>
        </Toolbar>
      </AppBar>
    );
  }
}

const WithStyles = withStyles(styles)(MyNavbar)
const WithRouter = withRouter(WithStyles);
export default WithRouter