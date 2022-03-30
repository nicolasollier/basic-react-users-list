import React from "react";
import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const ErroModal = (props) => {
  return (
    <div>
      <div onClick={props.onConfirm} className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.footer}>
          <Button className={classes.button} onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErroModal;
