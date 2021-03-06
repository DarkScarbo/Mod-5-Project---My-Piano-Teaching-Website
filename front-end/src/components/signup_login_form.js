import React from "react";
import { logInApi, signUpApi } from "../services/api";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment
} from "semantic-ui-react";

class SignUpLogInForm extends React.Component {
  state = {
    logStatus: false
  };

  changeLogStatus = () => {
    this.setState({ logStatus: !this.state.logStatus });
  };

  logInUser = (email, password) => {
    logInApi(email, password).then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        this.props.logIn(data);
      }
    });
  };

  signInUser = (name, email, password) => {
    signUpApi(name, email, password).then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        this.logInUser(email, password);
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (this.state.logStatus === false) {
      this.logInUser(email, password);
    } else {
      const name = e.target.username.value;
      const passwordConfirmation = e.target.password_confirmation.value;
      if (password === passwordConfirmation) {
        this.signInUser(name, email, password);
      } else {
        alert("Your passwords don't match!");
      }
    }
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "70vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            <Icon name="music" /> Access your account!
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              {this.state.logStatus && (
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="User Name"
                  name="username"
                  required
                />
              )}
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                required
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
              />
              {this.state.logStatus && (
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                  name="password_confirmation"
                />
              )}
              {this.state.logStatus ? (
                <Button color="blue" fluid size="large">
                  Sign Up
                </Button>
              ) : (
                <Button color="blue" fluid size="large">
                  Log in
                </Button>
              )}
            </Segment>
          </Form>
          <Message>
            {this.state.logStatus ? (
              <Button
                color="teal"
                fluid
                size="large"
                onClick={this.changeLogStatus}
              >
                Or Log In
              </Button>
            ) : (
              <Button
                color="teal"
                fluid
                size="large"
                onClick={this.changeLogStatus}
              >
                Or Sign Up
              </Button>
            )}
          </Message>
        </Grid.Column>
      </Grid>
      // </div>
    );
  }
}

export default SignUpLogInForm;
