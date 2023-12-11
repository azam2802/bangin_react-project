import React from "react";
import "./Register.css";
import Register_img from "../../img/Register_img.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="Register">
      <div className="modal-window">
        <img src={Register_img} alt="Registration" />
        <div className="form-block">
          <h1>Registration</h1>
          <div className="form">
            <form>
              <div className="name">
                <div className="first_name">
                  <label htmlFor="first_name">First Name</label>
                  <input type="text" name="first_name" />
                </div>
                <div className="last_name">
                  <label htmlFor="last_name">Last Name</label>
                  <input type="text" name="last_name" />
                </div>
              </div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
              <label htmlFor="re-password">Re-enter Password</label>
              <input type="password" name="re-password" />
              <div className="check">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox" id="checkbox-text">
                  I’ve read and agree with Terms of Service and our Privacy
                  Policy
                </label>
              </div>
              <div className="submit">
                <button type="submit" className="register-btn">
                  Register
                </button>
              </div>
            </form>
            <p>
              Already have an account? <Link to="/login">Log in!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
