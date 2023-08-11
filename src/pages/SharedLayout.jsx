import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SocialLinks from '../components/SocialLinks'

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <SocialLinks />
      <Outlet />
    </div>
  )
}

export default SharedLayout
