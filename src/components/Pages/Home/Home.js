import React from "react";
// import Inventory from "../Inventory/Inventory";
import Header from "./Header/Header";
import HomeStoreage from "./HomeStore/HomeStoreage";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Header></Header>
      {/* <Inventory></Inventory> */}
      <HomeStoreage></HomeStoreage>
    </div>
  );
};

export default Home;
