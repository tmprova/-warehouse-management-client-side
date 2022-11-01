import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase/firebase.init";
// / Name,
// IMG,
// Manufacturer,
// Production,
// Assembly,
// Class,
// Engine,
// Power,
// https://i.ibb.co/xXNZ4Hm/vincent-shadow.jpg
// const user= useAuthState(auth)
// Transmission,
// Brakes,
// Price,
// Quatity/
const AddItem = () => {
  const [load, setLoad] = useState(false);
  const user = useAuthState(auth);
  console.log(user[0].email);
  const handleAddItem = (e) => {
    e.preventDefault();

    const data = {
      Name: e.target.name.value,
      IMG: e.target.image.value,
      Manufacturer: e.target.Manufacturer.value,
      Production: e.target.Production.value,
      Assembly: e.target.Assembly.value,
      Class: e.target.Class.value,
      Engine: e.target.Engine.value,
      Power: e.target.Power.value,
      Transmission: e.target.Transmission.value,
      Brakes: e.target.Brakes.value,
      Price: e.target.Price.value,
      Quatity: e.target.Quatity.value,
      Torque: e.target.Torque.value,
      Weight: e.target.Weight.value,
      email: user[0]?.email,
    };
    console.log("data", data);
    const url = "https://warehouse-server-render.onrender.com/inventory";
    fetch(url, {
      method: "POST",
      headers: {
        // authorization: `${user[0].email} Bearer${localStorage.getItem(
        //   "accessToken"
        // )}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoad(!load);
        toast.success("added item success");
        e.target.reset();
      });
  };

  return (
    <div className="p-8 rounded border border-gray-200">
      <h1 className="font-medium text-3xl">Add Invntory</h1>
      <p className="text-gray-600 mt-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        dolorem vel cupiditate laudantium dicta.
      </p>
      <form onSubmit={handleAddItem}>
        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          {" "}
          <div>
            <label
              htmlFor="name"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter Bike name"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Image
            </label>{" "}
            <input
              type="text"
              name="IMG"
              id="image"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="paste image link"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="Manufacturer"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Manufacturer
            </label>{" "}
            <input
              type="text"
              name="Manufacturer"
              id="Manufacturer"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="(ex. Manufacturer)"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="Production"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Production
            </label>{" "}
            <input
              type="text"
              name="Production"
              id="Production"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="year of production"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="Assembly"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Assembly
            </label>{" "}
            <input
              type="text"
              name="Assembly"
              id="Assembly"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="factory/country of origin"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="Class"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Bike Class
            </label>{" "}
            <input
              type="text"
              name="Class"
              id="Class"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Standard/Sports"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="Engine"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Engine
            </label>{" "}
            <input
              type="text"
              name="Engine"
              id="Engine"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Engine"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="Power"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Power
            </label>{" "}
            <input
              type="text"
              name="Power"
              id="Power"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Torque Power"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="Brakes"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Brakes
            </label>{" "}
            <input
              type="text"
              name="Brakes"
              id="Brakes"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Brakes"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="Price"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Price
            </label>{" "}
            <input
              type="text"
              name="Price"
              id="Price"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Negotiable"
              value="Negotiable"
              readOnly
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="Transmission"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Transmission
            </label>{" "}
            <input
              type="text"
              name="Transmission"
              id="Transmission"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Transmission"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="Quantity"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Quantity
            </label>{" "}
            <input
              type="number"
              min="1"
              max="10"
              name="Quatity"
              id="Quantity"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Quantity"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="Transmission"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Torque
            </label>{" "}
            <input
              type="text"
              name="Torque"
              id="Torque"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Torque"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="Weight"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Weight
            </label>{" "}
            <input
              type="text"
              name="Weight"
              id="Weight"
              required
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Weight"
            />{" "}
          </div>{" "}
        </div>{" "}
        <div className="space-x-4 mt-8">
          {" "}
          {/* <label
            htmlFor=""
            className="text-sm text-gray-700 block mb-1 font-medium"
          >
            Update Stock Information
          </label>{" "} */}
          <input
            type="submit"
            name="update"
            id="submit"
            className="border  bg-blue-500 text-white rounded  border-gray-200 py-2 px-4 block focus:ring-blue-500 focus:border-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 w-50 mx-auto"
            placeholder="Update"
          />{" "}
          {/* <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
          >
            Save
          </button> */}
          {/* Secondary  */}
          {/* <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
            Cancel
          </button>{" "} */}
        </div>
      </form>
    </div>
  );
};

export default AddItem;
