import React from "react";
// import { isHtmlElement } from "react-router-dom/dist/dom";

const InventoryDetails = (params) => {
  console.log(params);
  const { name, img, ratings, comments } = params.item;

  return (
    <div className="w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer m-10">
      <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center">
        <img
          src={img}
          alt=""
          className="object-cover h-full w-full rounded border border-radius-2"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-600 font-medium">{name}</h1>
        </div>
        <p className="text-gray-400 text-sm my-1">{ratings}</p>
        <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium">
          {comments}
        </span>
      </div>
    </div>
  );
};

export default InventoryDetails;
