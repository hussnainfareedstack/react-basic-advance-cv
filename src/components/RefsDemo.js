import React, { Component, createRef } from 'react'

class RefsDemo extends Component {

    constructor(props) {
      super(props)
        
      this.inputRef = createRef(); // ref created. let's attach it to input tag
      this.cbRef = null;
      this.setCbRef = element =>{
        this.cbRef = element
      }
    }

    componentDidMount(){
        // console.log(this.inputRef);
        // this.inputRef.current.focus();

        if(this.cbRef){
            this.cbRef.focus() // older approach.
        }
    }

    clickHandler = ()=>{
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>            {/*ref attached to input tag */}
        <button onClick={this.clickHandler}>Click</button>
        <br></br>
        <input type='text' ref={this.setCbRef}></input>
      </div>
    )
  }
}

export default RefsDemo