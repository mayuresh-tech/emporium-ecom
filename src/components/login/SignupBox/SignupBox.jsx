import React from "react";
import { Link } from "react-router-dom";

import "./SignupBox.css";

const SignupBox = () => {
  return (
    <div className="auth-box-signup">
      <h4 id="h4">Signup</h4>
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
              <label className="form-input-label">
                I agree all Terms and Conditions
              </label>
            </div>
          </div>
          <button
            id="signup-btn"
            type="button"
            className="btn-submit btn-solid-primary"
          >
            Create new account
          </button>
        </div>
        <Link to="/login">
        <label className="form-input-label have-acc">
          Already have an account?
        </label>
        </Link>
      </form>
    </div>
  );
};

export default SignupBox;
