// Uncontrolled form, I will listen only function, not every change
import { Component } from "react";

class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    // In first case I have console.logged object, so I can have more parameters or look in it in browser
    // console.log({ event });
    //   In second case I have only string, so when it will be more logs, it will be one after one
    // console.log("event: ", event);

    const form = event.currentTarget;
    // const { login, password } = form.elements;
    const login = form.elements.login.value;
    const password = form.elements.password.value;

    this.props.onSubmit({ login, password });
    form.reset();
  };

  render() {
    return (
      <>
        {/* I can use arrow func */}
        {/* <form onSubmit={() => this.handleSubmit}></form> */}
        {/* I can use only this.handleSubmit */}
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="login"></input>
          <input type="password" name="password"></input>
          <button type="submit">Login</button>
        </form>
        {/* Or even with constructor and bind */}
      </>
    );
  }
}

export default LoginForm;
