import React, { useState } from 'react'
import HeroImage from '../heroimage.jpg'
import { TbArrowNarrowRight } from 'react-icons/tb'

const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm not a fullstack developer
          </h2>
          <p className='text-gray-500 py-4 max-w-d'>
            Dedicated JavaScript React developer since January 2022, proficient
            in web development through diverse projects. Continuously enhancing
            skills, adept at crafting dynamic and responsive interfaces. Eager
            to contribute innovative solutions to create seamless user
            experiences.
          </p>
          <div>
            <button className='group text-white w-fit px-4 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-900 cursor-pointer gap-1 '>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <TbArrowNarrowRight size={20} />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt='my profile'
            className='rounded-2xl mx-auto w-2/3 md:w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
