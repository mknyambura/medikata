import React from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { FcSettings } from 'react-icons/fc'
import { Link } from 'react-router-dom'

import user from '../../images/user.png'
import chart from '../../images/Chart.png'

import { AiFillPieChart } from 'react-icons/ai'
import { BsEarbuds, BsFillSunFill } from 'react-icons/bs'
import { GiNightSleep } from 'react-icons/gi'


function Profile() {
  return (
    <div className='flex flex-col'>
        <div className='flex mr-2 ml-2 mt-6 justify-between items-center'>
            <Link to='/home'>
                <button className='bg-[#08ca5c] py-4 px-4 rounded-2xl'>
                    <SlArrowLeft/>
                </button>
            </Link>
            <Link to='/settings'>
                <FcSettings className='text-5xl'/>
            </Link>
        </div>
        <div className='bg-[#084137] rounded-3xl m-8 flex flex-row items-center gap-6'>
            <img src={user} alt="" className='m-6' width={150} height={150}/>
            <div className='flex flex-col gap-4'>
                <h1 className='text-white font-extrabold text-4xl'>Ashikur Rahman</h1>
                <p className='text-slate-400 text-xl'>ashikzql@gmail.com</p>
            </div>
        </div>
        <h1 className='text-white font-extrabold text-5xl m-6'>Daily <span className='text-[#fca728]'>progress</span></h1>
        <div className='flex flex-grid flex-wrap justify-between '>
            <div className='text-white w-[40%] bg-[#084137] rounded-3xl m-6'>
                <div className='flex flex-row justify-between m-6 p-2'>
                    <h1 className='text-3xl font-extrabold'>135h</h1>
                    <AiFillPieChart className='text-3xl'/>
                </div>
                <p className=' m-6 p-2'>Total meditation</p>
            </div>

            <div className='text-white w-[40%] bg-[#084137] rounded-3xl m-6'>
                <div className='flex flex-row justify-between m-6 p-2'>
                    <h1 className='text-3xl font-extrabold'>45 min</h1>
                    <BsEarbuds className='text-3xl'/>
                </div>
                <p className=' m-6 p-2'>Longest listening</p>
            </div>

            <div className='text-white w-[40%] bg-[#084137] rounded-3xl m-6'>
                <div className='flex flex-row justify-between m-6 p-2'>
                    <h1 className='text-3xl font-extrabold'>4h 23m</h1>
                    <GiNightSleep className='text-3xl'/>
                </div>
                <p className=' m-6 p-2'>Deep sleep</p>
            </div>

            <div className='text-white w-[40%] bg-[#084137] rounded-3xl m-6'>
                <div className='flex flex-row justify-between m-6 p-2'>
                    <h1 className='text-3xl font-extrabold'>2h 5m</h1>
                    <BsFillSunFill className='text-3xl'/>
                </div>
                <p className=' m-6 p-2'>Light sleep</p>
            </div>
        </div>
        <h1 className='text-white font-extrabold text-5xl m-6'>Your <span className='text-[#fca728]'>Insights</span></h1>
        <div className='flex flex-col'>
            <div className='m-6 flex justify-between items-center'>
                <p className='text-xl text-white'>This Week: <span className='font-extrabold'>05 May - 11 May</span></p>
                <div className='text-lime-400 items-center'>
                    <button className='bg-transparent py-2 px-2 m-1 border-solid border-2 border-[#08ca5c] outline-[#08ca5c] rounded-xl'>
                        <SlArrowLeft/>
                    </button>
                    <button className='bg-[#08ca5c] py-2 px-2 m-1 rounded-xl text-white'>
                        <SlArrowRight/>
                    </button>
                </div>
            </div>
            <div className='items-center justify-center flex w-full'>
                <div className='bg-[#084137] rounded-3xl m-6 items-center justify-center'>
                    <img src={chart} alt="" className='m-10'  width={500}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile