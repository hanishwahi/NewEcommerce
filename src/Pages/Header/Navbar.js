import React from 'react'
import { Link} from 'react-router-dom'
import Logo from '../../Images/logo-main.png'
import { useSearchParams } from "react-router-dom";

function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams(); 

  function handleSubmit(e) {
    e.preventDefault(); 
  }
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <div className='container-fluid py-1 border-bottom bg-white'>
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-1 col-3 col-md-2 col-sm-2">
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
            <div className="col-lg-5 col-12 col-md-7 col-sm-7 nav-search order-2 order-sm-0 mt-2 mt-sm-0">
              <form onSubmit={handleSubmit} style={{width:"100%"}}>
                <input type="search" name="" id="" placeholder='search..' onChange={(e) => setSearchParams({ q:e.target.value })} />
              </form>
            </div>
            <div className="col-lg-1 col-7 col-md-2 col-sm-2 align-self-center text-end cart-wishlist ">
              <i className="fa-solid fa-cart-shopping"> cart</i> 
            </div>
            <div className="col-lg-12 col-sm-1 col-2 hide-hamburger">
              <div className="hamburger">
                <i className="fa-solid fa-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
              </div>

              <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
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