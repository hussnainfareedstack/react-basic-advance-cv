import React from "react";

const UserContext = React.createContext("Codevolution"); // here "Codevolution" is a default value

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}

// for context type

export default UserContext