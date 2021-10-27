import React from "react";
import Styles from "../css/SignUpUi.module.css";
export default function SignUpUi(props) {
  const { handleChange, signUpData, handleSignUp, backToLogin } = props;
  return (
    <div className="container">
      <div>
        <button className={Styles.backBtn} onClick={backToLogin}>
          Back to Login
        </button>
      </div>
      <div className={Styles.form}>
        <h2>Fill the form to register now</h2>
        <input
          type="text"
          name="firstName"
          placeholder={"Enter first name"}
          value={signUpData.firstName}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="text"
          name="lastName"
          placeholder={"Enter last name"}
          value={signUpData.lastName}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          placeholder={"Enter Email"}
          value={signUpData.email}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          placeholder={"Password"}
          value={signUpData.password}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder={"Confirm password"}
          value={signUpData.password_confirmation}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit" onClick={handleSignUp}>
          Register
        </button>
      </div>
    </div>
  );
}
