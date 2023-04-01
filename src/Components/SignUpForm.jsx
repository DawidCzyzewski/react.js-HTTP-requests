// Controlled form, I will listen every change:
import { Component } from "react";
import { nanoid } from "nanoid";
import Alert from "./Alert";

// const pseudonum for select from list radiobutton element
const Gender = {
  MALE: "male",
  FEMALE: "female",
};

const INITIAL_STATE = {
  logina: "",
  email: "",
  password: "",
  // isActive is for checkbox, defualt not checked
  isActive: false,
  // gender is for select radio element
  gender: null,
  // age is for list
  age: 0,
};

class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  //   Function will handle every change in form and set this input as state
  handleChange = (event, defaultValue) => {
    const { name, value, checked, type } = event.target;

    console.log({ name, value, checked, type });

    const finalValue = value ?? defaultValue;

    if (name === "age") {
      // const parsedValue = parseInt(value);
      const parsedValue = parseInt(finalValue);
    }

    this.setState({
      // [name]: type === "checkbox" ? checked : value,
      [name]: type === "checkbox" ? checked : finalValue,
    });
  };

  //   Function will catch data from input form and log it in console
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  //   Function will reset form after submit
  reset = () => {
    this.setState({
      ...INITIAL_STATE,
    });
  };

  // one of elements of lifecycle, like render. constructor will create element, which will be renderen once. Constructor is generated on render phase
  constructor() {
    super();
    console.log("constructor will create elements once");

    // I can use bind things here, so they render just once:
    // this.reset.bind(this);
    // this.handleIncrement = this.handleIncrement.bind(this);

    // Or I can use initial state here. I can use this also without constructor, becouse React will render this like in constructor, just once
    this.state = {
      ...INITIAL_STATE,
    };
    // console.log({ stateCon: this.state });

    // But in constructor I can't use setState, this I can use later
  }

  // this function in build in Component from react, in function method it won't working
  // Just after component will be mounted in DOM, something can do here. I can use this for fetch, for something rendered on server site. For example I can't console.log(window) in constructor, becouse it is created on server site and I can use this in componentDidMount, becouse it is on client site. In constructor I can't also :
  componentDidMount() {
    // console.log("component did mount");
    // this.state = {
    // };
  }

  // This will be rendered after each update. To use it the state or props must be changed
  componentDidUpdate() {
    // console.log("component did update");
  }

  // This will be rendered before component will be unmounted. For example I want to have setTimeout in constructor to listen on sth for example every 3 sec. To kill component in some moment, I will do it here:
  componentWillUnmount() {
    // console.log("component unmount");
  }

  render() {
    // console.log("render will create elements on every change");

    const { logina, email, password, isActive, gender, age } = this.state;

    // Generating random id
    const loginInputId = nanoid();
    const emailInputId = nanoid();
    const passwordInputId = nanoid();

    const som = 0;

    return (
      // Shown how componentWillUnmount work:
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={loginInputId}>Login: </label>

          <input
            id="loginInputId"
            name="logina"
            type="text"
            placeholder="Enter login"
            value={logina}
            onChange={(event) => this.handleChange(event, "Surprise")}
          />

          <label htmlFor={emailInputId}>Input: </label>
          <input
            id={emailInputId}
            name="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={this.handleChange}
          />

          <label htmlFor={passwordInputId}>Password: </label>
          <input
            id={passwordInputId}
            name="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={this.handleChange}
          />

          <label>
            Is user active?
            <input
              name="isActive"
              type="checkbox"
              checked={this.isActive}
              onChange={this.handleChange}
            />
          </label>

          <section>
            <h5>Choose your gender</h5>

            <label>
              Male
              <input
                checked={gender === Gender.MALE}
                value={Gender.MALE}
                name="gender"
                type="radio"
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="gender_female">Female</label>
            <input
              checked={gender === Gender.FEMALE}
              value={Gender.FEMALE}
              id="gender_female"
              name="gender"
              type="radio"
              onChange={this.handleChange}
            />
          </section>

          <label>
            Choose your age
            <select name="age" value={age} onChange={this.handleChange}>
              <option value="18"> 18 </option>
              <option value="34"> 34 </option>
              <option value="56"> 56 </option>
            </select>
          </label>

          <button type="submit" disabled={!isActive}>
            Sign up as {logina} - accept checkbox!
          </button>
        </form>
        {/* Alert will be shown only when select is checked (isActive). In other way it will console.log it's unmount */}
        {/* Some mentors wants not to use && */}
        {/* {isActive && <Alert variant="success">Is activ is clicked!</Alert>} */}

        {/* becouse if value will be 0, it will render: */}
        {/* {som && <Alert variant="success">Is activ is clicked!</Alert>} */}
        {/* And this will not: */}
        {/* {som ? <Alert variant="success">Is activ is clicked!</Alert> : ""} */}

        {/* So better use this method if value can be other than false: */}
        {isActive ? <Alert variant="success">Is activ is clicked!</Alert> : ""}
      </div>
    );
  }
}

export default SignUpForm;
