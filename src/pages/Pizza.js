import React from "react";
import Card from "../components/pizza/Card";
import { usePizza } from "../components/pizza/hooks/usePizza";
import { Modal } from "../components/pizza/Modal";
import { useState } from "react";

const Pizza = () => {
  const { pizzas } = usePizza([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dataContent, setDataContent] = useState({});
  const infoDialog = (isOpened) => {
    setIsOpen(isOpened);
  };
  return (
    <div
      className="w-full h-auto bg-contain"
      style={{ backgroundImage: "url('https://fondosmil.com/fondo/5568.jpg')" }}
    >
      <div className="pt-2 mx-10 lg:mx-24 grid lg:grid-cols-4 grid-cols-1 gap-7 justify-items-center">
        {pizzas.map((pizza) => (
          <li
            key={pizza.id}
            className="w-full"
            onClick={() => {
              setIsOpen(true);
              setDataContent(pizza);
            }}
          >
            <Card
              name={pizza.nombre}
              img={pizza.imagenLink}
              ubication={pizza.ubicacion}
              time={[pizza.horaApertura, pizza.horaCierre]}
            />
          </li>
        ))}
      </div>
      {isOpen && (
        <Modal
          infoDialog={infoDialog}
          isOpen={isOpen}
          dataModal={dataContent}
        ></Modal>
      )}
    </div>
  );
};

export default Pizza;
