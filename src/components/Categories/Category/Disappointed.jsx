import React from 'react'
import { SlArrowLeft, SlControlPlay } from 'react-icons/sl'
import { BsPlay, BsPlayCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import categories from '../../../images/Categories_icon.png'
import disappointed from '../../../images/Categorie03.png'
import medidateIllustration from '../../../images/illustration(1).png'
import riverImage from '../../../images/Rectangle 9507.png'
import nature from '../../../images/Rectangle 9513.png'
import empathy from '../../../images/Rectangle 9511.png'
import hills from '../../../images/Rectangle 9512.png'

const Disappointed = () => {
  return (
    <div className='flex flex-col bg-[#07362E] mt-6 mb-6 '>
        <div className='flex justify-between m-6 items-center'>
            <div className='mr-2 ml-2 mt-6 justify-between'>
                <Link to='/categories'>
                    <button className='bg-[#08ca5c] py-4 px-4 rounded-2xl'>
                        <SlArrowLeft/>
                    </button>
                </Link>
            </div>
            <div className='flex justify-between items-center'>
                <img src={disappointed} alt="" width={100} height={100}/>
                <p className='text-[#fca728] font-extrabold text-6xl'>Disappointed</p>
            </div>
            <Link to='/categories'>
                <img src={categories} alt="" />
            </Link>
        </div>
        <div className='bg-[#084137] flex justify-between items-center m-10 rounded-3xl'>
            <img src={medidateIllustration} alt="" width={400} height={400} className='m-6'/>
            <div className='text-white flex flex-col justify-center items-center m-8'>
              <h1 className='font-extrabold text-4xl'>Meditative Insights</h1>
              <p className='text-gray-400 mt-4 text-2xl'>involves focusing on something intently as a way of staying.</p>
            </div>
        </div>
        <div className='m-6'>
            <h1 className='text-white font-extrabold text-6xl mb-16'>Daily <span className='text-[#fca728]'>practices</span></h1>
            
            <div className='bg-[#084137] flex gap-8 items-center rounded-3xl mb-8'>
                <div className='relative text-center'>
                    <div className='ml-4 mt-4 mb-4'> 
                        <img src={riverImage} alt="" width={90} height={80}/>
                    </div>
                    <div className='absolute top-[45%] left-[45%]'>
                        <BsPlayCircle/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-white font-extrabold text-4xl m-2'>The Bubble Journey</h1>
                    <p className='text-white text-xl m-2'>Reduce  fear, anxiety and stress • 7m 23s</p>
                </div>
            </div>
            
            <div className='bg-[#084137] flex gap-8 items-center rounded-3xl mb-8'>
                <div className='relative text-center'>
                    <div className='ml-4 mt-4 mb-4'> 
                        <img src={nature} alt="" width={100} height={100}/>
                    </div>
                    <div className='absolute top-[45%] left-[45%]'>
                        <BsPlayCircle/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-white font-extrabold text-4xl m-2'>Belly Breathing & Walk</h1>
                    <p className='text-white text-xl m-2'>Inhale by inflating your belly fully • 5m 43s</p>
                </div>
            </div>
            
            <div className='bg-[#084137] flex gap-8 items-center rounded-3xl mb-8'>
                <div className='relative text-center'>
                    <div className='ml-4 mt-4 mb-4'> 
                        <img src={empathy} alt="" width={100} height={100}/>
                    </div>
                    <div className='absolute top-[45%] left-[45%]'>
                        <BsPlayCircle/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-white font-extrabold text-4xl m-2'>Empathy and Kindness</h1>
                    <p className='text-white text-xl m-2'>Kindness is equality of being friendly • 8m 32s</p>
                </div>
            </div>
            
            <div className='bg-[#084137] flex gap-8 items-center rounded-3xl mb-8'>
                <div className='relative text-center'>
                    <div className='ml-4 mt-4 mb-4'> 
                        <img src={hills} alt="" width={100} height={100}/>
                    </div>
                    <div className='absolute top-[45%] left-[45%]'>
                        <BsPlayCircle/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-white font-extrabold text-4xl m-2'>Mindful communication</h1>
                    <p className='text-white text-xl m-2'>Applying priciples of mindfulness • 5m 00s</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Disappointed