import React from 'react'
import { Link } from 'react-router-dom'
import { SlArrowDown, SlArrowLeft } from "react-icons/sl"

import '../../index.css'

const mentalHealth = [
    {id: 1, name: "Anxiety", value: "Anxiety"},
    {id: 2, name: "Sadness", value: "Sadness"},
    {id: 3, name: "Stress", value: "Stress"},
    {id: 4, name: "Panic Attack", value: "Panic Attack"},
    {id: 5, name: "Sexuality", value: "Sexuality"},
    {id: 6, name: "Manage Pain", value: "Manage Pain"},
]

const meditationInterest = [
    {id: 1, name: "For My kids"},
    {id: 2, name: "Freedom from suffering"},
    {id: 3, name: "The Timer"},
    {id: 4, name: "Spirituality"},
    {id: 5, name: "Mindfulness"},
    {id: 6, name: "Meditation"},
]
function Page3() {
  return (
    <div className='flex flex-col h-screen m-4 bg-[#07362E] scrollbar-hide'>
        <div className='mr-2 ml-2 mt-6 mb-16'>
            <Link to='/page2'>
                <button className='bg-[#08ca5c] py-4 px-4 rounded-2xl'>
                    <SlArrowLeft/>
                </button>
            </Link>
            <div className='bg-gradient-to-b from-[#036857] text-[#08ca5c] rounded-2xl mx-auto mt-6 mb-4'>
                <div className='bg-[#08ca5c] w-[90%] rounded-2xl text-[#08ca5c]'>.</div>
            </div>
        </div>
        <h1 className='font-bold text-6xl text-[#08ca5c]'>Mental Health</h1>
        <div className='scrollbar-hide gap-6 m-2 p-2 justify-center items-center'>
            {mentalHealth.map((mental) => (
                <button 
                    key={mental.id}
                    className='bg-transparent text-white py-2 px-6 mt-9 rounded-lg border hover:border-lime-600 mr-4 ml-4'
                >
                        {mental.name}
                </button>
            ))}
        </div>
        <br />
        <br />
        <h1 className='font-bold text-6xl text-[#08ca5c]'>Meditation & Interest</h1>
        <div className='scrollbar-hide gap-6 m-2 p-2 justify-center items-center'>
            {meditationInterest.map((meditationInterest) => (
                <button 
                    key={meditationInterest.id}
                    className='bg-transparent text-white py-2 px-6 mt-9 rounded-lg border hover:border-lime-600 mr-4 ml-4'
                >
                        {meditationInterest.name}
                </button>
            ))}
        </div>
        <Link to='/home' className='flex rounded-lg w-full'>
          <button type="submit" className='w-1/2 bg-[#fca728] hover:bg-opacity-80 font-bold text-gray-800 p-3 mt-9 mb-6 mx-auto items-center align-center rounded-lg'>Get started</button>
        </Link>
    </div>
  )
}

export default Page3