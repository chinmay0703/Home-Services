import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import logo from '../../images/asy.png'
import signupImg from '../../images/p5.jpg'
import URL from '../URL/Url'
import '../Signin/Sign.css'
import './Furniture.css'
 
export default function Furniture() {
    const scroolUp = () => {
        window.scrollTo(0, 0)
    }

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setemail] = useState('')
    const [phoneNo, setphoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [role, setrole] = useState('User')

    const SignUp = () => {
        if (password != ConfirmPassword) {
            toast.error("Please confirm password")
        } else {
            const body = {
                firstName, lastName, email, phoneNo, password, role
            }
            const url = `${URL}user/signup`
            axios.post(url, body).then((response) => {
                const result = response.data
                console.log(result);
                if (result.status == "success") {
                    toast.success("Registered Successfully")
                    navigate('/signin')
                } else {
                    toast.error(result['error'])
                }
            })
        }
    }
    return (
        <motion.div style={{ overflowX: "hidden" }} onLoad={scroolUp} className='fixedcontent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="row shadow sticky-top"  >
                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand"  href='/'
                        ><img src={logo} alt="" id='headerlogoProfile' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "white" }}>
                            <span className="navbar-toggler-icon" style={{ backgroundColor: "grey" }}></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" onClick={() => (navigate('/'))} id='headerBtn'>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => (navigate('/aboutus'))} id='headerBtn'>About</a>
                                </li>
           
                            </ul>
                            <div className=''>
                                <motion.button className='btn btn-primary SignButton'
                                    whileHover={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                                    whileTap={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                                    onClick={() => (navigate('/signin'))}
                                >Sign In</motion.button>
                            </div>
                            <div className=''>
                                <motion.button className='btn btn-primary SignButton float-start'
                                    whileHover={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                                    whileTap={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                                    onClick={() => (navigate('/signup'))}
                                >Sign up</motion.button>
                            </div>

                        </div>
                    </div>
                </nav>
            </div >
            <br />
            <div style={{ backgroundColor: "whitesmoke" }}>
                <br />
                <div className='container' style={{ backgroundColor: "white", minHeight: "500px" }}>
                    <br />
                    <center><h3 className='py-3'>Home - Cleaning</h3></center> <hr />
                    <div className='row'>
                        <div className="row">
                            <center><img src={signupImg} className="Signup img img-fluid furnitureImg" alt="" style={{ marginTop: "4%" }} /></center>
                        </div>
                        <div className="row" style={{ padding: "1rem" }}>

                            <div className="form">
                                <form action="JavaScript:SignUpasd()">

                                    <div className="mb-3">
                                        <label className="label-control ">Phone Number   (excluding postal code)</label>
                                        <input onChange={e => (
                                            setphoneNumber(e.target.value)
                                        )}
                                            maxLength="10" minLength="10"
                                            required="true" type="tel" className="form-control shadow" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="label-control ">Roomes </label>
                                        <input onChange={e => (
                                            setphoneNumber(e.target.value)
                                        )}
                                            required="true" type="number" className="form-control shadow" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="label-control ">Date </label>
                                        <input onChange={e => (
                                            setphoneNumber(e.target.value)
                                        )}
                                            required="true" type="date" className="form-control shadow" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="label-control ">Address </label>
                                        <input onChange={e => (
                                            setphoneNumber(e.target.value)
                                        )}
                                            required="true" type="text" className="form-control shadow" />
                                    </div>
                                    <div>
                                        <h6 style={{ color: "grey" }}>All Rights reserved with @Home-Services</h6>
                                    </div>
                                    <div className="col">
                                        <motion.button className='float-end UpBtn '
                                            whileHover={{ backgroundColor: "rgb(7, 84, 133)", color: "white" }}
                                            onClick={SignUp}
                                        >Book</motion.button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </motion.div>
    )
}
