import React from 'react'

export default function FunctionClick() {

  function eventHandler(){
    console.log("Function Event Handler Clicked.")
  }  

  return (
    <button onClick={eventHandler}>FunctionClick</button>
  )
}
