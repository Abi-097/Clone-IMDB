import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Dropdown} from 'react-bootstrap';
import './HeaderNavigation.css'

function HeaderNavigation() {
        return (
         <div>
      <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <button type="button" class="btn btn-dark p-2">Menu</button>
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
          </div>
                <Nav className="ml-auto">
                <button type="button" class="btn btn-dark p-2">Watchlist</button>
                <button type="button" class="btn btn-dark p-2">SignIn</button>
               <div>
               <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic ">
              EN
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
               </div> 
                  {/* <Nav.Link href="#home">Home</Nav.Link> */}
                  {/* <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
              </Container>
            </Navbar>
         </div>
        );
      }
  export default HeaderNavigation;
  