import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Routing } from "../Tokens/Routing";
import Buy from "./Page/Buy";
import Exchange from "./Page/Exchange";
import Recive from "./Page/Recive";
import {NewSend} from "./Page/NewSend";
import Swap from "./Page/Swap";
import TestPage from "./TestPage";
// import TokensNft from "../Tokens/TokensNft";

const TestHome = () => {
  return (
    <div>
    {/* <TokensNft /> */}
      <BrowserRouter>
      {/* <Routing /> */}
      
        <Routes>
       
          <Route  path="/send" element={<NewSend />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/Receive" element={<Recive />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/" element={<TestPage />} />

        </Routes>
      </BrowserRouter>
     
    </div>
  );
};
export default TestHome;
