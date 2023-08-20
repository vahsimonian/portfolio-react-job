import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { portfolios } from '../data'

const Portfolio = () => {
  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white sm:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <NavLink to={'/'} className='mb-2 underline hover:no-underline'>
          <p>back home</p>
        </NavLink>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, linkTo, desc }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <Link to={`${linkTo}`} target='_blank'>
                <img
                  src={src}
                  alt=''
                  className='rounded-md duration-200 hover:scale-105'
                />
              </Link>
              <p className='font-bold ml-2'>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
