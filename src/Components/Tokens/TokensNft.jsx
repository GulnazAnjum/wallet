import React from "react";
import "./Routing.css";
import { Link } from "react-router-dom";

const TokensNft = () => {
  return (
    <div>
      <Link className="Content-token" target="_self" to="/token">
        {" "}
        Token{" "}
      </Link>
      <Link className="Content-nfts" target="-self" to="/NFTS">
        Nfts
      </Link>
    </div>
  );
};
export default TokensNft;
