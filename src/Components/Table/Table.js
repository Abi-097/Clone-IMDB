import Logo from '../Common/ShareLogo/Logo';
import Form from 'react-bootstrap/Form';
import "./Table.css"
import axios from 'axios';
import Movies from '../Movies/Movies';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../FooterNavigation/FooterNavigation'; 


export default function Table(){


   return(
<div>
<HeaderNavigation/>
<div className="app">
    <div class="tableContainer">
      <div class="leftContainer">
      <div className="flex-container">
      {/* this is the part of flex upper left - left*/}
      <div className='wording'>
      <p className='wordingA'>IMDb Charts</p>
      <h3 className='wordingB'>IMDb Top 250 Movies</h3>
      <h6 className='wordingC'>IMDb Top 250 as rated by regular IMDb voters.</h6>
      </div>
      {/* this is the part of flex upper left - right*/}
      <div className="Logo">
      <Logo/>SHARE</div>
    </div>
        <hr/> 
        <div className="headerSelector">
      <div className='showingTitle'><p>Showing 250 Titles</p></div>
     {/* &nbsp; means spacing */}
      <div> Sort By: &nbsp;  
      <select className='Selector'>
      <option value="variable1">Ranking</option>
      <option value="variable2">IMDb Rating</option>
      <option value="variable3">Release Date</option>
      <option value="variable4">Number of Rating</option>
      <option value="variable5">Your rating</option>
    </select>
    </div>
    </div>
    <div className='d-grid'>
<div> {/*  //need to copy of  */}
        {/* {movies.map((values)=>(
            <Movies data={values}/>
            ))} */}
            <Movies/>       {/*<--- the output is coming from this one */}  
</div>  
    </div>

    </div>
      <div class="rightContainer">
      <p class="rightFirst">You Have Seen</p>
      <p class="rightFirstA"><b>0</b>/250 (0%)</p>
      <Form className='firstOther'>
          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check 
                type={type}
                id={`default-${type}`}
                label={`Hide title I've seen`}    // cant able to under line but css given 
              />
            </div>
          ))}
        </Form>
        <hr class="firstOther"/>
      <div>
      <ul className='rightPara'>
      <li className='li'><a className='li' href="www.facebook.com">Box Office</a></li>
      <li className='li'><a className='li' href="www.facebook.com">Most Popular Movies </a></li>  
      <li className='li'><a className='li' href="www.facebook.com">Top 250 Movies </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Most Popular TV Shows </a></li>  
      <li className='li'><a className='li' href="www.facebook.com">Top Rated English Movies  </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Top 250 TV Shows  </a></li>  
      <li className='li'><a className='li' href="www.facebook.com">Top Rated Indian Movies </a></li> 
      <li className='li' ><a className='li' href="www.facebook.com">Lowest Rated Movies</a></li>  
      <hr/>
      <p>Top Rated Movies by Genre</p>
      <li className='li'><a className='li' href="www.facebook.com">Action </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Adventure </a></li>  
      <li className='li'><a className='li' href="www.facebook.com">Animation </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Biography </a></li>  
      <li className='li'><a className='li' href="www.facebook.com">Comedy </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Crime </a></li>  
      <li className='li'><a className='li' href="www.facebook.com">Drama </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Family </a></li>  
      <li className='li'><a className='li' href="www.facebook.com">Fantasy </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Film-Noir </a></li>  
      <li className='li'><a className='li' href="www.facebook.com">History </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Horror </a></li>  
      <li className='li'><a className='li' href="www.facebook.com">Music </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Musical </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Romance </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Sci-Fi </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Sport </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Thriller </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">War </a></li> 
      <li className='li'><a className='li' href="www.facebook.com">Western </a></li> 
    </ul>
      </div>
      </div>
    </div>
</div>
<FooterNavigation/>
</div>

   )
    
}