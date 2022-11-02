import React, { useEffect, useState } from "react";

import HomeItem from "./HomeItem";

const HomeStoreage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://warehouse-server-render.onrender.com/inventory").then(
      (res) => res.json().then((data) => setItems(data))
    );
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Vintage
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_Vz3W8s.json"
              background="transparent"
              speed="1"
              style={{ width: "52px", height: "40px" }}
              loop
              autoplay
            ></lottie-player>
            <span className="relative">Choose</span>
          </span>{" "}
          your way. Advance everyday.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          “Life is not about waiting for the storms to pass: it’s about learning
          how to ride in the rain!” ― Anonymous
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {items?.slice(0, 6).map((item) => (
          <HomeItem key={item._id} item={item}></HomeItem>
        ))}
      </div>
      {/* <div className="mt-8">
        <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">
          <Link className="btn btn primary" to="/inventory">
            Manage inventory
          </Link>
        </button>
      </div> */}
    </div>
  );
};

export default HomeStoreage;
