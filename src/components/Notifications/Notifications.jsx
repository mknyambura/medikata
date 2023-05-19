import { Switch } from '@headlessui/react'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsBell } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Notifications() {
    const [enabled, setEnabled] = useState(false)

  return (
    <div className='text-white'>
        <div className='flex mr-2 ml-2 mt-16 mb-18 items-center'>
            <Link to='/settings'>
                <button className='bg-[#08ca5c] py-4 px-4 rounded-2xl'>
                    <AiOutlineClose/>
                </button>
            </Link>
        </div>
        <div className='bg-[#075244] m-16 rounded-3xl px-4 py-4 flex flex-col gap-6'>
            <h1 className='text-[#fca728] mt-8 mb-10 font-extrabold text-6xl'>Notifications</h1>
            <p className='text-slate-300 text-xl'>When you are enabled then you will get a push notification. Need help with meditation for your Health.</p>
            <div className='flex justify-between mt-16 ml-10 mr-10'>
                <h1 className='font-extrabold text-2xl'>Sleep</h1>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-slate-500' : 'bg-[#08ca5c]'} relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${enabled ? 'translate-x-9' : 'translate-x-0'} pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            </div>
            <hr className='text-gray-600 mb-6'/>
            <div className='flex justify-between ml-10 mr-10'>
                <h1 className='font-extrabold text-2xl'>Recommendations</h1>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-slate-500' : 'bg-[#08ca5c]'} relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${enabled ? 'translate-x-9' : 'translate-x-0'} pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            </div>
            <hr className='text-gray-600 mb-6'/>
            <div className='flex justify-between ml-10 mr-10'>
                <h1 className='font-extrabold text-2xl'>Plan push campaigns</h1>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-slate-500' : 'bg-[#08ca5c]'} relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${enabled ? 'translate-x-9' : 'translate-x-0'} pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            </div>
            <hr className='text-gray-600 mb-6'/>
            <Link to='/mostPopular' className='flex flex-col outline-slate-400 border border-slate-400 rounded-xl items-center justify-center m-6'>
                <button className='flex flex-row bg-transparent rounded-lg px-4 py-4 font-bold text-xl outline-slate-500 '><BsBell className='mr-4 ml-4'/> Disable all notifications</button>
            </Link>
        </div>
    </div>
  )
}

export default Notifications