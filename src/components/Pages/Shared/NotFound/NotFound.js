import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-xl ">
      <h1 className="uppercase text-5xl text-semibold ">Oppssss!!!not found</h1>
      <div>
        <button>
          <Link
            to="/home"
            className="inline-flex items-center justify-center w-full h-12 px-6 mt-2 font-medium tracking-wide text-white transition duration-200 bg-blue-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          >
            Back to Home
          </Link>
        </button>
      </div>
      <div>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://i.ibb.co/b1py5DW/depositphotos-45761811-stock-illustration-motorcycle-accident.webp?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFound;
