import React from 'react'
//only responsible for rendering person html and we use this technique when we have objects in a list

function Person(props) { // function Person({person}) { // this one is short and good
    //console.log(props)
    const {person} = props;
    // console.log(person)

  return <h3>Hi! I am {person.name} and my age is {person.age}. I have skills in {person.skill}.</h3>
}

export default Person