import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { Transition } from '@headlessui/react';

import { SlArrowLeft } from "react-icons/sl"

import '../../index.css'

function Page1() {

    const [numbers, setNumbers] = useState([]);
    const [visibleItems, setVisibleItems] = useState(0);
    const [visibleIndices, setVisibleIndices] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
    if (!containerRef.current) return;

      // Function to load numbers
    const loadNumbers = () => {
    //   // Calculate the number of visible items based on the container height and item height
        const containerHeight = containerRef.current.clientHeight;
        const itemHeight = 10; // Adjust this value based on your styling
        const visibleItemsCount = Math.ceil(containerHeight / itemHeight);
        setVisibleItems(visibleItemsCount); 

        // Generate all numbers in a single batch
        const allNumbers = Array.from({ length: 2051 - 1910 }, (_, index) => index + 1910);
        setNumbers(allNumbers);
   
    };

    // Load the initial batch of numbers
        loadNumbers();
    }, [])

    return (
      <div className=' m-4 scrollbar-hide flex flex-col bg-[#07362E] ml-4 mr-4 h-screen text-white'  style={{overflowY: 'scroll' }} ref={containerRef}>
        <div className='mr-2 ml-2 mt-6 mb-10'>
            <Link to='/'>
                <button className='bg-[#08ca5c] py-4 px-4 rounded-2xl'>
                    <SlArrowLeft/>
                </button>
            </Link>
            <div className='bg-gradient-to-b from-[#036857] text-[#bg-[#08ca5c]] rounded-2xl mx-auto mt-6 mb-4'>
                <div className='bg-[#08ca5c] w-1/3 rounded-2xl text-[#08ca5c]'>.</div>
            </div>
        </div>

        <h1 className='font-bold text-6xl'>When Were You <span className='text-[#fca728] mt-6'>born?</span></h1>
        <h1 className='text-3xl mt-4'>We need this information to ensure our community stays safe</h1>

        <div className='absolute left-[30%] top-[58%] bg-gradient-to-b from-[#07362E] h-16 w-[40%]'></div>
        
        {containerRef.current && (
            <div className='flex flex-col items-center mt-10 max-h-screen overflow-y-scroll whitespace-nowrap scrollbar-hide'>
                {numbers.map((number) => (
                    <div 
                        key={number}
                        className='items-center text-gray-300 text-5xl hover:bg-lime-500 rounded-lg py-1 px-10 hover:cursor-pointer'>
                            {number}
                    </div>
                ))}
            </div>
        )}
        <div className='absolute left-[30%] bottom-[12%] bg-gradient-to-t from-[#07362E] h-24 w-[40%]'></div>

        <Link to='/page2' className='flex rounded-lg w-full'>
          <button type="submit" className='w-1/2 bg-[#fca728] hover:bg-opacity-80 font-bold text-gray-800 p-3 mt-9 mb-6 mx-auto items-center align-center rounded-lg'>Continue</button>
        </Link>
      </div>
    );
};

export default Page1

