import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
