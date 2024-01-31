import React, { Component } from 'react'

class ClickCounterTwo extends Component {


  render() {
    const {count, increamentCount} = this.props
    return (
      <button onClick={increamentCount}>Clicked {count} times</button>
    )
  }
}

export default ClickCounterTwo