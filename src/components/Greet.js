import React from "react";

// Stateless Functional Component

// function Greet(){
//     return <h1>Hello Hussnain</h1>
// }

// Defualt Export
// prefered way is arrow
// const Greet = () => <h1>Hello Hussnain</h1>\
// export default Greet

// Named Export
// props(properties) comes as an object in component function parameter.
export const Greet = (/*{name, lastName}*/props) => {
    
    //we can also destruct props and states
    // const {name, lastName} = props;
    // const {state1, state2} = state;

    return(
        <div>
            <h1>Hello {props.name} {props.lastName}</h1>
            {props.children}
        </div>
    )
};
