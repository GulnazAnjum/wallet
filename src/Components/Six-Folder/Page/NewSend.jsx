import React from "react";
import {Link} from "react-router-dom";
import {Form} from 'react-bootstrap'
import "./Navigat.css"


export const NewSend=()=>{
    return(
      <div>
        <div className="Send-Compon">
        
        <Link to="/" ><i id="content-icon-01" className="fas fa-arrow-left Send-Icon "></i></Link>
        <input
          type="text"
          placeholder="Search-Send "
          style={{ color: "white" }}
        />
      </div>
<div>
  <input className="Main"  type="text" placeholder="Recipient Address">

  </input>
</div>

<fieldset className="border p-2 solid black ">
   <legend>Your Legend</legend>
</fieldset>
</div>
    );
};















