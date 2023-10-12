import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Images/logo-main.png'

function Navbar() {
  return (
    <>
     <div className='container-fluid border-bottom py-1 bg-white  sticky-top'>
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-4">
               <img src={Logo} alt="" width={40}/>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="navbar-list">
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/products'>Products</Link>
                <Link to='/'>Gallery</Link>
                <Link to='/'>Contact</Link>
              </div>
            </div>
            <div className="col-lg-4">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar