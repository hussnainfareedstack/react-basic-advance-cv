import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    //1st: Mount Lifecycle
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Hussnain'
      }
      console.log("LifecycleA constructor");
    }

    changeState = event =>{
        this.setState({
            name: "Fareed"
        })
    }

    ////2nd: Mount Lifecycle & 1st: Update Lifecycle
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA static getDerivedStateFromProps");

        return null;
    }

    //4th: Mount Lifecycle
    componentDidMount(){
        console.log("LifecycleA componentDidMount");
    }

    //2nd: Update Lifecycle
    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate")
        return true;
    }
    //4th: Update Lifecycle
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null;
    }
    //5th: Update Lifecycle
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('LifecycleA componentDidUpdate')
    }

    //3rd: Mount Lifecycle & Update Lifecycle
    render() {
    
        console.log("LifecycleA render")

        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>change state</button>
                <LifecycleB/>
            </div>
        )
  }
}

export default LifecycleA