import React, { useState } from "react";
import restaurante_2 from "../img/restautante_2.jpg";

export const Home = () => {
  const initialStateValues = {
    name: "",
    numberPeople: "",
    dateTimeEntry: "",
  };

  const loggedIn = []; 

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({...initialStateValues})
  };

  return (
    <>
      <section className="container-main-restaurant">
        <img
          className="container-restaurant-left"
          src={restaurante_2}
          alt="Icutter Store"
          heigth="150px"
          width="150px"
        />
        <div className="container-restaurant-right">
          <form onSubmit={handleSubmit}>
            <label htmlFor ="nombre" className="formulario">
              <span id="titleRestaurant">Gabriel</span>
              <hr width="50%"></hr>
              <span>¿Nombre de la persona para la reservación? </span>
              <hr />
              <input
                type="text"
                id="nombre"
                name="name"
                autoComplete="name"
                placeholder="Nombre"
                onChange={handleInputChange}
                value={values.name}
              ></input>
              <hr />
            </label>
            <label htmlFor ="people" className="formulario">
              <span>Cantidad de personas</span>
              <hr />
              <input
                list="people"
                name="numberPeople"
                onChange={handleInputChange}
                value={values.numberPeople}
              ></input>
              <datalist id="people">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
                <option value="6"></option>
                <option value="7"></option>
                <option value="8"></option>
                <option value="9"></option>
                <option value="10"></option>
              </datalist>
            </label>
            <hr />
            <label htmlFor ="dateTimeEntrada" className="formulario">
              <input
                type="datetime-local"
                name="dateTimeEntry"
                placeholder="Fecha entrada"
                onChange={handleInputChange}
                value={values.dateTimeEntry}
              ></input>{" "}
            </label>
            <hr />
            <button className="reserva" type="submit" >
              Reservar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;