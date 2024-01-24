import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Parent"
      }

      // as we are using this in method(greetParent()) so we have to bind here which is the 3rd best method as we discussed before.
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(child){
        alert(`Hello ${this.state.name} from ${child}`)
    }

  render() {
    return (
      <ChildComponent greetHandler= {this.greetParent}/>
    )
  }
}

export default ParentComponent