import React from "react";
import { Link } from "react-router-dom";
import { dataNavbar } from "../../components/navbar/data";

const NavBar = (props) => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/home" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Pizzas & Postres
          </span>
        </a>
        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {dataNavbar.map((item) => {
            return (
              <li key={item.title}>
                <Link to={item.path} className={item.className}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={props.handleLogOut}
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
