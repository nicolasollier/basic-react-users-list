import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    const newUser = {
      key: Math.floor(Math.random() * 10000),
      name: name,
      age: +age
    };

    if (newUser.age < 1 || newUser.name.trim().length === 0) {
      return;
    }

    props.onSaveUser(newUser);

    setName("");
    setAge("");
  };

  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };

  const onChangeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.card}>
      <form className={classes.form} onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={name}
          onChange={onChangeNameHandler}
        />
        <br />
        <label htmlFor="age">Age (years)</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={onChangeAgeHandler}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
