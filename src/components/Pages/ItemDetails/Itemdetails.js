import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";
import ItemAddToStock from "./ItemAddToStock";

const Itemdetails = () => {
  const { itemid } = useParams();
  // console.log(params);
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(false);
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
    Weight,
    Torque,
  } = items;

  useEffect(() => {
    const getInventories = async () => {
      const url = `http://localhost:5000/inventory/${itemid}`;
      const { data } = await axios.get(url);

      setItems(data);
      setLoading(false);
    };
    getInventories();
  }, [items, itemid]);

  // update the stocks

  const quantityUpgrade = (e) => {
    e.preventDefault();
    const quantity = e.target.add.value;
    console.log("quantity", quantity);
    if (quantity >= 1) {
      const updatedQuantity = parseInt(quantity) + parseInt(Quatity);
      const url = `http://localhost:5000/itemAddToStock/${itemid}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ updatedQuantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("updatedQuantity", data);
          if (data.modifiedCount === 1 || data.matchedCount === 1) {
            toast.success("Successfully Updated");
          }
          setLoading(!loading);
          e.target.reset();
        });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl">General Info:</h1>
              <hr />
              <h1>Bike Name: {Name}</h1>
              <h1>In Storage: {Quatity}</h1>
              <h1>Origin: {Assembly ? Assembly : "Not Available"}</h1>
              <h1>Bike Class: {Class}</h1>
              <h1>Engine: {Engine}</h1>
              <h1>Power: {Power}</h1>
              <h1>Torque: {Torque}</h1>
              <h1>Brakes: {Brakes}</h1>
              <h1>Transmission: {Transmission}</h1>
              <h1>Weight: {Weight}</h1>
              <h1>Price: {Price}</h1>
              <h1>Production: {Production}</h1>
              <h1>Manufacturer: {Manufacturer}</h1>

              <h1 className="text-3xl mt-4 mb-2">
                Delivery from :
                <button className="inline-flex items-center justify-center space-x-2 py-2 px-3 mx-1 border border-transparent text-sm font-medium rounded text-white bg-green-600 hover:bg-green-700 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>Delivered</div>
                </button>
              </h1>
              <hr />
              <ItemAddToStock
                // Quatity={Quatity}
                quantityUpgrade={quantityUpgrade}
              ></ItemAddToStock>
              {/* <div className="p-8 rounded border border-gray-200">
                {" "}
                <h1 className="font-medium text-3xl">Add Stock</h1>{" "}
                <p className="text-gray-600 mt-6">
                  Here user can update some quantity of stored bikes...
                </p>
                <form onSubmit={quantityUpgrade}>
                  <div className="mt-8 space-y-6">
                    {" "}
                    <div>
                      {" "}
                      <label
                        htmlFor="floatingInput"
                        className="text-sm text-gray-700 block mb-1 font-medium"
                      >
                        Add <br />
                        (can not add more then 10)
                      </label>
                      <input
                        type="number"
                        max="10"
                        name="add"
                        id="name"
                        required
                        className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                        placeholder="Add to stock..."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-sm text-gray-700 block mb-1 font-medium"
                      >
                        Update Stock Information
                      </label>{" "}
                      <input
                        type="submit"
                        name="update"
                        id="submit"
                        className="border  bg-blue-500 text-white rounded  border-gray-200 py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 w-full"
                        placeholder="Update"
                      />{" "}
                    </div>
                  </div>
                </form>
              </div> */}
            </div>
            <div className="flex order-1 md:order-2 justify-center items-center">
              <img
                src={
                  IMG
                    ? IMG
                    : "https://i.ibb.co/NL6n93t/Honda-Cb750-Gear-Patrol.jpg"
                }
                alt="bikeImg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Itemdetails;
