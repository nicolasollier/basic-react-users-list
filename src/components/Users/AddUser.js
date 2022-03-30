import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper"

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const newUser = {
      key: Math.floor(Math.random() * 10000),
      name: name,
      age: +age,
    };

    if (newUser.name.trim().length === 0 || newUser.age.length === 0) {
      setError({
        title: "Invalid user informations",
        message: "Please add non-empty values",
      });
      return;
    }

    if (newUser.age < 1) {
      setError({
        title: "Invalid user age",
        message: "Please add an age above 0",
      });
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

  const onConfirmHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onConfirmHandler}
        />
      )}
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
    </Wrapper>
  );
};

export default AddUser;
