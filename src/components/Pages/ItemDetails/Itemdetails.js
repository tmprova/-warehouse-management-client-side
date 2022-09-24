import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Itemdetails = () => {
  const { productId } = useParams();
  console.log(useParams);
  const [items, setItems] = useState({});

  return <div>name:{productId}</div>;
};

export default Itemdetails;
