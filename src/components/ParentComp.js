import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

// see console for understanding
class ParentComp extends Component {    // class ParentComp extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"Hussnain"
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        name:"Hussnain"
      })
    }, 2000);
  }

  render() {
    console.log("********** Parent Component rednered ***********")
    return (
      <>
        <div>Parent Component</div>
        {/* <RegularComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}

        <MemoComp name = {this.state.name}/>
      </>
    )
  }
}

export default ParentComp