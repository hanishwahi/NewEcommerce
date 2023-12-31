import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../Firebase/Firbase'

import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'


const auth = getAuth(app)

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // const handleSubmit= (e)=>{
    //     e.preventDefault()
    //     const data=  {name, email, password} 
    //     const existingData = JSON.parse(localStorage.getItem('data')) || [];
    //     const updatedData = [...existingData, data]; 
    //     localStorage.setItem('data', JSON.stringify(updatedData));
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password.length < 6) {
            alert("Minimum 6 characters password is required");
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {                    
                    console.log( userCredential);
                })
                
        }
        
        setName("");
        setEmail("");
        setPassword("");
    }
    return (
        <>
            <Header />

            <section className="" style={{ backgroundColor: "eee" }}>
                <div className="container-xl">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h4 fw-bold my-4">Sign up</p>
                                            <form className="mx-1 mx-md-4">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" placeholder='Name'
                                                            onChange={(e) => { setName(e.target.value) }} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" placeholder='Email'
                                                            onChange={(e) => { setEmail(e.target.value) }} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" placeholder='Password'
                                                            onChange={(e) => { setPassword(e.target.value) }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4cd" className="form-control" placeholder='Repeat Password' />
                                                    </div>
                                                </div> */}

                                                <div className="form-check d-flex justify-content-center mb-1">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-check-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>
                                                <div className='ps-4'>
                                                    <p>Already have a account? <Link to='/login'>login</Link></p>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button onClick={handleSubmit} type="button" className="button btn-lg">Signup</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Signup