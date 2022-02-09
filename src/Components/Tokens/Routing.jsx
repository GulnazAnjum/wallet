import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NFTs from "./NFTs";
import Token from "./Token";
import TokensNft from "./TokensNft";

export const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <TokensNft />
        <Routes>
          <Route path="/Token" element={<Token />} />
          <Route path="/NFTS" element={<NFTs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
