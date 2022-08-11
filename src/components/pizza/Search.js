import React from "react";
import { useState } from "react";

export const Search = ({ infoSearch }) => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    infoSearch(e.target.value);
  };
  return (
    <div className="flex flex-col items-center pt-4 w-auto">
      <div className="flex w-3/5">
        <input
          type="text"
          placeholder="¿Quieres una Pizza? Búsca el restaurante aquí"
          className="p-4 rounded-bl-full rounded-tl-full w-full shadow-lg text-center outline-0"
          onChange={handleChange}
          id="clearButton"
        />
        <button
          className="p-4 bg-blue-400 rounded-br-full rounded-tr-full shadow-lg text-center"
          onClick={() => {
            document.getElementById("clearButton").value = "";
            setSearch("");
            infoSearch("");
          }}
        >
          Limpiar
        </button>
      </div>
    </div>
  );
};
