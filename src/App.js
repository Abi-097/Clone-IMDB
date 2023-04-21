import './App.css';
import Table from './Components/Table/Table';
import {Route,Routes,Navigate} from 'react-router-dom';
import HeaderTwo from './Components/HeaderTwo/HeaderTwo';


function App() {
  return (
    <div>
 <Routes>

 <Route path='*' element={<Navigate to={'/home'}/>} key={'home'}/>
      <Route path={'/home'} element={<Table/>} key={'home'}/>
      <Route path={"/movies/"} Component={HeaderTwo} key={'header'} /> 
</Routes>
    </div>
   );
}

export default App;
