import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#98c5e9",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "2px solid #00295e"
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div class="header_logo">Logo</div>
          </div>
          <Link to="/the_team">
            <Button color="inherit">The team</Button>
          </Link>
          <Link to="/the_matches">
            <Button color="inherit">The matches</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
