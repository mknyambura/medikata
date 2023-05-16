import logo from './Splash Screen.svg';
import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";


import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register'
import Page1 from './components/Questions/Page1';


function App() {
  return (
    <div className='App'>
      {/* <img 
        src={logo}
        className='w-full'
      /> */}
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/page1' element={<Page1/>}/>
      </Routes>
    </div>
  )
}

export default App

