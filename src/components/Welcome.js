import React, {Component} from "react";

//Class Component

class Welcome extends Component{
    render(){
        // return <h1> Welcome Hussnain to Class Component</h1>
        // props use way in class components
        return(
            <div>
                <h1>Welcome {this.props.name}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome