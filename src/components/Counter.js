import React, { Component } from "react";

// for setState Practice.

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  // never set the state=... directly always use setState() method.
  increament() {
    // this.setState(
    //   {                 // in this if we call increamentFive(), react will update setState in final(last) call for better performance
    //     count: this.state.count + 1, // react make group multiple setState calls into 1 for better performance. ,
    //                                  // Whenever you want to update setState using previous state you have to pass setState a function 
    //                                  // rather than an object- see code example below, "here ++this.state.count also solves".
    //   },
      
    //   () => {
    //     console.log("Callback func value: ", this.state.count);
    //   }
    // );

    this.setState((prevState, props)=>({ //this function has access to prevState and you can also pass 2nd parameter which is props if your depend on it
        count: prevState.count + 1
    }))

    console.log(this.state.count);
  }

  increamentFive(){
    this.increament();
    this.increament();
    this.increament();
    this.increament();
    this.increament();
  }

  render() {
    return (
      <div>
        <div>Counter: {this.state.count}</div>
        <button onClick={() => this.increamentFive()}>Increament</button>
      </div>
    );
  }
}

export default Counter;
