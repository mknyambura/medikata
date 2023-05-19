import React from 'react'

import { BsBellFill, BsBoxArrowInLeft, BsCalendarDayFill } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import { FaUser } from 'react-icons/fa'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import { SlArrowLeft } from 'react-icons/sl'
import { Link } from 'react-router-dom'

function Settings() {
  return (
    <div className='bg-[#084137] flex flex-col rounded-3xl m-8 px-8 py-8'>
      <div className='flex mr-2 ml-2 mt-6 mb-8 justify-between items-center'>
        <Link to='/profile'>
            <button className='bg-[#08ca5c] py-4 px-4 rounded-2xl'>
                <SlArrowLeft/>
            </button>
        </Link>
      </div>
      <div  className='text-white font-extrabold flex flex-col m-8 gap-10'>
        <h1 className='text-6xl font-extrabold text-white'>Manage <span className='text-[#fca728]'>Settings</span></h1>
        <div className='flex flex-col '>
          <Link to='/accountInformation'>
            <div className='m-6 flex gap-8 items-center'>
              <div className='bg-[#075244] px-6 py-6 rounded-2xl'>
                <FaUser className='text-2xl'/>
              </div>
              <h1 className='font-extrabold text-3xl'>Account information</h1>
            </div>
          </Link>
          <Link to='/notifications'>
            <div className='m-6 flex gap-8 items-center'>
              <div className='bg-[#075244] px-6 py-6 rounded-2xl'>
                <BsBellFill className='text-2xl'/>
              </div>
              <h1 className='font-extrabold text-3xl'>Notifications</h1>
            </div>
          </Link>
          <Link to='/dailyReminders'>
            <div className='m-6 flex gap-8 items-center'>
              <div className='bg-[#075244] px-6 py-6 rounded-2xl'>
                <BsCalendarDayFill className='text-2xl'/>
              </div>
              <h1 className='font-extrabold text-3xl'>Daily reminders</h1>
            </div>
          </Link>
          <Link to='/privacyPolicy'>
            <div className='m-6 flex gap-8 items-center'>
              <div className='bg-[#075244] px-6 py-6 rounded-2xl'>
                <MdOutlinePrivacyTip className='text-2xl'/>
              </div>
              <h1 className='font-extrabold text-3xl'>Privacy Policy</h1>
            </div>
          </Link>
          <div className='m-6 flex gap-8 items-center'>
            <div className='bg-[#075244] px-6 py-6 rounded-2xl'>
              <CgNotes className='text-2xl'/>
            </div>
            <h1 className='font-extrabold text-3xl'>Terms of Service</h1>
          </div>
          <Link to='/'>
            <div className='m-6 flex gap-8 items-center'>
              <div className='bg-[#075244] px-6 py-6 rounded-2xl'>
                <BsBoxArrowInLeft className='text-2xl'/>
              </div>
              <h1 className='font-extrabold text-3xl'>Sign out</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Settings