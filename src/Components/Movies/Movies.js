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
        <div className="card">
          <div className="flexTable">
          <div className="columnA"><img src={data.thumbnail} width="60" height="60"/></div>  
          <div className="columnB">
          <div onClick={()=> {navigate("/movies/",{state: data.id})}}>{data.rank} &nbsp;<span className='li'>{data.title}</span> ({data.year})</div>
          </div>
        <div className="columnC"><FontAwesomeIcon icon={faStar} style={{color: "#e7d513",}}/>&nbsp;{data.rating}  </div>
          <div className="columnD"> <StarRate/></div>
          <div className="columnE"><FontAwesomeIcon icon={faBookmark} /></div>
        </div>
        </div>
        </>
   
    )
}