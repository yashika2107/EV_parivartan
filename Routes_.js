import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Routes_() {
  const [source,setSource]=useState("");
  const [destination,setDestination]=useState("");
  const handleSource=(e)=>{
        setSource(e.target.value);
  }
  const handleDestination=(e)=>{
    setDestination(e.target.value);
  }
  return (
        <div className='flex flex-col w-[35%] p-16 h-[21rem] m-auto mt-11 items-start shadow-md shadow-gray-300'>
            <label className='mb-1'>Enter source route</label>
            <input className='border border-gray-200 rounded py-1 px-2 mb-4 w-60' onChange={(e)=>handleSource(e)} value={source}></input>
            <label className='mb-1'>Enter destination route</label>
            <input className='border border-gray-200 rounded py-1 px-2 mb-4 w-60' onChange={(e)=>handleDestination(e)} value={destination}></input>
            <Link to='/routes_map'>
                <button className='bg-blue-400 text-white rounded-sm py-1 px-4 mt-2'>Let's Go</button>
            </Link>
        </div>
  )
}
