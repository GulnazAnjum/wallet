import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Token from "./Components/Tokens/Token"
import NFts from "./Components/Tokens/NFts"
import TokensNft from "./Components/Tokens/TokensNft";
import TestHome from "./Components/Six-Folder/TestHome";



function App() {
  return (
    <div className="App">
     
      <TestHome />
   
    <BrowserRouter>
        <TokensNft />
        <Routes>
        
          <Route  path="/Token" element={<Token/>} />
          <Route exact path="/NFTS" element={<NFts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
