import React, { useState } from 'react'
import { EyeIcon, UserIcon, UsersIcon } from '@heroicons/react/outline'
import { EyeOffIcon } from '@heroicons/react/outline'

import { AiOutlineMail, AiTwotoneMail } from "react-icons/ai"
import { CiUser } from "react-icons/ci"
import { GiPadlock } from "react-icons/gi";
import { Link } from 'react-router-dom'


function Register() {
  const [emailValue, setEmailValue] = useState({email: ""});
  const [passwordValue, setPasswordValue] = useState({password: "", showPassword: false});
  
  const handleEmailValue = (e) => {
    const { name, value } = e.target;
    setEmailValue({
      ...emailValue,
      [name]: value,
    });
  };
  const handlePasswordChange = (prop) => (event) => {
    setPasswordValue({ 
      ...passwordValue, 
      [prop]: event.target.value, 
    });
  };

  const handleClickShowPassword = () => {
    // setCaretColor("transparent");
    setPasswordValue((prevState) => !prevState);
  };
  return (
    <div className='flex flex-grid bg-[#07362E] h-screen mx-auto'>
      <div className='flex flex-col ml-auto mr-auto justify-center h-full items-center'>
        {/* <div> */}
          <h1 className='float-left m-2 text-white text-6xl font-bold'>Register</h1>
          <p className='text-[#D8E2E0] m-2 text-2xl'>Sign In now to access lots of exercises and save your music</p>
        {/* </div> */}
        <form className='bg-[#075044] shadow-md rounded-3xl mb-4 w-full relative' style={{width: "100%"}}>
          <div className='h-full flex flex-col items-center  rounded-xl my-10 p-2'>
            <div className='flex justify-between w-3/4 items-center bg-[#08352E]  rounded-lg'>
              <Link to='/' className='m-2 items-center mx-auto text-[#08ca5c] '>My Account</Link>
              <button className='px-16 py-2 m-2 bg-[#08ca5c] text-white rounded-lg'>Register</button>
            </div>
            {/* <div className='block'> */}
              {/* <label
                className="block mb-2 text-sm font-medium text-white"
                htmlFor="email"
              >Email</label> */}
              <div  className='w-3/4 flex flex-row items-center mb-2 mt-6 border border-gray-500 rounded-lg' >
              {/* <div className='mb-4'> */}
                <div className='py-3.5 mr-1 px-3 rounded-lg'>
                  <CiUser className='text-white'/>
                </div>
                <input
                  value={emailValue.email}
                  onChange={handleEmailValue}
                  type='text'
                  name='name'
                  placeholder='Full name' 
                  className='w-full focus:ring-0 focus:border-transparent block p-3 text-gray-400 bg-transparent outline-none' />
              </div>
            {/* </div> */}
            {/* <div className='block'> */}
              {/* <label
                className="block mb-2 text-sm font-medium text-white"
                htmlFor="email"
              >Email</label> */}
              <div  className='w-3/4 flex flex-row items-center mb-2 mt-2 border border-gray-500 rounded-lg' >
              {/* <div className='mb-4'> */}
                <div className='py-3.5 mr-1 px-3 rounded-lg'>
                  <AiOutlineMail className='text-white'/>
                </div>
                <input
                  value={emailValue.email}
                  onChange={handleEmailValue}
                  type='text'
                  name='email'
                  placeholder='Enter your email' 
                  className='w-full focus:ring-0 focus:border-transparent block p-3 text-gray-400 bg-transparent outline-none' />
              </div>
            {/* </div> */}
            {/* <div> */}
              {/* <label
                className="block mb-2 text-sm font-medium text-white"
                htmlFor="username"
              >Password</label> */}
              <div className='w-3/4 m-2 relative flex flex-row items-center border border-gray-500 rounded-lg'>
                <div className='py-3.5 mr-1 px-3'>
                  <GiPadlock className='text-white'/>
                </div>
                <input
                  type={passwordValue ? "text" : "password"} 
                  placeholder='Password'
                  className='w-full focus:ring-offset-0 focus:ring-0 focus:border-transparent block p-2.5 border-none text-gray-400 bg-transparent outline-none'
                  onClick={handlePasswordChange("password")}
                  // value={passwordValue.password}
                />
                <button className='absolute right-4'
                  onClick={handleClickShowPassword}
                >
                  {passwordValue ? (
                    <EyeIcon className="h-5 font-extralight"/> 
                  ) : (
                    <EyeOffIcon className="h-5 font-extralight"/>
                  )}
                </button>
              </div>
            {/* </div> */}
            
            {/* <p className="pt-4">Forgot password?</p> */}
            <div className="flex items-center">
                <input type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
            </div>
            <Link to='/page1' className='flex rounded-lg w-full'>
                <button type="submit" className='w-1/2 bg-[#fca728] hover:bg-opacity-80 font-bold text-gray-800 p-3 mt-9 mx-auto items-center align-center rounded-lg'>Continue</button>
            </Link>
           
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register