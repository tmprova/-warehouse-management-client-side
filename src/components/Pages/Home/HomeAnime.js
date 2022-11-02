import React from "react";
import { Link } from "react-router-dom";

const HomeAnime = () => {
  return (
    <div className="grid">
      {/* " */}
      <div className="flex justify-center items-center">
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_l1stlkjz.json"
          background="transparent"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
      <div className="mt-2">
        <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-orange-600 active:bg-blue-700 ">
          <Link className="btn btn primary" to="/inventory">
            Manage inventory
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HomeAnime;
