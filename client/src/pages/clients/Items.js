import React, { Component } from 'react';
import {List, ListItem} from '@material-ui/core'

class Items extends Component {
  render() {
    return (
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    );
  }
}

export default Items
