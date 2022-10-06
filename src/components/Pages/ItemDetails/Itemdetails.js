import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";

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
              <h1 className="text-3xl mt-4">Scores:</h1>
              <hr />
              <h1>Community Score: {Transmission}</h1>
              <h1>Developer Score: {Price}</h1>
              <h1>Liquidity Score: {Production}</h1>
              <h1>Public Interest Score: {Manufacturer}</h1>
            </div>
            <div className="flex order-1 md:order-2 justify-center items-center">
              <img src={IMG ? IMG : "not available"} alt="bikeImg" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Itemdetails;
