import React from 'react'
import { SlArrowLeft } from 'react-icons/sl'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  return (
    <div>
        <div className='flex mr-2 ml-2 mt-6 mb-8 justify-between items-center'>
            <Link to='/settings'>
                <button className='bg-[#08ca5c] py-4 px-4 rounded-2xl'>
                    <SlArrowLeft/>
                </button>
            </Link>
        </div>
        <div className='text-slate-200 bg-[#075244] rounded-3xl m-10 flex flex-col px-8 py-8'>
            <h1 className='text-[#fca728] text-5xl font-extrabold'>
                Privacy Policy
            </h1>
            <div className='text-xl flex flex-col gap-8 m-8'>
                <p>Here you can put any of your text that you would like to be displayed here. It can be any text that you think would be suitable.</p>
                    
                <p>You can insert your already existing privacy policy or create a new one and put it here as well. It is entirely up to you and you can use any text that you think would be suitable for this app screen. </p>
                
                <p>You can also use this part of the screen to put your text in if you want to do that but it is entirely up to you beceause you can put any text that would be suitable here. </p>
                
                <p>This is where all the text content supposed to end but you can add more text down below.</p>
            </div>
            <Link to='/mostPopular' className='flex flex-col outline-slate-400 border border-slate-400 rounded-xl items-center justify-center m-6'>
                <button className='flex flex-row bg-transparent rounded-lg px-4 py-4 font-bold text-xl outline-slate-500 '>Decline</button>
            </Link>
            <Link to='/mostPopular' className='flex flex-col outline-[#fca728] border border-[#fca728] bg-[#fca728] rounded-xl items-center justify-center mr-6 ml-6 mb-6'>
                <button className='flex flex-row bg-[#fca728] rounded-lg px-4 py-4 font-bold text-xl outline-slate-500 text-black'>Accept</button>
            </Link>
        </div>
    </div>
  )
}

export default PrivacyPolicy