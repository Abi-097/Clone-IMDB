import React from "react";
import './HeaderTwo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faShareNodes } from "@fortawesome/free-solid-svg-icons";
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
  <div class="btn btn-dark"><FontAwesomeIcon icon={faSearch} size="lg" style={{color: "#ffffff",}}/> <b>All topics</b></div>
  <div class="btn btn-dark rounded-circle"><FontAwesomeIcon icon={faShareNodes} /></div>
</div>

        </div>
        
    )
}