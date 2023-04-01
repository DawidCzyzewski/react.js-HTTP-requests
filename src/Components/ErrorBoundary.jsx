import { Component } from "react";
import { Container } from "./Container";

export class ErrorBoundary extends Component {
  state = { hasError: false };

  //   This build in class function will catch errors
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // retry to external API for example or call API with error message or sth else
  }
  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <div>Something went wrong</div>;
    }

    // return <div>Everything is fine</div>;

    return <Container />;
  }
}
