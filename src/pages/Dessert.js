import React from "react";
import Page404 from "../components/404";
import { useState } from "react";

const Dessert = () => {
  const [desserts, setDesserts] = useState(null);
  if (!desserts) {
    return (
      <Page404 message={"No ha sido posible encontrar la información..."} />
    );
  }
  return (
    <div>
      <h1>Dessert</h1>
    </div>
  );
};

export default Dessert;
