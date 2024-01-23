import React, { Component } from "react";

//for state practice.

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message: "Welcome Visitor"
        }
    }

    changeMessage(){
        this.setState({                             // this.setState({},callback func) accepts an object to setstate(state = {})
            message:"Thank you for subscribing."
        })
    }

    render(){
        return(
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;