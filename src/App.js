import React, { useState, useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Addcar from "./Components/Addcar";
function App() {
  return (
    <div>
      <Header />
      <Addcar />
      <Footer />
    </div>
  );
}

export default App;
