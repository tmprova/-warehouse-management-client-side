import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import useInventoryHook from "../../customHook/useInvenoryHook";
import InventoryDetails from "./InventoryDetails";

const Inventory = () => {
  const [storage, setStorage] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch("https://warehouse-server-render.onrender.com/inventory")
      .then((res) => res.json())
      .then((data) => setStorage(data));
  }, [load]);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="bc9273ce-29bb-4565-959b-714607d4d027"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Choose</span>
          </span>{" "}
          your way. Advance everyday.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
        <Link
          to="/additem"
          className="inline-flex items-center justify-center w-full h-12 px-6 mt-2 font-medium tracking-wide text-white transition duration-200 bg-blue-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
        >
          Add Item
        </Link>
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {storage.map((item) => (
          <InventoryDetails
            key={item._id}
            item={item}
            load={load}
            setLoad={setLoad}
          ></InventoryDetails>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
