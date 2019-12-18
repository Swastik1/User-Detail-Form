import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Succes from "./Succes";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  // Proceed to the next step
  nextStep = () => {
    // this step doesn't work
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Proceed to the previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            values={values}
          />
        );
      case 4:
        return <Succes />;
    }
  }
}
export default UserForm;
