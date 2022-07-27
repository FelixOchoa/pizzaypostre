import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      console.log("no hay usuario");
      navigate("/login");
    }
  }, [navigate]);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/*" element={<div>Soy el Home</div>} />
        <Route path="/pizzas" element={<div>pizzas</div>} />
        <Route path="/desserts" element={<div>postres</div>} />
      </Routes>
      <button onClick={handleLogout}>LogOut</button>
    </>
  );
}

export default Home;
