import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      bio: ""
    };
  }
  // Proceed to the next step
  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    });
  };

  // Proceed to the previous step
  previousStep = () => {
    this.setState({
      step: this.state.step - 1
    });
  };

  // Handle change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, bio } = this.state;
    const values = { firstName, lastName, email, occupation, bio };

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
        return <h1>FormPersonalDetails</h1>;
      case 3:
        return <h1>Confirm</h1>;
      case 4:
        return <h1>Success</h1>;
    }
  }
}
export default UserForm;
