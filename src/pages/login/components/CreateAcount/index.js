import React from "react";
import { Link } from "react-router-dom";

import './styles.css';

function CreateAcount() {
  return (
    <>
      <div className="create-acount">
        <span className="txt1">Não possui conta?</span>
        <Link to="/register">
          <span>Criar Conta.</span>
        </Link>
      </div>
    </>
  );
}

export default CreateAcount;
