import axios from "axios";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemAddToStock = ({ quantityUpgrade }) => {
  // const { itemid } = useParams();
  // console.log(itemid);
  // console.log(params);
  // const quantityData = params.Quatity;
  // console.log(getQuantity);
  const quantityRef = useRef("");

  // const quantityUpgrade = async (e) => {
  //   e.preventDefault();
  //   const quantity = quantityRef.current.value;
  //   console.log("quantity", quantity);
  //   if (quantity >= 1) {
  //     const updatedQuantity = parseInt(quantity) + parseInt(quantityData);
  //     const url = `http://localhost:5000/inventory/${itemid}`;
  //     const { data } = await axios.put(url, { updatedQuantity });
  //     // if (data.modifiedCount === 1 || data.matchedCount === 1) {}
  //     toast.success("Successfully Updated");
  //   }
  //   e.target.reset();
  // };

  return (
    <div className="p-8 rounded border border-gray-200">
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
              ref={quantityRef}
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
    </div>
  );
};

export default ItemAddToStock;
