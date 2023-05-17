import { Link } from 'react-router-dom'
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SlArrowDown, SlArrowLeft } from "react-icons/sl"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { SelectButton } from 'primereact/selectbutton';
        
import "../../index.css"


export default function Page2() {
    const [value, setValue] = useState(null);
    const wellbeing = [
        {id: 1, label: "Sleep", value: "Sleep"},
        {id: 2, label: "Happiness & Joy", value: "Happiness & Joy"},
        {id: 3, label: "Healthy Ageing", value: "Healthy Ageing"},
        {id: 4, label: "Morning Energy", value: "Morning Energy"},
        {id: 5, label: "Performance", value: "Performance"},
        {id: 6, label: "Self-confidence", value: "Self-confidence"},
        {id: 7, label: "Stillness", value: "Stillness"},
        {id: 8, label: "Relaxation", value: "Relaxation"},
    ];


    return (
        <div className="flex flex-col bg-[#07362E]  h-screen">
            <div className='mr-2 ml-2 mt-6 mb-16'>
                <Link to='/page1'>
                    <button className='bg-[#08ca5c] py-4 px-4 rounded-2xl'>
                        <SlArrowLeft/>
                    </button>
                </Link>
                <div className='bg-gradient-to-b from-[#036857] text-[#bg-[#08ca5c]] rounded-2xl mx-auto mt-6 mb-4'>
                    <div className='bg-[#08ca5c] w-2/3 rounded-2xl text-[#08ca5c]'>.</div>
                </div>
            </div>
            <h1 className='font-bold text-6xl text-white'>What brought you here <span className='text-[#fca728] mt-6'>today?</span></h1>
            <h1 className='text-3xl mt-4 text-white'>Select atleast 1 to continue</h1>

            
            <div className='scrollbar-hide gap-6 m-2 p-2 justify-center items-center'>
                {wellbeing.map((wellbeing) => (
                  
                    <button
                        className='bg-transparent text-white py-2 px-6 mt-9 rounded-lg border hover:border-lime-600 mr-4 ml-4'
                        key={wellbeing.id}
                    >
                        {wellbeing.label}
                    </button>                    
                    
                ))}
            </div>
            <Link to='/page3' className='flex rounded-lg w-full'>
                <button type="submit" className='w-1/2 bg-[#fca728] hover:bg-opacity-80 font-bold text-gray-800 p-3 mt-9 mb-6 mx-auto items-center align-center rounded-lg'>Continue</button>
            </Link>
        </div>
    );
}

// export default Page2
                    // import React, { useState } from "react";
                    // import { SelectButton } from 'primereact/selectbutton';
                    
                    // export default function MultipleDemo() {
                    //     const [value, setValue] = useState(null);
                    //     const items = [
                    //         { name: 'Option 1', value: 1 },
                    //         { name: 'Option 2', value: 2 },
                    //         { name: 'Option 3', value: 3 }
                    //     ];
                        
                    //     return (
                    //         <div className="card flex justify-content-center">
                    //             <SelectButton value={value} onChange={(e) => setValue(e.value)} optionLabel="name" options={items} multiple />
                    //         </div>
                    //     );
                    // }