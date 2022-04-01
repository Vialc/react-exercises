import React from "react";
import RegisterForm from "./components/RegisterForm";

// import { Container } from './styles';

function Register() {
  return (
    <>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
