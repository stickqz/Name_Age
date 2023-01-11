import { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [error, setError] = useState();
  const nameInfo = useRef();
  const ageInfo = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    const entrName = nameInfo.current.value;
    const entrAge = ageInfo.current.value;
    if (entrName.trim().length === 0 || entrAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty string).",
      });
      return;
    }
    if (+entrAge < 1) {
      setError({
        title: "Invalid Input(Age)",
        message: "Please enter a age(greater than 0).",
      });
      return;
    }
    props.onAddUser(entrName, entrAge);
    nameInfo.current.value = "";
    ageInfo.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInfo} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInfo} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
