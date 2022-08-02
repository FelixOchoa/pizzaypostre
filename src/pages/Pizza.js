import React from "react";
import Card from "../components/pizza/Card";
import { usePizza } from "../components/pizza/hooks/usePizza";

const Pizza = () => {
  const { pizzas } = usePizza([]);

  return (
    <div
      className="w-full h-auto bg-contain"
      style={{ backgroundImage: "url('https://fondosmil.com/fondo/5568.jpg')" }}
    >
      <div className="pt-2 mx-4 lg:mx-24 grid lg:grid-cols-4 grid-cols-1 gap-7 justify-items-center">
        {pizzas.map((pizza) => (
          <li key={pizza.id} className="w-full">
            <Card
              name={pizza.nombre}
              img={pizza.imagenLink}
              ubication={pizza.ubicacion}
              time={[pizza.horaApertura, pizza.horaCierre]}
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Pizza;
