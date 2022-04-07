import React from "react";

import "./Signup.css";
import { Navbar } from "../components/navbar/Navbar";
import SignupBox from "../components/login/SignupBox/SignupBox";

const Signup = () => {
  return (
    <>
      <Navbar />
      <section className="signup-page-section">
        <SignupBox />
      </section>
    </>
  );
};

export default Signup;
