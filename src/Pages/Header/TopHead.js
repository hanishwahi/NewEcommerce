import React from 'react'
import { Link } from 'react-router-dom'

function TopHead() {
    return (
        <>
            <div className='container-fluid top-head-bg'>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-10 top-head-text">
                            <p>+91 9876543210</p>
                        </div>
                        <div className="col-lg-2 top-head-text">
                            <Link>Login/Signup</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopHead