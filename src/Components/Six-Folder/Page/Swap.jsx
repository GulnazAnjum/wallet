import React from "react";
import { Link } from "react-router-dom";
const Swap = () => {
  return (
    <div>
      <div>
        <h1>this is swap components</h1>
        <p>you pay</p>
        <p>0</p>
        <p>BNB</p>
        <p>Balance:0BNB</p>
      </div>
      <div>
        <p>you Get</p>
        <p>0</p>
        <p>TWT</p>
        <p>Balance:0TWT</p>
      </div>
      <Link to="/Exchange" className="Exchange-Link">
        Exchange
      </Link>
    </div>
  );
};
export default Swap;
