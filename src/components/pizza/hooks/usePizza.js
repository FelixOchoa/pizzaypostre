import { useState, useEffect } from "react";
import getPizza from "../services/getPizza";

export const usePizza = (arrayPizza) => {
  const [pizzas, setPizzas] = useState(arrayPizza);
  useEffect(() => {
    getPizza().then((data) => {
      setPizzas(data);
    });
  }, []);
  return { pizzas };
};
