import React from "react";

import "./Login.css";
import { Navbar } from "../components/navbar/Navbar";
import LoginBox from "../components/login/LoginBox/LoginBox";

const Login = () => {
  return (
    <>
      <Navbar />
      <section className="login-page-section">
        <LoginBox />
      </section>
    </>
  );
};

export default Login;
