import React from "react";
import { Home, Game, Ranking } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
