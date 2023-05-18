import React from 'react'
import { Link } from 'react-router-dom'


import categories from '../../images/Categories_icon.png'
import user from '../../images/user.png'
import search from '../../images/Search_icon.png'
import playIcon from '../../images/PlayIcon.png'

import stressRelief from '../../images/Categorie01.png'
import sleeping from '../../images/Categorie02.png'
import disappointed from '../../images/Categorie03.png'
import relieved from '../../images/Categorie04.png'
import person from '../../images/illustration.png'
import joggingImage from '../../images/Rectangle 9505.png'
import midnightRelaxationImage from '../../images/Rectangle 9506.png'
import riverImage from '../../images/Rectangle 9507.png'
import midnightLaunderteeImage from '../../images/Rectangle 9508.png'

function Home() {
  return (
    <div className='bg-[#07362E] mt-6 mb-6 mr-6'>
      <div className='flex items-center justify-between m-4'>
        <div className='float-left'>
          <Link to='/profile'>
            <img src={user} alt="userIcon" width={100} height={100} />
          </Link>
        </div>
        {/* <div className=' flex rounded-lg outline-gray-500 border-gray-500 '> */}
          <Link to='/categories'>
            <img src={categories} alt="" />
          </Link>
        {/* </div> */}
      </div>
      <div action="" className='flex flex-row-reverse items-center'>
        <input type="text" className=' focus:outline-none hover:cursor-pointer border hover:outline-lime-500 hover:border-lime-500 rounded-lg bg-[#07362E] text-white w-1/2 h-6 px-6 py-6' placeholder='Search "Breathing Mind Freshing"'/>
        <img src={search} alt="" className='absolute items-center bg-transparent m-2' />
      </div>
      <h1 className='text-white text-8xl font-extrabold m-4'>Hi Ashik!</h1>
      <h1 className='text-gray-300 text-3xl m-4'>How are you feeling today ?</h1>
      <br />
      <div className='flex flex-row justify-evenly mb-4'>
        <div className='text-white'>
          <Link to='/stressRelief'>
            <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
              <img src={stressRelief} alt="" width={50} height={50}/>
            </button>
          </Link>
          <p>Stress Relief</p>
        </div>
        <div className='text-white'>
          <Link to='/sleeping'>
            <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
              <img src={sleeping} alt="" width={50} height={50}/>
            </button>
          </Link>
          <p>Sleeping</p>
        </div>
        <div className='text-white'>
          <Link to='/disappointed'>
            <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
              <img src={disappointed} alt="" width={50} height={50}/>
            </button>
          </Link>
          <p>Disappointed</p>
        </div>
        <div className='text-white'>
          <Link to='/relieved'>
            <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
              <img src={relieved} alt="" width={50} height={50}/>
            </button>
          </Link>
          <p>Relieved</p>
        </div>
      </div>
      <div className='justify-between items-center flex text-white m-6'>
        <h1 className='text-extrabold text-5xl'>Latest update</h1>
        <h1 className='text-lime-600 text-2xl'>See all</h1>
      </div>
      <div className='bg-[#084137] flex justify-between items-center m-10 rounded-3xl'>
        <div className='text-white flex flex-col justify-center items-center m-8'>
          <h1 className='font-extrabold text-4xl'>Focused & Mindfulness</h1>
          <p className='text-gray-400 mt-4 text-2xl'>involves focusing on something intently as a way of staying.</p>
        </div>
        <img src={person} alt="" width={400} height={400} className='m-6'/>
      </div>
      <div className='m-6'>
        <div className='flex flex-row justify-between m-6'>
          <h1 className='text-white text-5xl font-extrabold'>Most <span className='text-[#fca728]'>Popular</span></h1>
          <Link to='/mostPopular'>
            <button className='float-right bg-[#fca728] rounded-lg px-6 py-4 font-bold text-xl'>Explore more</button>
          </Link>
        </div>
        <div className='flex flex-row flex-wrap gap-4 mb-6 justify-between'>
          
          <div className='relative text-center'>
            <div className=' '> 
              <img src={joggingImage} alt="" width={250} height={150}/>
            </div>
            <Link to='/listening'>
              <div className='absolute top-[10%] left-[10%]'>
                <img src={playIcon} alt="" />
              </div>
            </Link>
            <div className=' absolute top-[70%] left-[40%] text-white font-extrabold text-2xl'>
              <p>Jogging and cycling</p>
            </div>
          </div>
          
          <div className=' relative text-center'>
            <div>
              <img src={midnightRelaxationImage} alt="" width={250} height={150}/>
            </div>
            <Link to='/listening'>
              <div className='absolute top-[10%] left-[20px]'>
                <img src={playIcon} alt="" />
              </div>
            </Link>
            <div className='absolute top-[70%] left-[40%] text-white font-extrabold text-2xl'>
              <p >Midnight & Relaxation</p>
            </div>
          </div>
          
          <div className='relative text-center'>
            <div className=' '> 
              <img src={midnightLaunderteeImage} alt="" width={250} height={150}/>
            </div>
            <Link to='/listening'>
              <div className='absolute top-[10%] left-[10%]'>
                <img src={playIcon} alt="" />
              </div>
            </Link>
            <div className=' absolute top-[70%] left-[40%] text-white font-extrabold text-2xl'>
              <p>Midnight Laundertee</p>
            </div>
          </div>
          
          <div className=' relative text-center'>
            <div>
              <img src={riverImage} alt="" width={250} height={150}/>
            </div>
            <Link to='/listening'>
              <div className='absolute top-[10%] left-[20px]'>
                <img src={playIcon} alt="" />
              </div>
            </Link>
            <div className='absolute top-[70%] left-[40%] text-white font-extrabold text-2xl'>
              <p >Jogging and cycling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home