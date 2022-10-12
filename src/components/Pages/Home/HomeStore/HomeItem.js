import React from "react";
import { useNavigate } from "react-router-dom";

const HomeItem = ({ item }) => {
  const {
    _id,
    Name,
    IMG,
    Manufacturer,
    Production,
    Assembly,
    Class,
    Engine,
    Power,
    Transmission,
    Brakes,
    Price,
    Quatity,
  } = item;

  const navigate = useNavigate();

  const navigateToItemDetails = (_id) => {
    navigate(`/inventory/${_id}`);
  };

  return (
    <div className="w-80 bg-white shadow rounded">
      <div className="h-80 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center">
        <div className="flex justify-between">
          <img
            src={
              IMG ? IMG : "https://i.ibb.co/NL6n93t/Honda-Cb750-Gear-Patrol.jpg"
            }
            alt=""
            className="h-full w-full rounded border border-radius-2"
          />
        </div>

        <div>
          <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
            {Name}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col items-center">
        <p className="text-gray-400 font-light text-xs text-center">
          {Manufacturer}
        </p>
        <h1 className="text-gray-400 font-medium flex flex-col items-center text-center mt-1">
          Year:{Production}, Assembly:{Assembly}, Class:{Class}, Engine:{Engine}
          , Power:{Power}, Transmission:{Transmission}, Brakes:
          {Brakes}
        </h1>
        <p className="text-center text-gray-800 mt-1">{Price}</p>
        <div className="inline-flex items-center mt-2">
          <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            {Quatity}
          </div>
        </div>

        <button
          onClick={() => navigateToItemDetails(_id)}
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default HomeItem;
