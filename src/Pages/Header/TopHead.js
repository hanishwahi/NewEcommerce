import React from 'react'
import { Link } from 'react-router-dom'

function TopHead() {
    return (
        <>
            <div className='container-fluid top-head-bg'>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-12 col-sm-8 top-head-text">
                            <div className="row">
                                <div className="col-4"><p><i class="fa-solid fa-truck-fast"></i> Free Shipping</p></div> 
                                <div className="col-4"><p><i class="fa-solid fa-truck"></i> Cash on Delivery</p></div> 
                                <div className="col-4"><p><i class="fa fa-exchange" aria-hidden="true"></i> Return Policy</p></div>  
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-12 col-sm-12
                         text-end">
                            <div className="login-signup"><i class="fa-regular fa-user" style={{color:"#fff"}}></i> <Link to='/signup'>Account & Lists</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopHead