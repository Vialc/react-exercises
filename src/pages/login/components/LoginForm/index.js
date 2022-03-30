import { useState } from 'react';
import loginIMG from '../../../../assets/login-img.svg'
import Button from '../../../../components/Button';

function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const executeLogin = () => {
      console.log('Login executado')
      
  }

  return (
      <>
        <form className="login-form">
            <span className="login-form-title">Bem Vindo!</span>
            <span className="login-form-title">
              <img src={loginIMG} alt="Ilustração de pessoas trabalhando na construção de
              um aplicativo" />
            </span>

            <div className="wrap-input">
              <input 
              className={email !== "" ? "has-value input" : "input"} 
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
               />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
              className={password !== "" ? "has-value input" : "input"} 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <Button onClick={executeLogin}>Login</Button>
            </div>

            <div className="create-acount">
              <span className="txt1">Não possui conta?</span>

              <a href="#" className="txt2">Criar Conta.</a>
            </div>

          </form>
      </>
  );
}

export default LoginForm;