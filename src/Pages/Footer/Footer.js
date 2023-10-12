import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
     <>
     <div className="container-fluid top-head-bg">
        <div className="container-xl">
            <div className="row">
                <div className="col-lg-3">
                    <div>
                        <h1 className='text-white h4'>Logo</h1>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div>
                        <h1 className='text-white h4'>Quick Links</h1>
                        <div className='footer-list'>
                            <Link to='/'>Home</Link>
                            <Link to='/'>About</Link>
                            <Link to='/'>Products</Link>
                            <Link to='/'>Gallery</Link>
                            <Link to='/'>Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div>
                        <h1 className='text-white h4'>Quick Links</h1>
                        <div className='footer-list'>
                            <Link to='/'>Home</Link>
                            <Link to='/'>About</Link>
                            <Link to='/'>Products</Link>
                            <Link to='/'>Gallery</Link>
                            <Link to='/'>Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div>
                        <h1 className='text-white h4'>Quick Links</h1>
                        <div className='footer-list'>
                            <Link to='/'>Home</Link>
                            <Link to='/'>About</Link>
                            <Link to='/'>Products</Link>
                            <Link to='/'>Gallery</Link>
                            <Link to='/'>Contact</Link>
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>
     </div>
     </>
  )
}

export default Footer