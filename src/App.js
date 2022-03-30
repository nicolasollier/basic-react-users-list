import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([{key: 1, name: "Bob", age: 42 }]);

  const onSaveUserHandler = (userData) => {
    setUsersList((usersList) => {
      return [...usersList, userData];
    });
  };

  return (
    <React.Fragment>
      <AddUser onSaveUser={onSaveUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;
