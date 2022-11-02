import React from "react";
import { toast } from "react-toastify";

const ItemTable = (params) => {
  const { item, load, setLoad } = params;

  const handleDelete = (id) => {
    // console.log(item);
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://warehouse-server-render.onrender.com/addedItems/${id}`;
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
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img
              className="rounded-full"
              src={item.IMG}
              width="40"
              height="40"
              alt=""
            />
          </div>
        </div>
      </td>
      <th
        scope="row"
        className="px-4 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {item.Name}
      </th>
      <td className="px-4 py-2">{item.Engine}</td>
      <td className="px-4 py-2">{item.Manufacturer}</td>
      <td className="py-6 flex justify-center items-center">{item.Quatity}</td>
      <td className="px-4 py-2 text-right">
        <div className="flex justify-center">
          <button onClick={() => handleDelete(item._id)}>
            <svg
              className="w-8 h-8 hover:text-red-600 rounded-full hover:bg-gray-100 p-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemTable;
