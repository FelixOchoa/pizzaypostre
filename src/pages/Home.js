import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Pizza from "./Pizza";
import Dessert from "./Dessert";
import AboutMe from "./AboutMe";
import Page404 from "../components/404";

function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
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
      <NavBar handleLogOut={handleLogout} />
      <Routes>
        <Route path="/" element={<Pizza />} />
        <Route path="/home" element={<Pizza />} />
        <Route path="/pizzas" element={<Pizza />} />
        <Route path="/desserts" element={<Dessert />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route
          path="*"
          element={<Page404 message={"Página no encontrada"} />}
        ></Route>
      </Routes>
    </>
  );
}

export default Home;
