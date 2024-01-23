import React, { Component } from 'react'

class ClassClick extends Component {

  eventHandler(){
    console.log("Class Event Handler Clicked.")
    console.log(this);
  }

  render() {
    return (
      <button onClick={this.eventHandler}>Class Click</button>
    )
  }
}

export default ClassClick