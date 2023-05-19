import React, { useState } from 'react'

import { GoPencil } from 'react-icons/go'

import { Switch } from '@headlessui/react'
import { Link } from 'react-router-dom'

import user from '../../images/user.png'
import { AiOutlineClose } from 'react-icons/ai'


function AccountInformation() {
    const [enabled, setEnabled] = useState(false)

  return (
    <div className='flex flex-col m-6'>
        <div className='flex mr-2 ml-2 mt-6 mb-8 items-center'>
            <Link to='/settings'>
                <button className='bg-[#08ca5c] py-4 px-4 rounded-2xl'>
                    <AiOutlineClose/>
                </button>
            </Link>
        </div>
        <div className='bg-[#075244] m-8 px-8 py-8 rounded-3xl'>
            <div className='bg-[#04302a] px-3 py-3 rounded-2xl w-1/4 items-center justify-center flex-1'>
                <div className='relative'>
                    <img src={user} alt="" width={100} className='items-center justify-center'/>
                    <div className='absolute left-24 top-20'>
                        <button className='bg-[#08ca5c] px-2 py-2 rounded-xl'>
                            <GoPencil className='text-white float-right '/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-white flex gap-8 mb-6 mt-4'>
                <div className='flex flex-col gap-2'>
                    <h1>First Name</h1>
                    <input type="text" className='bg-[#04302a] rounded-xl px-2 py-2' />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1>Last Name</h1>
                    <input type="text" className='bg-[#04302a] rounded-xl px-2 py-2' />
                </div>
            </div>
            <hr className='text-gray-400 mb-6'/>
            <div className='flex justify-between'>
                <div className='text-slate-300 flex flex-col gap-4'>
                    <h1 className='font-extrabold text-2xl text-white'>Hide my last name</h1>
                    <p>May take up to 12 hours to take effect</p>
                </div>
            
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-slate-500' : 'bg-[#08ca5c]'} relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${enabled ? 'translate-x-9' : 'translate-x-0'} pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            </div>
            <hr className='text-gray-400 mb-6 mt-6'/>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-slate-300'>Tagline</h1>
                    <input type="text" className='bg-[#04302a] text-white outline-none focus:ring-0 rounded px-2 py-2 w-full' placeholder='Type here...'/>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-slate-300'>Description</h1>
                    <input type="text" className='bg-[#04302a] text-white outline-none focus:ring-0 rounded px-2 py-2 h-[200px] w-full' placeholder='Write here about yourself' />
                </div>
            </div>
            <Link className='flex flex-col items-center justify-center mt-8 mb-8'>
                <button className='bg-[#fca728] rounded-lg w-3/4 px-6 py-4 font-bold text-xl'>Save changes</button>
            </Link>
        </div>
    </div>
  )
}

export default AccountInformation
