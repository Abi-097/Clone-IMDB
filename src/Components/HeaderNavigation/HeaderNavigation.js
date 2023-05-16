import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faImdb} from "@fortawesome/free-brands-svg-icons";
import {faBars,faBookmark} from "@fortawesome/free-solid-svg-icons";


import './HeaderNavigation.css'

function HeaderNavigation() {
        return (
         <div>
      <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home"><FontAwesomeIcon icon={faImdb} size="2xl" style={{color: "#e6e03d",}} /></Navbar.Brand>
                <button type="button" class="btn btn-dark p-2 d-flex"><FontAwesomeIcon className='faBars' icon={faBars}/>&nbsp;Menu</button>
      <div class="input-group">
            <span class="input-group-text" id="basic-addon1">
            <Dropdown>
            <Dropdown.Toggle className='DropdownTextBox' variant="light" id="dropdown-basic">
              ALL
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            </span>
            <input type="text" class="form-control" placeholder="IMDB Search" aria-label="Username" aria-describedby="basic-addon1"/>
            <button type="button" class="btn"><FontAwesomeIcon icon={faImdb} size="2xl" style={{color: "#ffffff",}} /></button>
          </div>
                <Nav className="ml-auto">
                <button type="button" class="btn btn-dark p-2 d-flex"><FontAwesomeIcon className='faBars' icon={faBookmark}/>&nbsp;Watchlist</button>
                <button type="button" class="btn btn-dark p-2">SignIn</button>
               <div>
               <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              EN
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
               </div> 
                </Nav>
              </Container>
            </Navbar>
         </div>
        );
      }
  export default HeaderNavigation;
  