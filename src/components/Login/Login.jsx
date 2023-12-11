import React from "react";
import "../Register/Register.css";
import Register_img from "../../img/Register_img.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Register">
      <div className="modal-window">
        <img src={Register_img} alt="Registration" />
        <div className="form-block">
          <h1>Log in</h1>
          <div className="form">
            <form>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
              <button type="submit" className="register-btn">
                Log in
              </button>
            </form>
            <p>
              Don't have an account yet?{" "}
              <Link to="/register">Register now!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
