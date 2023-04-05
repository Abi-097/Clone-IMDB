import './App.css';
import Table from './Components/Table/Table';
import {BrowserRouter as Router, Route,Routes,Navigate} from 'react-router-dom';
import PageTwo from './Components/PageTwo/PageTwo';



function App() {
  return (
    <div>
 <Router>
 <Routes>

 <Route path='*' element={<Navigate to={'/home'}/>} key={'home'}/>
      <Route path={'/home'} element={<Table/>} key={'home'}/>
      <Route path={'/one'} element={<PageTwo/>} key={'one'}/>
     
</Routes>
 </Router>

    </div>

   );
}

export default App;
