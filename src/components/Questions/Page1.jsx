import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'

function Page1() {

    const [numbers, setNumbers] = useState([]);
    const [visibleItems, setVisibleItems] = useState(0);
    const [batchSize, setBatchSize] = useState(3);
    const containerRef = useRef(null);

    useEffect(() => {
      // Function to load numbers
      const loadNumbers = () => {
        // Calculate the number of visible items based on the container height and item height
        const containerHeight = containerRef.current.clientHeight;
        const itemHeight = 20; // Adjust this value based on your styling
        const visibleItemsCount = Math.ceil(containerHeight / itemHeight);
        setVisibleItems(visibleItemsCount);

        // Generate the next batch of numbers based on the visible items count
        const startIndex = numbers.length;
        const endIndex = startIndex + visibleItemsCount;
        const nextNumbers = Array.from({ length: visibleItemsCount }, (_, index) => startIndex + index + 1910);
        const filteredNumbers = nextNumbers.filter((number) => number <= 2050); // Filter numbers within the desired range
        setNumbers((prevNumbers) => [...prevNumbers, ...filteredNumbers]);
    };

    // Load the initial batch of numbers
    loadNumbers();

    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    return () => {
        // Clean up the event listener
        window.removeEventListener('scroll', handleScroll);
      };
    }, [numbers.length]);

    const handleScroll = () => {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        // Check if the user has scrolled to the bottom
        // Check if the user has scrolled to the bottom based on the visible items
        if (scrollPosition + windowHeight >= documentHeight - visibleItems * 30) {
        // Increase the batch size based on the visible items count
            setBatchSize((prevBatchSize) => prevBatchSize + visibleItems);
        }
    };



    return (
      <div className='bg-[#07362E] h-screen text-white'  style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
          <h1 className='font-bold'>When Were You <span className='text-[#fca728]'>Born?</span></h1>
          <h1>We need this information to ensure our community stays safe</h1>
          <Link to='/page1' className='flex rounded-lg w-full'>
              <button type="submit" className='w-1/2 bg-[#fca728] hover:bg-opacity-80 font-bold text-gray-800 p-3 mt-9 mx-auto items-center align-center rounded-lg'>Continue</button>
          </Link>
        <div>
            {numbers.map((number) => (
                <div
                    className='text-3xl'
                    key={number}>
                        
                {number}</div>
            ))}
            
        </div>
      </div>
    );
};

export default Page1

