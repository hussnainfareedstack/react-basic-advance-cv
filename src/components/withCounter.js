import React from "react";

const withCounter = (WrappedComponent, countStart) => {

  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increamentCounter = () => {
      this.setState((prevState) => {
        
        return {            // writing function instead of object becuase we want to use previous state data.
          count: prevState.count + countStart,
        };
      });
    };


    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increamentCounter={this.increamentCounter}
          {... this.props} //send the props to component that are comming from where component used (like here in app.js)
        />
      );
    }

  }

  return WithCounter;
};

export default withCounter;

//without naming convention
/*
 
 import React from "react";

 const UpdatedComponent = OriginalComponent => {

    class NewComponent extends React.Component{

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


        render(){
            return (
                <OriginalComponent name ={"Hussnain"} count = {this.state.count} increamentCounter = {this.increamentCounter}/>
            )
        }
    }

    return NewComponent;

 }

 export default UpdatedComponent

 */
