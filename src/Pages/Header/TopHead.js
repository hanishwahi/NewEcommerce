import React from 'react'
import { Link } from 'react-router-dom'

function TopHead() {
    return (
        <>
            <div className='container-fluid top-head-bg'>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-4 col-12 col-sm-8 top-head-text">
                            <div className="row">
                                <div className="col-4"><p>Free Delivery</p></div> 
                                <div className="col-4"><p>Free Delivery</p></div> 
                                <div className="col-4"><p>Free Delivery</p></div>  
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 col-sm-4
                         text-end">
                            <div className="login-signup"> <Link>Login/Signup</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopHead