import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./style/reset.css";
import "./style/default.style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About";
import PageError from "./pages/Page.error.jsx";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Home />}></Route>
        <Route path="*" element={<PageError />}></Route>
      </Routes>
    </>
  );
}

export default App;
