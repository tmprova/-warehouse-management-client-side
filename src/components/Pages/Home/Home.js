import React from "react";
// import Inventory from "../Inventory/Inventory";
import Header from "./Header/Header";
import HomeAnime from "./HomeAnime";
import HomeStats from "./HomeStats";
import HomeStoreage from "./HomeStore/HomeStoreage";

const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* <Inventory></Inventory> */}
      <HomeStoreage></HomeStoreage>
      <HomeAnime></HomeAnime>
      <HomeStats></HomeStats>
    </div>
  );
};

export default Home;
