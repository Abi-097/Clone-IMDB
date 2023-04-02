import React from "react";
import "./Movies.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faStar,faBookmark} from "@fortawesome/free-solid-svg-icons";
import StarRate from "../Common/RatingStar/StarRate";


export default function Movies(){
    return(
        <>
 <div><div className="headFlexTable">
          <div className="columnA"><img></img></div>
          <div className="columnB columnX ">Rank & Title</div>
          <div className="columnC columnX">IMDb Rating</div>
          <div className="columnD columnX">Your Rating</div>
          <div className="columnE"></div>
        </div></div>
{/* row1 */}
        <div className="card">
          <div className="flexTable">
          {/* <img src={data.thumbnail}/> */}
          <div className="columnA"><img src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg" alt="Girl in a jacket"/></div>  
          {/* NIL <div className="columnF">2</div> */}
          {/* {data.rank} &nbsp; {data.title} */}
          <div className="columnB">TITLE RANK</div>
          {/* {data.rating} */}
          <div className="columnC"><FontAwesomeIcon icon={faStar} style={{color: "#e7d513",}}/> 9.3   </div>
          <div className="columnD"> <StarRate/></div>
          <div className="columnE"><FontAwesomeIcon icon={faBookmark} /></div>
        </div>
        </div>
        {/* row2 */}
        <div className="card">
          <div className="flexTable">
          {/* <img src={data.thumbnail}/> */}
          <div className="columnA"><img src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg" alt="Girl in a jacket"/></div>  
          {/* NIL <div className="columnF">2</div> */}
          {/* {data.rank} &nbsp; {data.title} */}
          <div className="columnB">TITLE RANK</div>
          {/* {data.rating} */}
          <div className="columnC"><FontAwesomeIcon icon={faStar} style={{color: "#e7d513",}}/> 9.3   </div>
          <div className="columnD"> <StarRate/></div>
          <div className="columnE"><FontAwesomeIcon icon={faBookmark} /></div>
        </div>
        </div> 
        <div className="card">
          <div className="flexTable">
          {/* <img src={data.thumbnail}/> */}
          <div className="columnA"><img src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg" alt="Girl in a jacket"/></div>  
          {/* NIL <div className="columnF">2</div> */}
          {/* {data.rank} &nbsp; {data.title} */}
          <div className="columnB">TITLE RANK</div>
          {/* {data.rating} */}
          <div className="columnC"><FontAwesomeIcon icon={faStar} style={{color: "#e7d513",}}/> 9.3   </div>
          <div className="columnD"> <StarRate/></div>
          <div className="columnE"><FontAwesomeIcon icon={faBookmark} /></div>
        </div>
        </div>
        </>
   
    )
}