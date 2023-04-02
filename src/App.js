import './App.css';
import Button from 'react-bootstrap/Button';
import HeaderNavigation from './Components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from './Components/FooterNavigation/FooterNavigation';
import Table from './Components/Table/Table';
import { Route,Routes } from 'react-router-dom';
import PageTwo from './Components/PageTwo/PageTwo';
import HeaderTwo from './Components/HeaderTwo/HeaderTwo';



function App() {
  return (
    <div >
  <HeaderNavigation/>
  <HeaderTwo/>
  <br/><br/>
  {/* <Table/> */}
  <br/><br/>
{/* <FooterNavigation/> */}

{/* <div>Need to route the page  */}
{/* <Routes>
      <Route path='*' element={<Navigate to={'/home'}/>} key={'home'}/>
      <Route path={'/home'} element={<Home/>} key={'home'}/>
      <Route path={'/home'} element={<Home/>} key={'home'}/>
</Routes> */}
{/* </div> */}


    </div>

   );
}

export default App;
