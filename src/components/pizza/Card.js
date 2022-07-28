import React from "react";

const Card = ({ name, img, price, description, createdAt }) => {
  return (
    <div className="bg-white w-full rounded-xl shadow-md">
      <div className="pb-4 flex flex-col">
        <img
          src={img}
          alt={name}
          className="rounded-xl rounded-b-none object-cover h-40 w-auto"
        />
        <div className="mt-4 mx-6 flex justify-between items-center">
          <span className="font-bold">{name}</span>
          <span className="text-gray-200 text-xs rounded-xl bg-blue-500 p-1">
            ${!price ? "0.00" : price}
          </span>
        </div>
        <p className="mx-6 text-gray-500 font-normal text-sm">{description}</p>
        <small className="mt-2 mx-6 text-gray-500 text-xs">
          Última modificación: {createdAt.substring(0, 10)}
        </small>
      </div>
    </div>
  );
};

export default Card;
