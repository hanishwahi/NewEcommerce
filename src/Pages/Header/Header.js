import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import TopHead from './TopHead'

function Header() {
  return (
    <>
      <TopHead />
      <Navbar />
    </>
  )
}

export default Header