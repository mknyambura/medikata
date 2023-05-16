import React, { useState } from 'react'
import { EyeIcon } from '@heroicons/react/outline'
import { EyeOffIcon } from '@heroicons/react/outline'

import { AiTwotoneMail } from "react-icons/ai"
import { GiPadlock } from "react-icons/gi";
import { Link } from 'react-router-dom';


function SignIn() {
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
      <div className='flex flex-col ml-auto mr-auto flex-wrap justify-center h-full items-center'>
        {/* <div> */}
          <h1 className='float-left m-2 text-white text-6xl font-bold'>Sign In</h1>
          <p className='text-[#D8E2E0] m-2 text-2xl'>Sign In now to access your exercises and saved music</p>
        {/* </div> */}
        <form className='bg-[#075044] shadow-md rounded-3xl mb-4 w-full relative' style={{width: "100%"}}>
          <div className='h-full flex flex-col items-center  rounded-xl my-10 p-2'>
            <div className='flex justify-between w-3/4 items-center bg-[#08352E]  rounded-lg'>
              <p className=' px-16 py-2 m-2 bg-[#08ca5c] text-white rounded-lg'>My Account</p>
              <Link to='/register' className='m-2 items-center mx-auto text-[#08ca5c]'>Register</Link>
            </div>
            {/* <div className='block'> */}
              {/* <label
                className="block mb-2 text-sm font-medium text-white"
                htmlFor="email"
              >Email</label> */}
              <div  className='w-3/4 flex flex-row items-center mb-2 mt-6 border border-gray-500 rounded-lg' >
              {/* <div className='mb-4'> */}
                <div className='py-3.5 mr-1 px-3 rounded-lg'>
                  <AiTwotoneMail className='text-white'/>
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
            
            <p className="pt-4 text-white font-bold">Forgot password?</p>
            <button type="submit" className='w-1/2 bg-[#fca728] hover:bg-opacity-80 font-bold text-gray-800 p-3 mt-9 rounded'>Sign In</button>
           
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn