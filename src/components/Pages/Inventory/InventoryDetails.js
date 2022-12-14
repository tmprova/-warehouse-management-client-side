import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { isHtmlElement } from "react-router-dom/dist/dom";

const InventoryDetails = ({ item, load, setLoad }) => {
  // console.log(item);
  const { _id, Name, IMG, Quatity, Transmission } = item;

  const navigate = useNavigate();

  const navigateToItemDetails = (_id) => {
    navigate(`/inventory/${_id}`);
  };

  const handleDelete = (id) => {
    // console.log(id);
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://warehouse-server-render.onrender.com/inventoryDetails/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setLoad(!load);
          toast.success("succesfully deleted");
        });
    }
  };

  return (
    <div className="w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer m-10">
      <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center">
        <img
          src={IMG}
          alt=""
          className="object-cover h-full w-full rounded border border-radius-2"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-600 font-medium">{Name}</h1>
        </div>
        <p className="text-gray-400 text-sm my-1">
          {Quatity ? Quatity : "Out of Stock"}
        </p>
        <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium">
          {Transmission}
        </span>
      </div>
      <div className="flex justify-around">
        <button
          onClick={() => navigateToItemDetails(_id)}
          className="inline-flex items-center justify-center w-full h-12 px-6 m-1 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-green-900 focus:shadow-outline focus:outline-none"
        >
          Detail View
        </button>

        <button
          onClick={() => handleDelete(item._id)}
          className="inline-flex items-center justify-center w-full h-12 px-6 m-1 font-medium tracking-wide text-white transition duration-200 bg-red-600 rounded shadow-md hover:bg-red-900 focus:shadow-outline focus:outline-none"
        >
          delete
        </button>
      </div>

      <div>
        {/* <Link
          to="/additem"
          className="inline-flex items-center justify-center w-full h-12 px-6 mt-2 font-medium tracking-wide text-white transition duration-200 bg-blue-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
        >
          Add Item
        </Link> */}
      </div>
    </div>
  );
};

export default InventoryDetails;
