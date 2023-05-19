import React from 'react'
import { AiOutlineClose, AiOutlinePlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Timeit from "react-timeit";
// import "react-timeit/dist/index.css";

function DailyReminders() {
  return (
    <div>
        <div>
            <div className='flex mr-2 ml-2 mt-16 mb-18 items-center'>
                <Link to='/settings'>
                    <button className='bg-[#08ca5c] py-4 px-4 rounded-2xl'>
                        <AiOutlineClose/>
                    </button>
                </Link>
            </div>
            <div className='bg-[#075244] text-white rounded-3xl px-6 py-6 flex flex-col gap-6 m-10'>
                <h1 className='text-6xl font-extrabold'>Set few <span className='text-[#fca728]'>Reminders</span></h1>
                <p className='text-slate-400 text-2xl'>These meditation reminders are all better that your average pillbox fromapps to handheld timers.</p>
                <div className='flex flex-row items-center justify-between ml-10 mr-10'>
                    <h1 className='font-extrabold text-4xl'>Midday Rest reminder</h1>
                    <div className='text-white text-2xl'>
                        <button className='flex flex-row gap-6 bg-[#08ca5c] rounded-2xl px-4 py-4 items-center'>
                            <AiOutlinePlusCircle/>
                            <h1 className='font-extrabold text-xl'>Add New</h1>
                        </button>
                    </div>
                </div>
                <hr className='text-gray-600 mb-6'/>
                <div className='flex flex-row items-center justify-between ml-10 mr-10'>
                    <h1 className='font-extrabold text-4xl'>Bedtime reminder</h1>
                    <div className='text-white text-2xl'>
                        <button className='flex flex-row gap-6 bg-[#08ca5c] rounded-2xl px-4 py-4 items-center'>
                            <AiOutlinePlusCircle/>
                            <h1 className='font-extrabold text-xl'>Add New</h1>
                        </button>
                    </div>
                </div>
                <hr className='text-gray-600 mb-6'/>
            </div>
        </div>
    </div>
  )
}

export default DailyReminders