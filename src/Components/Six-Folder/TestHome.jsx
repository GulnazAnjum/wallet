import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Routing } from "../Tokens/Routing";
import Buy from "./Page/Buy";
import Exchange from "./Page/Exchange";
import Recive from "./Page/Recive";
import Send from "./Page/Send";
import Swap from "./Page/Swap";
import TestPage from "./TestPage";
const TestHome = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/Send" element={<Send />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/Receive" element={<Recive />} />
          <Route path="/swap" element={<Swap />} />
        </Routes>
      </BrowserRouter>
      <Routing />
    </div>
  );
};
export default TestHome;
