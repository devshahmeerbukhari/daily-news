import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

function App() {
  const [currentMode, setCurrentMode] = useState("Enable Dark Mode");
  const [mode, updateMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      updateMode("dark");
      setCurrentMode("Enable Light Mode");
      document.body.style.backgroundColor = "black";
    } else {
      updateMode("light");
      setCurrentMode("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} currentMode={currentMode} />
      <Routes>
        <Route exact path="/" element={<News key='general' mode={mode} pageSize={6} country='us' category = 'general'/>}></Route>
        <Route exact path="/business" element={<News key='business' mode={mode} pageSize={6} country='us' category = 'business'/>}></Route>
        <Route exact path="/entertainment" element={<News key='entertainment' mode={mode} pageSize={6} country='us' category = 'entertainment'/>}></Route>
        <Route exact path="/health" element={<News key='health' mode={mode} pageSize={6} country='us' category = 'health'/>}></Route>
        <Route exact path="/science" element={<News key='science' mode={mode} pageSize={6} country='us' category = 'science'/>}></Route>
        <Route exact path="/sports" element={<News key='sports' mode={mode} pageSize={6} country='us' category = 'sports'/>}></Route>
        <Route exact path="/technology" element={<News key='technology' mode={mode} pageSize={6} country='us' category = 'technology'/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
