import React from 'react'
import { Link } from 'react-router-dom'

import stressRelief from '../../images/Categorie01.png'
import sleeping from '../../images/Categorie02.png'
import disappointed from '../../images/Categorie03.png'
import relieved from '../../images/Categorie04.png'
import confused from '../../images/confused.png'
import frowning from '../../images/frowning.png'
import grimming from '../../images/grimming.png'
import distraught from '../../images/distraught.png'
import grimicing from '../../images/grimicing.png'
import comfounded from '../../images/comfounded.png'
import persevering from '../../images/persevering.png'
import worried from '../../images/worried.png'
import crying from '../../images/crying.png'
import { SlArrowLeft } from 'react-icons/sl'

function Categories() {
  return (
    <div className='flex flex-col bg-[#07362E] m-6'>
        <div className='mr-2 ml-2 mt-6  flex justify-between'>
            <Link to='/home'>
                <button className='bg-[#08ca5c] py-4 px-4 rounded-2xl'>
                    <SlArrowLeft/>
                </button>
            </Link>
        </div>
        <div className='flex flex-row flex-wrap bg-[#084137] justify-evenly rounded-3xl mt-4 gap-8 m-8'>
            <h1 className='text-white text-6xl font-extrabold m-8'>Filter by <span className='text-[#fca728]'>categories</span></h1>
            <div className='text-white m-4 items-center justify-center flex flex-col'>
                <Link to='/stressRelief'>
                    <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
                        <img src={stressRelief} alt="" width={100} height={100}/>
                    </button>
                </Link>
                <p className='font-extrabold'>Stress Relief</p>
            </div>
            <div className='text-white m-4 items-center justify-center flex flex-col'>
                <Link to='/sleeping'>
                    <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
                        <img src={sleeping} alt="" width={100} height={100}/>
                    </button>
                </Link>
                <p className='font-extrabold'>Sleeping</p>
            </div>
            <div className='text-white m-4 items-center justify-center flex flex-col'>
                <Link to='/disappointed'>
                    <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
                        <img src={disappointed} alt="" width={100} height={100}/>
                    </button>
                </Link>
                <p className='font-extrabold'>Disappointed</p>
            </div>
            <div className='text-white m-4 items-center justify-center flex flex-col'>
                <Link to='/confused'>
                    <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
                        <img src={confused} alt="" width={100} height={100}/>
                    </button>
                </Link>
                <p className='font-extrabold'>Confused</p>
            </div>
            <div className='text-white m-4 items-center justify-center flex flex-col'>
                <Link to='/frowning'>
                    <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
                        <img src={frowning} alt="" width={100} height={100}/>
                    </button>
                </Link>
                <p className='font-extrabold'>Frowning</p>
            </div>
            <div className='text-white m-4 items-center justify-center flex flex-col'>
                <Link to='/grimming'>
                    <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
                        <img src={grimming} alt="" width={100} height={100}/>
                    </button>
                </Link>
                <p className='font-extrabold'>Grimming</p>
            </div>
            <div className='text-white m-4 items-center justify-center flex flex-col'>
                <Link to='/distraught'>
                    <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
                        <img src={distraught} alt="" width={100} height={100}/>
                    </button>
                </Link>
                <p className='font-extrabold'>Distraught</p>
            </div>
            <div className='text-white m-4 items-center justify-center flex flex-col'>
                <Link to='/grimicing'>
                    <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
                        <img src={grimicing} alt="" width={100} height={100}/>
                    </button>
                </Link>
                <p className='font-extrabold'>Grimicing</p>
            </div>
            <div className='text-white m-4 items-center justify-center flex flex-col'>
                <Link to='/comfounded'>
                    <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
                        <img src={comfounded} alt="" width={100} height={100}/>
                    </button>
                </Link>
                <p className='font-extrabold'>Comfounded</p>
            </div>
            <div className='text-white m-4 items-center justify-center flex flex-col'>
                <Link to='/relieved'>
                    <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
                        <img src={relieved} alt="" width={100} height={100}/>
                    </button>
                </Link>
                <p className='font-extrabold'>Relieved</p>
            </div>
            <div className='text-white m-4 items-center justify-center flex flex-col'>
                <Link to='/persevering'>
                    <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
                        <img src={persevering} alt="" width={100} height={100}/>
                    </button>
                </Link>
                <p className='font-extrabold'>Persevering</p>
            </div>
            <div className='text-white m-4 items-center justify-center flex flex-col'>
                <Link to='/worried'>
                    <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
                        <img src={worried} alt="" width={100} height={100}/>
                    </button>
                </Link>
                <p className='font-extrabold'>Worried</p>
            </div>
            <div className='text-white m-4 items-center justify-center flex flex-col'>
                <Link to='/crying'>
                    <button className='bg-[#08ca5c] rounded-2xl sm:py-4 sm:px-4 lg:py-8 lg:px-8 mb-4'>
                        <img src={crying} alt="" width={100} height={100}/>
                    </button>
                </Link>
                <p className='font-extrabold'>Loudly Crying</p>
            </div>
        </div>
        <Link to='#' className='flex flex-col items-center'>
            <button className='bg-[#fca728] w-1/2 rounded-lg px-6 py-4 font-bold text-xl'>View All</button>
        </Link>
    </div>
  )
}

export default Categories