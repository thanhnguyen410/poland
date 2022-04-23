import * as React from "react";
import "./assets/css/global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </Router>
);
