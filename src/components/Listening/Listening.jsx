import React from 'react'
import { SlArrowLeft } from 'react-icons/sl'
import { Link } from 'react-router-dom'

import search from '../../images/Search_icon.png'
import listening from '../../images/Rectangle 9514.png'
import worried from '../../images/worried.png'
import listeningBar from '../../images/Listening bar.png'
import { BsFastForwardFill, BsPlayFill, BsRepeat, BsRewindFill, BsShuffle } from 'react-icons/bs'
function Listening() {
  return (
    <div className='flex flex-col '>
        <div className='mr-2 ml-2 mt-6 justify-between items-center'>
            <Link to='/home'>
                <button className='bg-[#08ca5c] py-4 px-4 rounded-2xl'>
                    <SlArrowLeft/>
                </button>
            </Link>
            <div action="" className='flex flex-row-reverse items-center'>
                <input type="text" className=' focus:outline-none hover:cursor-pointer border hover:outline-lime-500 hover:border-lime-500 rounded-lg bg-[#07362E] text-white w-1/2 h-6 px-6 py-6' placeholder='Search "Breathing Mind Freshing"'/>
                <img src={search} alt="" className='absolute items-center bg-transparent m-2' />
            </div>
        </div>
        <div className='flex flex-col m-8 items-center '>
            <div className='items-center'>
                <img src={listening} alt="" />
            </div>
            <h1 className='flex flex-col items-center text-white font-extrabold text-4xl'>
                Michael in the Bathroom 
                    <span className='flex text-xl m-4 font-normal text-slate-300'>
                        <img src={worried} alt="" className='mr-2 ml-2'/> 
                            Worried By Joe Iconis
                    </span>
            </h1>

        </div>
        <div className='flex items-center justify-center'>

            <div className='w-1/2 text-white flex justify-evenly items-center font-extrabold m-8 '>
                <p>01:42</p>
                <img src={listeningBar} alt="" width={300} />
                <p>02.30</p>
            </div>
        </div>
        <div className='items-center justify-center flex'>

            <div className='w-1/2 items-center bg-[#084137] rounded-3xl m-6 flex justify-between'>
                <button>
                    <BsRepeat className='text-5xl text-white m-4'/>
                </button>
                <button>
                    <BsRewindFill className='text-5xl text-white m-4'/>
                </button>
                <button className='bg-[#fca728] rounded-full px-2 py-2'>
                    <BsPlayFill className='text-5xl text-black m-2'/>
                </button>
                <button>
                    <BsFastForwardFill className='text-5xl text-white m-4'/>
                </button>
                <button>
                    <BsShuffle className='text-5xl text-white m-4'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Listening