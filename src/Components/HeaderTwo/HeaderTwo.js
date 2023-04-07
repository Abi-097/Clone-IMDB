// import React from "react";
import './HeaderTwo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faShareNodes,faStar,faChartLine,faVideo, faImages,fa8,faPlus } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from 'react-player';
import Logo from "../Common/ShareLogo/Logo";
import Dropdown from 'react-bootstrap/Dropdown';
import { React,useEffect,useState } from "react";
import axios from "axios";



    


export default function HeaderTwo(){
    const [movieA,setMovieA] = useState([]);

     useEffect(()=>{
      getMovies();
      
  },[])
  const getMovies = () => {
    axios({
        method: 'get',
        url: 'https://imdb-top-100-movies.p.rapidapi.com/top1',
        headers: {
          "X-RapidAPI-Key": "c3d40522d4msh48f90e6986a0c8cp15f594jsn646694ad698a"
        }
      })
      .then(function (response) {
        setMovieA(response.data);
        console.log(response.data);
      }).catch(function(error){
        console.log(error);
      });
    }

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
       <p><a href="www.facebook.com" className="WhiteLink" >{movieA.year}</a> . <a href="www.facebook.com" className="WhiteLink" >R</a> . 2h 22m</p>
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
    <div><div className="btn btn-dark d-flex ButtonHeader2 "><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#f7fb09",}} />&nbsp;<b>{movieA.rating}</b>/10</div></div>
    <div><div className="btn btn-dark d-flex ButtonHeader2 Color"><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#5f97f7",}} />&nbsp;<b>Rate</b></div></div>
    <div><div className="btn btn-dark d-flex ButtonHeader2 "><FontAwesomeIcon icon={faChartLine} size="xl" style={{color: "#e11919",}} />&nbsp;<b>9.3</b>/10</div></div>
    </div>
    </div>
        </div>
      </div>
    </div>

    <div class="containerYoutube">
  <div class="left-boxYoutube">
  <img src={movieA.image} alt="Girl in a jacket" width="290px" height="450px"/>
  </div>
  <div class="leftB-boxYoutube">
  <ReactPlayer
   width='750px'
    height='450px'
url={movieA.trailer}
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
  <div className="btn btn-dark rounded-pill ButtonHeader2 ButtonHeader3"><b>Drama</b></div>

  <div class="d-flex bd-highlight coreContain">
  <div class="p-2 flex-grow-1 bd-highlight fw-normal">
  Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, <br/>redemption through basic compassion.
  <hr/>
  Director <a href="www.facebook.com" className="BlueLink">{movieA.director} </a>
  <hr/>

  {/*  */}
 
  {/*{movieA.writers.map((value,index)=>( <span key={index}>{value.split('(')[0]+"."} </span>  */}
  Writers <a href="www.facebook.com" className="BlueLink"> {movieA.writers?.map((value,index)=>( 
    <span key={index}>{value.split('(')[0]+"."} </span>
  ))}
  </a>
 
  <hr/>
  Stars <a href="www.facebook.com" className="BlueLink">Tim Robbins</a> . <a href="www.facebook.com" className="BlueLink">Morgan Freeman</a> .  <a href="www.facebook.com" className="BlueLink">Bob Gunton</a> 
   
  <hr/>
  </div>

  <div class="p-2 bd-highlight coreContain1">
  <Dropdown>
      <Dropdown.Toggle className="btn btn-secondary dropdown-toggle ButtonHeader2 ButtonHeader4" id="dropdown-basic">
      <FontAwesomeIcon icon={faPlus} size="2xl" style={{color: "#ffffff",}} /><b> &nbsp;Add to watch list</b> <br/>&nbsp;Added by 1.43M users
        </Dropdown.Toggle>
        </Dropdown>
        <div className="d-flex mt-3 mb-2">
        <a href="www.facebook.com" className=" BlueLink"><b>10.7K</b>&nbsp;User reviews</a>&nbsp;&nbsp;<a href="www.facebook.com" className=" d-flex BlueLink"> <b>169</b>&nbsp;Critic reviews</a> 
        </div>
        <a href="www.facebook.com" className=" BlueLink"><FontAwesomeIcon icon={fa8} style={{color: "#6febbc",}}/>&nbsp; Meta score</a>
        


  </div>
  
</div>
        </div>

    )
}
