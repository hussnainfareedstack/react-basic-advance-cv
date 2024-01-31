import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

  
  render() {
    const { name, count, increamentCounter} = this.props;

    return (
      <h2 onMouseOver={increamentCounter} >{name} Hovered {count} times</h2>
    )
  }
}
 
export default withCounter(HoverCounter, 1)


/*
import React, { Component } from 'react'

class HoverCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increamentCount = ()=>{
        this.setState({
            count: ++this.state.count
        })
    }


  render() {
    return (
      <h2 onMouseOver={this.increamentCount}>Hovered {this.state.count} times</h2>
    )
  }
}
 
export default HoverCounter

*/