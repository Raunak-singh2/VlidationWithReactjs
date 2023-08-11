import React from "react";
import useInput from "../Hooks/useInput";

const nameNotBlanck = (value) => value.trim() !== "";
const emailNotBlanck = (value) => nameNotBlanck(value) && value.includes("@");

function From() {
  const {
    value: firstNameValue,
    isValid: nameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlueHandler,
    reset: resetName,
  } = useInput(nameNotBlanck);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlueHandler,
    reset: resetLastName,
  } = useInput(nameNotBlanck);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlueHandler,
    reset: resetEmail,
  } = useInput(emailNotBlanck);

  let formIsValid = false;

  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log("subbmiting from data");
    resetName();
    resetLastName();
    resetEmail();
  };

  const firstNameClass = firstNameHasError
    ? "from-control invalid"
    : "from-control";
  const lastNameclass = lastNameHasError
    ? "from-control invalid"
    : "from-control";
  const emailclass = emailHasError ? "from-control invalid" : "from-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={firstNameClass}>
        <div className="name">
          <label style={{ display: "flex" }}>Name :-</label>
          <br />
          <input
            type="name"
            id="name"
            value={firstNameValue}
            style={{
              border: "none",
              outline: "none",
              border: "2px solid darkgreen",
              padding: ".25rem",
              fontSize: "1.5rem",
              marginright: 5,
            }}
            onChange={nameChangeHandler}
            onBlur={nameBlueHandler}
          />
          {firstNameHasError && (
            <p style={{ color: "red" }}>Invalid firstName...</p>
          )}
        </div>
        <div className={lastNameclass}>
          <label style={{ display: "flex", marginTop: 15 }}>lastName :-</label>
          <br />
          <input
            type="name"
            id="lastName"
            value={lastNameValue}
            style={{
              border: "none",
              outline: "none",
              border: "2px solid darkgreen",
              padding: ".25rem",
              fontSize: "1.5rem",
              marginright: 5,
            }}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlueHandler}
          />
          {lastNameHasError && (
            <p style={{ color: "red" }}>Invalois last name...</p>
          )}
        </div>
        <div className={emailclass}>
          <label style={{ display: "flex", marginTop: 15 }}>Gmail :-</label>
          <br />
          <input
            type="gmail"
            id="email"
            value={emailValue}
            style={{
              border: "none",
              outline: "none",
              border: "2px solid darkgreen",
              padding: ".25rem",
              fontSize: "1.5rem",
              marginright: 5,
            }}
            onChange={emailChangeHandler}
            onBlur={emailBlueHandler}
          />
          {emailHasError && <p style={{ color: "red" }}>Inalid Email.....</p>}
        </div>
        <button
          style={{
            border: "none",
            outline: "none",
            border: "2px solid darkgreen",
            padding: ".25rem 3rem",
            fontSize: "1.5rem",
            background: "darkgreen",
            color: "#fff",
            cursor: "pointer",
            marginTop: 25,
            textTransform: "uppercase",
          }}
          disabled={!formIsValid}
        >
          submit
        </button>
      </div>
    </form>
  );
}

export default From;
