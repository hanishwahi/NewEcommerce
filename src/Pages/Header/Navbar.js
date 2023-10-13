import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Logo from '../../Images/logo-main.png'
import { useSearchParams } from "react-router-dom";

function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useParams();

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
            <div className="col-lg-2 col-2 col-md-1 col-sm-2">
              <img src={Logo} alt="" width={40} />
            </div>
            <div className="col-lg-5 col-md-7 col-sm-10 align-self-center nav-hide">
              <div className="navbar-list">
                <Link onClick={scrollToHome} to='/'>Home</Link>
                <Link onClick={scrollToHome} to='/'>About</Link>
                <Link onClick={scrollToHome} to='/products'>Products</Link>
                <Link onClick={scrollToHome} to='/'>Gallery</Link>
                <Link onClick={scrollToHome} to='/'>Contact</Link>
              </div>
            </div>
            <div className="col-lg-4 col-7 col-md-4 col-sm-9 nav-search">
              <input type="search" name="" id="" placeholder='search..' onSubmit={handleSubmit} onChange={(e) => setSearchParams(e.target.value)} />
            </div>
            <div className="col-lg-1 col-3 col-md-12 col-sm-3 align-self-center text-end cart-wishlist">
              <i className="fa-solid fa-cart-shopping"></i>
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="col-lg-12 hide-hamburger">
              <div className="hamburger">
                <i className="fa-solid fa-bars"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i> 
              </div>
          
              <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                <div className="navbar-list-menu">
                  <Link onClick={scrollToHome} to='/'><p>Home</p></Link>
                  <Link onClick={scrollToHome} to='/'><p>About</p></Link>
                  <Link onClick={scrollToHome} to='/products'><p>Products</p></Link>
                  <Link onClick={scrollToHome} to='/'><p>Gallery</p></Link>
                  <Link onClick={scrollToHome} to='/'><p>Contact</p></Link>
                </div>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar