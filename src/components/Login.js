import React from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  let history = useHistory();

  function enrutar() {
    <Redirect to="/Home" />;
    const loggedIn = [
      { usuario: usuario.value },
      { password: contraseña.value },
    ];
    
    history.push("/Home");
    console.log(loggedIn);
  }

  return (
    <div className="card-container-sign-in-card">
      Sign in with Google
      <label htmlFor="user" className="input">
        <input
          type="text"
          name="user"
          id="usuario"
          placeholder="Usuario"
          required
          // value={values.dateTimeEntry}
        ></input>{" "}
      </label>
      <label htmlFor="password" className="input">
        <input
          type="text"
          name="password"
          id="contraseña"
          placeholder="Contraseña"
          required
          // value={values.dateTimeEntry}
        ></input>{" "}
      </label>
      <hr />
      <button className="reserva" onClick={enrutar}>
        Reservar
      </button>
    </div>
  );
};

export default Login;
