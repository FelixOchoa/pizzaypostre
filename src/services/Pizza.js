const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a5eb30d4b2msh324a4567ade5e91p1c2000jsnd95b33296b81",
    "X-RapidAPI-Host": "pizzaallapala.p.rapidapi.com",
  },
};

export const pizzaService = async () => {
  const data = await fetch(
    "https://pizzaallapala.p.rapidapi.com/productos",
    options
  )
    .then((response) => response.json())
    .then((response) => response);
  return data;
};
