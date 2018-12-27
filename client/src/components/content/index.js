import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from 'pages/home';
import Clients from 'pages/clients';

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/clients" component={Clients} />
      </Switch>
    );
  }
}

export default Content
