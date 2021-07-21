import React from "react";
import About from "./component/about";
import Contact from "./component/contact";
import Navbar from "./component/navbar";
import Project from "./component/project";
import Skills from "./component/skills";
import "./App.css";

function App() {
  return (
    // <div className="bg-gradient-to-r from-green-400 to-blue-500 body-font">
    <div className="text-gray-500 bg-black body-font">
      <Navbar />
      <About />
      <About />
      <About />
      <About />
    </div>
  );
}

export default App;
