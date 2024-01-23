import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Welcome Hussnain"
      }

    //   this.ClickedHandler = this.ClickedHandler.bind(this)
    }

    // ClickedHandler(){
    //     this.setState({
    //         message: "Button Clicked Handler clicked."
    //     })

    //     console.log(this)
    // }

    //for 4
    ClickedHandler = ()=>{
        this.setState({
            message: "Button Clicked Handler Clicked."
        })

        console.log(this)
    }

  render() {
    return (
        <div>
            <div>{this.state.message}</div>
            {/* <button onClick={this.ClickedHandler}>EventBind</button>        //incorrect */}
            {/* <button onClick={this.ClickedHandler.bind(this)}>EventBind</button>  Bind with this here          Performance issue */}
            {/* <button onClick={()=> this.ClickedHandler()}>EventBind</button> use arrow function- minor improved and easy to pass parameters and good if your component not using re-rendring nestied component and best for small apps*/}
            {/* <button onClick={this.ClickedHandler}>EventBind</button>             Bind in constructor                 best One */}
            <button onClick={this.ClickedHandler}>EventBind</button>{/*using clickedhandler as arrow func Best Also but in testing phase.*/}
            
        </div>
    )
  }
}

export default EventBind