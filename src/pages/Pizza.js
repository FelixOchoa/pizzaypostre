import React from "react";
import Card from "../components/pizza/Card";
import { usePizza } from "../components/pizza/hooks/usePizza";
import { Modal } from "../components/pizza/Modal";
import { useState } from "react";
import { Search } from "../components/pizza/Search";

const Pizza = () => {
  const { pizzas } = usePizza([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dataContent, setDataContent] = useState({});
  const [search, setSearch] = useState("");
  const [screen, setScreen] = useState("");
  const infoDialog = (isOpened) => {
    setIsOpen(isOpened);
  };
  const infoSearch = (search) => {
    setSearch(search);
  };

  return (
    <div
      className={`w-full min-h-screen bg-contain`}
      style={{ backgroundImage: "url('https://fondosmil.com/fondo/5568.jpg')" }}
    >
      <Search infoSearch={infoSearch} />
      <div className="pt-2 mx-10 lg:mx-24 grid lg:grid-cols-4 grid-cols-1 gap-7">
        {search === ""
          ? pizzas.map((pizza) => (
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
            ))
          : pizzas
              .filter((pizza) => {
                return pizza.nombre
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((pizza) => (
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
