import React from "react";
import { Link } from "react-router-dom";
import Landing from "./Landing";
import DestinationList from "../DestinationList";
import Wishlist from "../Wishlist";
import Footer from "./Footer";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <strong>tour</strong>GLIDER
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/destinations" className="nav-link">
              Explore
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/wishlist" className="nav-link">
              Wishlist
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="d-flex justify-content-end">
          <Link to="/signup" className="btn btn-outline-success me-2" type="submit">
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
