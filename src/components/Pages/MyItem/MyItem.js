import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import ItemTable from "./ItemTable";

const MyItem = () => {
  const [myItems, setMyItems] = useState([]);
  const [load, setLoad] = useState(false);
  const user = useAuthState(auth);
  // console.log(user[0].email);
  // console.log(user);

  useEffect(() => {
    const showItems = async () => {
      const email = user[0]?.email;
      // console.log(email);
      const url = `https://warehouse-server-render.onrender.com/addedItems?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `${email} Bearer ${localStorage.getItem(
            "accessToken"
          )}`,
        },
      });
      setMyItems(data);
      // console.log(data);
    };
    showItems();
  }, [user]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative  shadow-md sm:rounded-lg">
        <div className="p-4">
          <label htmlFor="user id" className="sr-only">
            user id
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-900 text-sm">
              <p className=" text-gray-500">User:</p>
            </div>
            <input
              type="text"
              id="user email"
              value={user[0]?.email}
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  text-center"
              placeholder="user[0]?.email"
              readOnly
              disabled
            />
          </div>
        </div>
        <table className="max-w-xl text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Engine
              </th>
              <th scope="col" className="px-6 py-3">
                Manufacturer
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {myItems.map((item) => (
              <ItemTable
                key={item._id}
                item={item}
                load={load}
                setLoad={setLoad}
              ></ItemTable>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
          <div>{user[0]?.displayName} Added </div>
          <div className="text-sky-600">
            <span>{myItems.length} </span>
          </div>
          <span>Bikes</span>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
