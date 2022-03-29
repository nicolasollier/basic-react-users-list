import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css"

const UserList = (props) => {
  return (
    <ul className={classes["user-list"]}>
      {props.users.map((user) => {
        return (
          <Card key={Math.floor(Math.random() * 10000)} className={classes.users}>
            <li>
              {user.name}, {user.age} years old.
            </li>
          </Card>
        );
      })}
    </ul>
  );
};

export default UserList;
