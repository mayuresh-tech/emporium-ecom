import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext/AuthContext";

import "./LoginBox.css";

const LoginBox = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateEmailError, setValidateEmailError] = useState(false);
  const [validatePasswordError, setValidatePasswordError] = useState(false);

  const validateEmailAndPassword = (email, password) => {
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (password.length < 8 && !emailPattern.test(email)) {
      return 3;
    } else if (!emailPattern.test(email)) {
      return 2;
    } else if (password.length < 8) {
      return 1;
    } else {
      return 4;
    }
  };

  const doLogin = async ({ email, password }) => {
    const checkEmailAndPassword = validateEmailAndPassword(email, password);

    if (checkEmailAndPassword === 1) {
      setValidatePasswordError(true);
    } else if (checkEmailAndPassword === 2) {
      setValidateEmailError(true);
    } else if (checkEmailAndPassword === 3) {
      setValidateEmailError(true);
      setValidatePasswordError(true);
    } else {
      try {
        const response = await axios.post("/api/auth/login", {
          email: email,
          password: password,
        });
        if ((await response.data.encodedToken) !== null) {
          localStorage.setItem(
            "login",
            JSON.stringify(await response.data.encodedToken)
          );
          setToken(true);
          navigate("/");
        }
      } catch (e) {
        setToken(false);
        navigate("/login");
      }
    }
  };

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
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        {validateEmailError ? (
          <span class="validation-errors error-msg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" />
            </svg>
            Please enter correct email!
          </span>
        ) : null}
        <label className="form-input-label required">Password</label>
        <input
          id="password-valid"
          type="password"
          className="form-input-field"
          placeholder="**********"
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {validatePasswordError ? (
          <span class="validation-errors error-msg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" />
            </svg>
            Password should be at least 8 characters
          </span>
        ) : null}
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
            onClick={() => {
              doLogin({ email, password });
            }}
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
