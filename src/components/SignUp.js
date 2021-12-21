import React from "react";

const SignUp = () => {
    function enrutar() {
        // <Redirect to={"/Home"} />;
        <Redirect to="/Home" />
      }

  return (
    <div className="card-container-sign-in-card">
          Sign in with Google
          <label for="user" className="input">
            <input
              type="text"
              name="user"
              placeholder="Usuario"
              required
              // value={values.dateTimeEntry}
            ></input>{" "}
          </label>
          <label for="password" className="input">
            <input
              type="text"
              name="password"
              placeholder="Contraseña"
              required
              // value={values.dateTimeEntry}
            ></input>{" "}
          </label>
          <hr />
          <button className="reserva"  onClick={enrutar}>
            Reservar
          </button>
    </div>
  );
};

export default SignUp;
