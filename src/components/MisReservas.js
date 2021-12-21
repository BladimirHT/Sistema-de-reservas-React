import React from "react";
import { Home } from "./Home";

const MisReservas = () => {
  const addOrEditReserva = async (reservaObject) => {
    await addDoc(collection(db, "usuarios"), reservaObject);
  };

  return (
    <div>
      <Home addOrEditReserva={addOrEditReserva} />
      <h1>Hola mundo</h1>
    </div>
  );
};

export default MisReservas;
