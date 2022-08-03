import React from "react";
import { getTime } from "../pizza/services/getTime";

const Card = ({ name, img, ubication, time, id }) => {
  const { open, color } = getTime(time);

  return (
    <div className="bg-white w-full rounded-xl shadow-md">
      <div className="pb-4 flex flex-col">
        <img
          src={img}
          alt={name}
          className="rounded-xl rounded-b-none object-cover h-32 w-auto"
        />
        <div className="mt-4 mx-6 flex justify-between items-center">
          <span className="truncate font-bold text-sm">{name}</span>
          <span className={`text-gray-200 text-xs rounded-xl ${color} p-1`}>
            {open}
          </span>
        </div>
        <p className="mx-6 text-gray-500 font-normal text-xs">{ubication}</p>
      </div>
    </div>
  );
};

export default Card;
