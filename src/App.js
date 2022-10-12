import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import "./App.css";
import Nav from "./components/Pages/Shared/Nav/Nav";
import SignUp from "./components/Pages/Shared/SignUp/SignUp";
import Footer from "./components/Pages/Shared/Footer/Footer";
import LogIn from "./components/Pages/Shared/LogIn/LogIn";
import Blog from "./components/Pages/Blog/Blog";
import Inventory from "./components/Pages/Inventory/Inventory";
import Itemdetails from "./components/Pages/ItemDetails/Itemdetails";
import AddItem from "./components/Pages/ItemAdd/AddItem";
import NotFound from "./components/Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold underline">Welcome to React Router!</h1> */}

      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:itemid" element={<Itemdetails />} />

        <Route path="/additem" element={<AddItem />} />
        {/* <Route path="/additem" element={<AddItem />} /> */}
        <Route path="/Blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
