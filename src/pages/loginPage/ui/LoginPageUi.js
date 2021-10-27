import React from 'react';
import Styles from '../css/LoginPageUi.module.css';
import { Link } from "react-router-dom";
export default function LoginPageUi(props) {
    const { handleChange, handleLogin, credintial, pushToRegister } = props;
    return (
        <div className="container">
        <div className={Styles.loginWrapper}>
          <div className={Styles.imageWrapper}></div>
          <div className={Styles.loginFormWrapper}>
            <div className={Styles.form}>
              <h2>ACCOUNT LOGIN</h2>
              <input
                type="email"
                name="email"
                placeholder={"Enter Email"}
                value={credintial.email}
                onChange={handleChange}
                
              />
              <input
                type="password"
                name="password"
                placeholder={"Password"}
                value={credintial.password}
                onChange={handleChange}
               
              />
              <button type="submit" onClick={handleLogin}>
                Login
              </button>
              <p>
                Don't have an account
                <span>
                  <Link onClick={pushToRegister} to="">
                  
                    Register now
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
