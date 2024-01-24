import React from 'react'
import Person from './Person';
//only responsible for rendering personsList

// Sometimes we need to render list of items like, Names, Products, SERVICES, courses. for that we have to use
// some HTML again and again. To avoid this repetition by oursefl we assign this task to map.
function NameListRendering() {

//===============================================================================================================//
    //part-2: But typical we have list of objects that we need to render some info from that. 
    // it is always a good idea to render that info in seperate component and show in this component within map method.
    // let's see example, for that we are creating new Component called Persons.js

    const persons = [
        {
            id: 1,
            name: "Hussnain",
            age : 28,
            skill: "react"
        },
        {
            id: 2,
            name: "Salaar",
            age : 20,
            skill: "Artifical Intelligence"
        },
        {
            id: 3,
            name: "Fatima",
            age : 18,
            skill: "Blockchain"
        },
        {
            id: 4,
            name: "Sikandar",
            age : 19,
            skill: "Python"
        }
    ];
    // it is a good idea to render JSX in a seperate component and show in this component.
    //const personList = persons.map(person => <h3 key={person.id}>Hi! I am {person.name} and my age is {person.age}. I have skills in {person.skill}.</h3>);
    
    const personList = persons.map(person => <Person key={person.id} person = {person}/>);
    // key={person.id} this is for to avoid warning in console: Warning: Each child in a list should have a unique "key" prop.
    // for more refernce of this see next video -> ReactJS Tutorial - 18 - Lists and Keys
    // key is for react and we cannot access it in props. key tells react which item updates and handle them efficently.
    return <div> {personList}</div>

//===============================================================================================================//
    //const names = ["Hussnain", "Salaar", "Sikandar", "Fatima", "Yousuf"]
//-----------------------------------------------------------------//
    //--> same like below
    // const namesList = names.map((n, index) => <h2 key={index}>{n}</h2>);
    // return <div>{namesList}</div>;
//-----------------------------------------------------------------//    
    // same like below but if you are using Javascript inside a html(JSX) tag then add {} like I added here after <div>
    // also use any javascript variable inside Html within {n}
    // Simple remember anytime we use javascript inside HTMl(JSX) we have to put {}.
    // return(
    //     <div>
    //         {
    //             names.map((n, index) => <h2 key={index}> {n} </h2>)
    //         }
    //     </div>
    // )
//-----------------------------------------------------------------//
    // return(
    //     names.map(n => <h2>{n}</h2>)
    // )
//-----------------------------------------------------------------//
//   Normal way
//   return (
//     <div>
//        <h2>{names[0]}</h2>
//        <h2>{names[1]}</h2>
//        <h2>{names[2]}</h2>
//        <h2>{names[3]}</h2>
//        <h2>{names[4]}</h2>
//     </div>
//   )
}

export default NameListRendering