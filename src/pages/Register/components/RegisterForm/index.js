import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginIMG from "../../../../assets/login-img.svg";
import Button from "../../../../components/Button";

// import { Container } from './styles';

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const executeLogin = () => {
    console.log("Login executado");
  };

  return (
    <>
      <form className="login-form">
        <span className="login-form-title">Cadastrar Novo Usuário</span>
        <span className="login-form-title">
          <img
            src={loginIMG}
            alt="Ilustração de pessoas trabalhando na construção de
          um aplicativo"
          />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-value input" : "input"}
            type="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-value input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-value input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <Button onClick={executeLogin}>Cadastrar</Button>
        </div>

        <div className="container-login-form-btn">
          
            <Button><Link to="/login">Voltar</Link></Button>
          
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
