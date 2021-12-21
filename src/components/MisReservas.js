import React from "react";
import { Home } from "./Home";

const MisReservas = () => {
  const addOrEditReserva = async (reservaObject) => {
    await addDoc(collection(db, "usuarios"), reservaObject);
  };

  return (
    <div>
          <table className="task-list">
            <thead className="list-head">
              <tr className="list-row">
                <th className="list-head-item">Nombre</th>
                <th className="list-head-item">Cantidad de personas</th>
                <th className="list-head-item">Fecha</th>
              </tr>
            </thead>
            <tbody id="list-body">
            </tbody>
          </table>    </div>
  );
};

export default MisReservas;
