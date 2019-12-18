import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import App from "../App";

const styles = {
  button: {
    margin: 15
  }
};
export class Succes extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For your Submission</h1>
          <p>You will get email with further instructions</p>
          <br />

          <RaisedButton
            label="Have a nice Day :)"
            primary={true}
            style={styles.button}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Succes;
