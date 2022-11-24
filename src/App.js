import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recettes from "./pages/Recettes";
import Blog from "./pages/Blog";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Recettes />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
