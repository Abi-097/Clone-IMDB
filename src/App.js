import './App.css';
import Button from 'react-bootstrap/Button';
import HeaderNavigation from './Components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from './Components/FooterNavigation/FooterNavigation';
import Table from './Components/Table/Table';



function App() {
  return (
    <div >
  <HeaderNavigation/>
  <br/><br/>
  <Table/>
  <br/><br/>
<FooterNavigation/>
    </div>
   );
}

export default App;
