import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info){
    console.log("Error: " + error)
    console.log(`Info ${info}`)
  }

  render() {
    if (this.state.hasError) 
        return <h1>Something went wrong!</h1>;
    else
        return this.props.children;
  }
}

export default ErrorBoundry;
