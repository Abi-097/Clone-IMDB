import React from "react";
import "./Movies.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faStar,faBookmark} from "@fortawesome/free-solid-svg-icons";
import StarRate from "../Common/RatingStar/StarRate";
import { useNavigate } from "react-router-dom";



export default function Movies({data}){
  
  const navigate = useNavigate();
    return(
        <>
        {/* <---- keep for a while out */}
          
{/* row1 */}
        <div className="card">
          <div className="flexTable">
          {/* <img src={data.thumbnail}/> */}
          <div className="columnA"><img src={data.thumbnail} width="60" height="60"/></div>  
          {/* NIL <div className="columnF">2</div> */}
          {/* {data.rank} &nbsp; {data.title} */}
          <div className="columnB"><div onClick={()=> {navigate("/movies/",{state: data.id})}}>{data.rank} &nbsp;<span className='li'>{data.title}</span> ({data.year})</div></div>
          {/* {data.rating} */}
        <div className="columnC"><FontAwesomeIcon icon={faStar} style={{color: "#e7d513",}}/>&nbsp;{data.rating}  </div>
          <div className="columnD"> <StarRate/></div>
          <div className="columnE"><FontAwesomeIcon icon={faBookmark} /></div>
        </div>
        </div>
    
        </>
   
    )
}