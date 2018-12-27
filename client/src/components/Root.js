import React, { Component } from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from 'components/App';
import theme from 'assets/jss/theme';

class Root extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default Root
