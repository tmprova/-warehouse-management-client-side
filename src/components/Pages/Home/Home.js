import React from "react";
import Inventory from "../Inventory/Inventory";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Header></Header>
      <Inventory></Inventory>
    </div>
  );
};

export default Home;
