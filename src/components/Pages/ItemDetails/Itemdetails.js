import axios from "axios";
import React, { useEffect, useState } from "react";
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
      const url = `https://warehouse-server-render.onrender.com/inventory/${itemid}`;
      const { data } = await axios.get(url);

      setItems(data);
      setLoading(false);
    };
    getInventories();
  }, [items, itemid]);

  // delivered item
  const handleDelivery = (id) => {
    const getQuantity = async () => {
      const newUpdate = { Quatity };
      const url = `https://warehouse-server-render.onrender.com/itemDelivered/${_id}`;
      const { data } = await axios.put(url, newUpdate);
      console.log(data);
      if (data.modifiedCount) {
        toast.success("Successfully Delivered", { id: "test" });
      }
    };
    getQuantity();
  };

  // update the stocks

  const quantityUpgrade = (e) => {
    e.preventDefault();
    const quantity = e.target.add.value;
    console.log("quantity", quantity);
    if (quantity >= 1) {
      const updatedQuantity = parseInt(quantity) + parseInt(Quatity);
      const url = `https://warehouse-server-render.onrender.com/itemAddToStock/${itemid}`;
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
              <h1>In Storage: {Quatity >= 1 ? Quatity : "Stock out"}</h1>
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
                <button
                  onClick={handleDelivery}
                  className="inline-flex items-center justify-center space-x-2 py-2 px-3 mx-1 border border-transparent text-sm font-medium rounded text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
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
