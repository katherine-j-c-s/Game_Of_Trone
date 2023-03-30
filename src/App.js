import './App.css';
import {Route, Routes} from 'react-router-dom'
import CreateHouse from './Component/CreateHouse/CreateHouse';
import Houses from './Component/Houses/Houses';
import HousesDetail from './Component/HousesDetail/HousesDetail';
import Nav from './Component/Nav/Nav';

function App() {
  return (
    <div>
    <Nav/>
    <Routes>
      <Route path={'/'} element={<Houses/>}></Route>
      <Route path={'/houses/:houseId'} element={<HousesDetail/>}/>
      <Route path={'/house/create'} element={<CreateHouse/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
