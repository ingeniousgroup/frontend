import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router';
import Signin from './Components/User/signin';

function App() {
  return<>
    <Home/>
    <Routes>
      {/* <Route path='/' element={<Signin/>}/> */}
    </Routes>
   </>
}

export default App;
