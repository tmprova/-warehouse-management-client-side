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

function App() {
  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold underline">Welcome to React Router!</h1> */}

      <Nav></Nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />

        <Route path="/Blog" element={<Blog />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
