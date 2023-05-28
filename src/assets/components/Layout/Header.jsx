import React from "react";
import { Link } from "react-router-dom";
import Signup from "../Signup";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <strong>tour</strong>GLIDER
        </a>

        <div className="d-flex justify-content-end">
          <Link
            to="/signup"
            className="btn btn-outline-success me-2"
            type="submit"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
