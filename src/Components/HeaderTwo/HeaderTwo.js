import React from "react";
import './HeaderTwo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faShareNodes,faStar,faChartLine,faVideo, faImages } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from 'react-player';
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

    <div class="containerYoutube">
  <div class="left-boxYoutube">
  <img src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg" alt="Girl in a jacket" width="290px" height="450px"/>
  </div>
  <div class="leftB-boxYoutube">
  <ReactPlayer
   width='750px'
    height='450px'
  url={"https://www.youtube.com/watch?v=5llXA0RTYIU"}
  config={{
    youtube: {
      playerVars: { showinfo: 1}
    },
    facebook: {
        appId: '12345'
    }
  }}
/>
  </div>
  <div class="right-boxYoutube"> 
    <div class="top-boxYoutube">
    <button type="button" class="btn btn-dark w-100 h-100"><FontAwesomeIcon icon={faVideo} size="xl" style={{color: "#ffffff",}}/><div><b>5 Videos</b></div></button>
    </div>
    
    <div class="bottom-boxYoutube">
        <button type="button" class="btn btn-dark w-100 h-100"><FontAwesomeIcon icon={faImages} size="xl" style={{color: "#ffffff",}} /><div><b>99+ Photos</b></div></button>
    </div>
  </div>
</div>

        </div>

    )
}