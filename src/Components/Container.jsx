import { Component } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { ValueIndicator } from "./ValueIndicator";

export class Container extends Component {
  constructor() {
    super();
    this.state = {
      valueFirst: 0,
      valueSecond: 0,
    };
  }

  handleClick = (name) => {
    console.log(name);
    this.setState((state) => ({ [name]: state[name] + 1 }));
  };

  render() {
    // setTimeout(() => {
    throw new Error(
      "Throwed Error so in background is text from ErrorBoundary :) "
    );
    // }, 5000);

    return (
      <div>
        <ValueIndicator
          value={this.state.valueFirst}
          onClick={this.handleClick}
          name="valueFirst"
        />
        <ValueIndicator
          value={this.state.valueSecond}
          onClick={this.handleClick}
          name="valueSecond"
        />
      </div>
    );
  }
}
