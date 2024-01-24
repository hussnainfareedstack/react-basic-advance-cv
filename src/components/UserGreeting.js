import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

    //-> 4. Short Circut operator.  - if you want to show some HTML or none
    return this.state.isLoggedIn && <div>Welcome Hussnain</div>

    //-> 3. ternary operator  -- most used
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Hussnain</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //-> 2. Element
    // let message;
    // if (this.state.isLoggedIn)
    //     message = <div>Welcome Hussnain</div>;
    // else
    //     message = <div>Welcome Guest</div>;
    // return message;

    //-> 1. if else condition out of JSX
    //if (this.state.isLoggedIn) return <div>Welcome Hussnain</div>;
    //else return <div>Welcome Guest</div>;

    // return (
    //     <div>
    //         <div>Welcome Hussnain</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting;
