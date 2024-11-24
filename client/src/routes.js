import React from "react";
import { Home, Game, Ranking } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router";
import ProtectedRoute from "./protectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<ProtectedRoute element={<Game />} />} />
        <Route path="/ranking" element={<ProtectedRoute element={<Ranking />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
