
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../Firebase/Firbase'
import React, {useState} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const auth = getAuth(app)

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError]= useState(false)


    const Navigate= useNavigate();

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            console.log("signin successfull")
            Navigate("/")
        }).catch((err) => {
            console.log("err", err)
            setError(true)
        }) 
    }
    return (
        <>
            <Header />
            <section className="py-5">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>


                                <div className="form-outline mb-4">
                                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>


                                <div className="form-outline mb-3">
                                    <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>
 
                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to='/' className="text-body">Forgot password?</Link>
                                </div>


                                {
                                    error   && <h1 className='h5 text-danger'>Invalid Credentials</h1>
                                }
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button onClick={signinUser} type="button" className="button btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to='/signup'
                                        className="">Register</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Login