import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Welcome to React Router!</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
