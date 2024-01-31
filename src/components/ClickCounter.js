import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

  render() {
    const { name, count, increamentCounter} = this.props;

    return (
      <button onClick={increamentCounter}>{name} Clicked {count} times</button>
    )
  }
}

// export default ClickCounter
export default withCounter(ClickCounter, 1)


/**
 
import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increamentCounter = ()=>{
        this.setState(prevState =>{    // writing function instead of object becuase we want to use previous state data.
            
            return{
                count : prevState.count + 1
            }
        })
    }
 
  render() {
    return (
      <button onClick={this.increamentCounter}>{this.props.name} Clicked {this.state.count} times</button>
    )
  }
}

// export default ClickCounter
export default withCounter(ClickCounter)
 
 */