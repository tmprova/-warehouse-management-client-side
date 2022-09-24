import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Itemdetails = () => {
  const { itemid } = useParams();
  // console.log(params);
  const [items, setItems] = useState({});

  // useEffect(() => {
  //   const url = `InventoryData${itemid}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, [itemid]);

  return <div>name:{itemid}</div>;
};

export default Itemdetails;
