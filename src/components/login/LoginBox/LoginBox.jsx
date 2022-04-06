import React from "react";
import { Link } from "react-router-dom";

import "./LoginBox.css";

const LoginBox = () => {
  return (
    <div className="auth-box-login">
      <h4 id="h4">Login</h4>
      <form className="validate">
        <label className="form-input-label required">Email address</label>
        <input
          id="email-valid"
          type="text"
          className="form-input-field"
          placeholder="user@example.com"
          required
        />
        <label className="form-input-label required">Password</label>
        <input
          id="password-valid"
          type="password"
          className="form-input-field"
          placeholder="Enter password"
          required
        />
        <div className="form-valid-box">
          <div className="side-ways">
            <div>
              <input
                id="checkbox-valid"
                type="checkbox"
                className="checbox-terms"
              />
              <label className="form-input-label">Remember me</label>
            </div>
            <div className="forgot-pass-container">
              <button className="no-bg btn-text-primary">
                Forgot Password?
              </button>
            </div>
          </div>
          <button
            id="login-btn"
            type="button"
            className="btn-submit btn-solid-primary"
          >
            Login
          </button>
        </div>
        <Link to="/signup">
          <label className="form-input-label create-acc">
            Create an account
          </label>
        </Link>
      </form>
    </div>
  );
};

export default LoginBox;
