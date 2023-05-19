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
import StressRelief from './components/Categories/Category/StressRelief';
import Sleeping from './components/Categories/Category/Sleeping';
import Disappointed from './components/Categories/Category/Disappointed';
import Confused from './components/Categories/Category/Confused';
import Frowning from './components/Categories/Category/Frowning';
import Grimming from './components/Categories/Category/Grimming';
import Distraught from './components/Categories/Category/Distraught';
import Grimicing from './components/Categories/Category/Grimicing';
import Comfounded from './components/Categories/Category/Comfounded';
import Relieved from './components/Categories/Category/Relieved'
import Persevering from './components/Categories/Category/Persevering';
import Worried from './components/Categories/Category/Worried';
import Crying from './components/Categories/Category/Crying';
import Listening from './components/Listening/Listening';
import Profile from './components/Profile/Profile';
import Settings from './components/ManageSettings/ManageSettings'
import AccountInformation from './components/AccountInformation/AccountInformation'
import Notifications from './components/Notifications/Notifications';
import DailyReminders from './components/DailyReminders/DailyReminders';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
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
        <Route path='/stressRelief' element={<StressRelief/>}/>
        <Route path='/sleeping' element={<Sleeping/>}/>
        <Route path='/disappointed' element={<Disappointed/>}/>
        <Route path='/confused' element={<Confused/>}/>
        <Route path='/frowning' element={<Frowning/>}/>
        <Route path='/grimming' element={<Grimming/>}/>
        <Route path='/distraught' element={<Distraught/>}/>
        <Route path='/grimicing' element={<Grimicing/>}/>
        <Route path='/comfounded' element={<Comfounded/>}/>
        <Route path='/relieved' element={<Relieved/>}/>
        <Route path='/persevering' element={<Persevering/>}/>
        <Route path='/worried' element={<Worried/>}/>
        <Route path='/crying' element={<Crying/>}/>
        <Route path='/listening' element={<Listening/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/accountInformation' element={<AccountInformation/>}/>
        <Route path='/notifications' element={<Notifications/>}/>
        <Route path='/dailyReminders' element={<DailyReminders/>}/>
        <Route path='/privacyPolicy' element={<PrivacyPolicy/>}/>
      </Routes>
    </div>
  )
}

export default App

