import React from "react";

export const ContainerModal = ({ data }) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs font-medium text-gray-500">{data.title}</span>
      {data.title.localeCompare("Instagram:") !== 0 ? (
        <span className="text-xs font-normal text-gray-900">{data.data}</span>
      ) : (
        <a
          className="truncate underline text-xs font-normal text-gray-900"
          href={data.data}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.data}
        </a>
      )}
    </div>
  );
};
