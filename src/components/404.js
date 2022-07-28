import React from "react";

const Page404 = ({ message }) => {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <h1 className="pt-24 text-7xl font-bold">ERROR 404</h1>
        <p className="text-gray-500 text-center">{message}</p>
      </div>
    </>
  );
};

export default Page404;
