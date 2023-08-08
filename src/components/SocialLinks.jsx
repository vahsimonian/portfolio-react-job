import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-1/4 px-4'>
          <a
            href=''
            className='flex justify-between items-center w-full text-white'
          >
            <>
              LinkedIn <FaLinkedin />
            </>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
