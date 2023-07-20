import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom'
import CreateHouse from './Component/CreateHouse/CreateHouse';
import Houses from './Component/Houses/Houses';
import HousesDetail from './Component/HousesDetail/HousesDetail';
import Nav from './Component/Nav/Nav';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearHouse } from './Redux/Actions/Actions';

function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(()=>{
    if (location.pathname === '/' | location.pathname === '/house/create') {
      dispatch(clearHouse())
    }
  },[location.pathname])
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
