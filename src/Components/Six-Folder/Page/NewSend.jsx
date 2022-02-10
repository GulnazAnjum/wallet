import React from "react";
import {Link} from "react-router-dom";
import "./Navigat.css"


export const NewSend=()=>{
    return(
        <div className="Send-Compon">
        
        <Link to="/" ><i id="content-icon-01" className="fas fa-arrow-left Send-Icon "></i></Link>
        <input
          type="text"
          placeholder="Search-Send "
          style={{ color: "white" }}
        />
      </div>
    )
}