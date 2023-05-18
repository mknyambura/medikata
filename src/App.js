import logo from './Splash Screen.svg';
import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";


import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register'
import Page1 from './components/Questions/Page1';
import Page2 from './components/Questions/Page2';
import Page3 from './components/Questions/Page3';
import Home from './components/Home/Home';
import Explore from './components/Explore/MostPopular';
import Categories from './components/Categories/Categories';


function App() {
  return (
    <div className='App bg-[#07362E]'>
      {/* <img 
        src={logo}
        className='w-full'
      /> */}
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/page3' element={<Page3/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/mostPopular' element={<Explore/>}/>
        <Route path='/categories' element={<Categories/>}/>
      </Routes>
    </div>
  )
}

export default App

