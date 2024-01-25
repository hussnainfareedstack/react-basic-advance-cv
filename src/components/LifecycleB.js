import React, { Component } from 'react'

class LifecycleB extends Component {
    //1st: Mount Lifecycle
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Hussnain'
      }
      console.log("LifecycleB constructor");
    }

    ////2nd: Mount Lifecycle
    static getDerivedStateFromProps(props, state){
        console.log("LifecycleB static getDerivedStateFromProps");

        return null;
    }

    //4th: Mount Lifecycle
    componentDidMount(){
        console.log("LifecycleB componentDidMount");
    }

    //2nd: Update Lifecycle
    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate")
        return true;
    }
    //4th: Update Lifecycle
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null;
    }
    //5th: Update Lifecycle
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('LifecycleB componentDidUpdate')
    }

    //3rd: Mount Lifecycle
    render() {
    
        console.log("LifecycleB render")

        return (
            <div>LifecycleB</div>
        )
  }
}

export default LifecycleB