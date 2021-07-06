import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../firebase.js";

const SignUp = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      setCurrentUser(true);
      props.addUser();
    } catch (error) {
      alert(error);
    }
  };

  if (currentUser) {
    const uid = currentUser.uid;
    return <Redirect to="/" />;
  }
  
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={props.getUserEmail}
          id="email"
          value={props.email}
          type="email"
          name="email"
          placeholder="Email"
        />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUp;
