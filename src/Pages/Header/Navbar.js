import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Logo from '../../Images/logo-main.png'
import { useSearchParams } from "react-router-dom";


function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const params= useParams();

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  function handleSubmit(e) {
    e.preventDefault(); 
    setSearchParams(params);
  }

  return (
    <>
      <div className='container-fluid sticky-top py-1   border-bottom bg-white'>
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-2">
              <img src={Logo} alt="" width={40} />
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="navbar-list">
                <Link onClick={scrollToHome} to='/'>Home</Link>
                <Link onClick={scrollToHome} to='/'>About</Link>
                <Link onClick={scrollToHome} to='/products'>Products</Link>
                <Link onClick={scrollToHome} to='/'>Gallery</Link>
                <Link onClick={scrollToHome} to='/'>Contact</Link>
              </div>
            </div>
            <div className="col-lg-4 nav-search"> 
              <input type="search" name="" id="" placeholder='search..' onSubmit={handleSubmit} onChange={(e)=> setSearchParams({search:e.target.value})}/>
            </div>
            <div className="col-lg-1 align-self-center text-end cart-wishlist">
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar