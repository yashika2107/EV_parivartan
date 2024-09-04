import React from 'react'
import { Link } from 'react-router-dom';
import electric_car from '../image/undraw_electric_car.svg';

export default function Landing() {
  return (
      <div className='flex flex-row justify-between container w-[80%] pt-28 m-auto'>
        <div className='w-[30%] mt-16 text-left'>
            <h1 className='font-bold text-4xl mb-8'>Introducing EVparivartan</h1>
            <p>A website to make your ev charging fast and simple by using renewable sources of energy!</p>
            <Link to='route'>
              <button className='bg-blue-400 text-white rounded-sm py-1 px-4 mt-6'>Explore more <i class="fa-solid fa-angle-right"></i></button>
            </Link>
        </div>
        <div>
            <img className='w-[35rem] h-96' src={electric_car}></img>
        </div>
      </div>
  )
}
