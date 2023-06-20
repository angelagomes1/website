import './App.css';
import Result from './pages/Result';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Dialog } from '@mui/material';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/main' element={<MainPage/>}/>
      </Routes>
    </Router>
  )
};
export default App;
