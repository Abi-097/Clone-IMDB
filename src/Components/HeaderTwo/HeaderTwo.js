import React from "react";
import './HeaderTwo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faShareNodes,faStar,faChartLine } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Common/ShareLogo/Logo";

export default function HeaderTwo(){
    return(
        <div className="Main">
       <div className="d-flex justify-content-end bd-highlight secMain">
  <div class="p-2 bd-highlight"><a href="www.facebook.com" className="WhiteLink" >Cast & crew</a></div>
  <div class="p-2 bd-highlight">.</div>
  <div class="p-2 bd-highlight"><a href="www.facebook.com" className="WhiteLink" >User reviews</a></div>
  <div class="p-2 bd-highlight">.</div>
  <div class="p-2 bd-highlight"><a href="www.facebook.com" className="WhiteLink" >Trivia</a></div>
  <div class="p-2 bd-highlight"><a href="www.facebook.com" className="WhiteLink" >IMDbPro</a></div>
  <div className="btn btn-dark ButtonHeader2"><FontAwesomeIcon icon={faSearch} size="lg" style={{color: "#ffffff",}}/> <b>All topics</b></div>
  <div className="btn btn-dark rounded-circle ButtonHeader2"><FontAwesomeIcon icon={faShareNodes} /></div>
</div>

{/* Naming */}

<div className="containerName">
      <div className="leftName">
       <h1>The Shawshank Redemption</h1>
       <p>1994 . R . 2h 22m</p>
       <div>
    </div>
      </div>
      <div>
        <div className="rightTopB">
        <div>
        <div class="d-flex justify-content-between Name">
    <div>IMDb RATING</div>
    <div>YOUR RATING</div>
    <div>POPULARITY</div>
    </div>
        </div>
        </div>
        <div className="rightDownB">
        <div>
        <div class="d-flex justify-content-between Name">
    <div><div className="btn btn-dark d-flex ButtonHeader2 "><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#f7fb09",}} />&nbsp;<b>9.3</b>/10</div></div>
    <div><div className="btn btn-dark d-flex ButtonHeader2 Color"><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#5f97f7",}} />&nbsp;<b>Rate</b></div></div>
    <div><div className="btn btn-dark d-flex ButtonHeader2 "><FontAwesomeIcon icon={faChartLine} size="xl" style={{color: "#e11919",}} />&nbsp;<b>9.3</b>/10</div></div>
    </div>
    </div>
        </div>
      </div>
    </div>
    
        </div>

    )
}