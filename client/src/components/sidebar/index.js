import React, { Component } from 'react';
import {Drawer, withStyles} from "@material-ui/core";
import styles from './index.style';

class Sidebar extends Component {
  render() {
    let {classes, isOpen, width} = this.props;
    let style = {}

    if(width) {
      style.flex = `0 0 ${width}px`
    }

    return (
      <Drawer 
      open={isOpen} 
      variant="permanent"
      style={style}
      classes={{
        docked: classes.root,
        paper: classes.paper
      }}>
        {this.props.children}
      </Drawer>
    );
  }
}


export default withStyles(styles)(Sidebar);
