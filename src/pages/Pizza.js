import React from "react";
import { useState, useEffect } from "react";
import { pizzaService } from "../services/Pizza";
import Card from "../components/pizza/Card";

const Pizza = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    pizzaService()
      .then((data) => {
        const dataParse = data.productos;
        setPizzas(dataParse);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div
      className="w-full h-auto bg-contain"
      style={{ backgroundImage: "url('https://fondosmil.com/fondo/5568.jpg')" }}
    >
      <div className="pt-2 mx-4 lg:mx-24 grid lg:grid-cols-3 grid-cols-1 gap-7 justify-items-center">
        {pizzas.map((pizza) => (
          <li key={pizza.id} className="w-full">
            <Card
              name={pizza.nombre}
              img={pizza.linkImagen}
              price={pizza.precio}
              description={pizza.descripcion}
              createdAt={pizza.created_at}
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Pizza;
