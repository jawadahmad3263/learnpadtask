import React from "react";
import { Link } from "react-router-dom";
import Styles from "../css/NavbarUi.module.css";

export default function NavbarUi(props) {
  return (
    <div className={` ${Styles.navbarSection}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={"./assets/logo.png"} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end align-items-center ${Styles.navbarSectionMain}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Tutorials Vidoes
                </Link>
              </li>
              <li className={`nav-item ${Styles.linkwrapper}`}>
                <Link className="nav-link" to="/signup">
                  Sign up
                </Link>
              </li>
              <li className={`nav-item ${Styles.linkStyle}`}>
                <Link
                  className="nav-link"
                  to="/login"
                  style={{ color: "white" }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
