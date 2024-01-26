import React, { Component, createRef } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }

  handleBtn = () => {
    console.log(this.componentRef);
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.handleBtn}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
