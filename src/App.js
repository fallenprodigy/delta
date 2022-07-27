import React from "react";
import GlobalStyle from "./GlobalStyles";

// pages
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Pricing from "./pages/Pricing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
