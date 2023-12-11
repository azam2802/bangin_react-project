import React from "react";
import "./Header.css";
import Logo from "../../img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <div className="row">
          <div className="col-4">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="col-4 col-4-links">
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to='/product/magokits'>Product</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="col-4">
            <a href="#">
              <Link to="/register">
                <button>Register</button>
              </Link>
              <Link to="/login">
                <button>Log in</button>
              </Link>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
