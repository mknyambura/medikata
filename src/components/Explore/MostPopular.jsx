import React from 'react'
import { SlArrowLeft } from 'react-icons/sl'
import { Link } from 'react-router-dom'

import search from '../../images/Search_icon.png'
import  joggingImage from '../../images/Rectangle 9505.png'
import midnightRelaxationImage from '../../images/Rectangle 9506.png'
import riverImage from '../../images/Rectangle 9507.png'
import midnightLaunderteeImage from '../../images/Rectangle 9508.png'
import mountainsImage from '../../images/Rectangle 9509.png'
import tickleMeImage from '../../images/Rectangle 9510.png'
import playIcon from '../../images/PlayIcon.png'

function Explore() {
  return (
    <div className='flex flex-col bg-[#07362E]'>
      <div className='mr-2 ml-2 mt-6 mb-16 flex justify-between'>
        <Link to='/home'>
            <button className='bg-[#08ca5c] py-4 px-4 rounded-2xl'>
                <SlArrowLeft/>
            </button>
        </Link>
        <h1 className='text-white text-4xl font-extrabold'>Most <span className='text-[#fca728]'>Popular</span></h1>
        <img src={search} alt="" />
      </div>
      <div>
        <div className='flex flex-row flex-wrap gap-4 m-6 justify-between'>
          <div className=' relative text-center'>
            <div>
              <img src={midnightRelaxationImage} alt="" width={250} height={150}/>
            </div>
            <div className='absolute top-[10%] left-[20px]'>
              <img src={playIcon} alt="" />
            </div>
            <div className='absolute top-[70%] left-[40%] text-white font-extrabold text-2xl'>
              <p >Midnight & Relaxation</p>
            </div>
          </div>
          <div className='relative text-center'>
            <div className=' '> 
              <img src={joggingImage} alt="" width={250} height={150}/>
            </div>
            <div className='absolute top-[10%] left-[10%]'>
              <img src={playIcon} alt="" />
            </div>
            <div className=' absolute top-[70%] left-[40%] text-white font-extrabold text-2xl'>
              <p>Jogging and cycling</p>
            </div>
          </div>
          <div className='relative text-center'>
            <div>
              <img src={midnightLaunderteeImage} alt="" width={250} height={150}/>
            </div>
            <div className='absolute top-[10%] left-[10%]'>
              <img src={playIcon} alt="" />
            </div>
            <div>
              <p className=' absolute top-[70%] left-[40%] text-white font-extrabold text-2xl'>Midnight Laundertee</p>
            </div>
          </div>
          <div className='relative text-center'>
            <div>
              <img src={riverImage} alt="" width={250} height={150}/>
            </div>
            <div className='absolute top-[10%] left-[10%]'>
              <img src={playIcon} alt="" />
            </div>
            <div>
              <p className='absolute top-[70%] left-[40%] text-white font-extrabold text-2xl'>Jogging and Cycling</p>
            </div>
          </div>
          <div className='relative text-center'>
            <div>
              <img src={tickleMeImage} alt="" width={250} height={150}/>
            </div>
            <div className='absolute top-[10%] left-[10%]'>
              <img src={playIcon} alt="" />
            </div>
            <div>
              <p className='absolute top-[70%] left-[40%] text-white font-extrabold text-2xl'>Tickle Me Pink</p>
            </div>
          </div>
          <div className='relative text-center'>
            <div>
              <img src={mountainsImage} alt="" width={250} height={150}/>
            </div>
            <div className='absolute top-[10%] left-[10%]'>
              <img src={playIcon} alt="" />
            </div>
            <div>
              <p className='absolute top-[70%] left-[40%] text-white font-extrabold text-2xl'>Michael in the Bathroom</p>
            </div>
          </div>
        </div>
      </div>
      <Link to='/mostPopular' className='items-center flex flex-col'>
        <button className='items-center justify-center w-1/2 bg-[#fca728] rounded-lg px-6 py-4 font-bold text-xl'>Load more</button>
      </Link>
    </div>
  )
}

export default Explore