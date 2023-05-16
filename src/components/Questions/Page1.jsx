import React from 'react'
import { Link } from 'react-router-dom'

function Page1() {
  return (
    <div className='bg-#[07362E] h-screen'>
        <h1 className='font-bold'>When Were You <span className='text-[#fca728]'>Born?</span></h1>
        <h1>We need this information to ensure our community stays safe</h1>
        <Link to='/page1' className='flex rounded-lg w-full'>
            <button type="submit" className='w-1/2 bg-[#fca728] hover:bg-opacity-80 font-bold text-gray-800 p-3 mt-9 mx-auto items-center align-center rounded-lg'>Continue</button>
        </Link>
    </div>
  )
}

export default Page1