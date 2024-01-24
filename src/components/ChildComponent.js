import React from 'react'

function ChildComponent(props) {



  return (
    // <button onClick={props.greetHandler}>Greet Parent</button>

    // if child want to send some info to parent via method use arrow function and send via parameter
    <button onClick={()=>{props.greetHandler("child")}}>Greet Parent</button>
  )
}

export default ChildComponent