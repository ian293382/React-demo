import React from "react";
import App from "./App";
import About from "./About";
import { Routes,Route, Link } from 'react-router-dom'; 

const Router = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to='/'><div style={{ cursor: "pointer", fontSize: 20 }}>Index </div></Link>
        <Link to='/about'><div style={{ cursor: "pointer", fontSize: 20 }}>About</div></Link>
      </div>
    <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/about' element={<About />} />
    </Routes>
    </div>
  );
};

export default Router;