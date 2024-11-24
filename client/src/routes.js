import React from "react";
import { Home } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
