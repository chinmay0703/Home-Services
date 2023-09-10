
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import logo from '../../images/asy.png'
import deal1 from '../../images/cl1.jpg'
import deal2 from '../../images/fur1.jpg'
import deal3 from '../../images/clea.jpg'
import deal4 from '../../images/card1.jpg'
import './Services.css'

export default function Services() {

  const [UpModal, setsignUpModal] = useState(false)
  const openSignUp = () => setsignUpModal(true)
  const closeSignUp = () => setsignUpModal(false)

  const [InModal, setsignInModal] = useState(false)
  const openSignIn = () => setsignInModal(true)
  const closeSignIn = () => setsignInModal(false)

  const navigate = useNavigate()

  const loginstatus = sessionStorage.getItem("currentloginStatus")
  const chechLogin = () => {
    if (loginstatus != 1) {
      var drop = document.getElementById('dropdown-basic')
      drop.disabled = true
    }
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <div >
        <div onLoad={chechLogin}>
          <div className="row shadow sticky-top"  >
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
              <div className="container-fluid">
                <a className="navbar-brand"  href='/'><img src={logo} alt="" id='headerlogoProfile' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "white" }}>
                  <span className="navbar-toggler-icon" style={{ backgroundColor: "grey" }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" onClick={() => (navigate('/'))} id='headerBtn'>Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => (navigate('/Vegpizza'))} id='headerBtn'>About</a>
                    </li>

                    <li>

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
        </div >

      </div>

      <br />
      <br />
      <br />
      <br />
      <div className='container'>
        <center><div className='container py-5'> <h1> What We Offer</h1></div></center>
        <div className="row mb-4">
          <div className="col">

            <div className='card text-center'>
              <div className='card-header'>
                <img src={deal1} className='deal1 img img-thumbnail img-fluid '></img>
              </div>
              <div className="card-body">
                <p>House Cleaning</p>
                <a href="/cleaning" className='btn btn-primary text-center'>Book Now</a>
              </div>

            </div>
          </div>
          <div className="col">
            <div className='card text-center'>
              <div className='card-header'>
                <img src={deal2} className='deal1 img img-thumbnail img-fluid'></img>
              </div>
              <div className="card-body">
                <p>Furniture Assembly</p>
                <a href="/furniture" className='btn btn-primary '>Book Now</a>
              </div>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">

            <div className='card text-center'>
              <div className='card-header'>
                <img src={deal3} className='deal1 img img-thumbnail img-fluid'></img>
              </div>
              <div className="card-body">
                <p>lorem20</p>
                <a className='btn btn-primary text-center'>Book Now</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card text-center'>
              <div className='card-header'>
                <img src={deal4} className='deal1 img img-thumbnail img-fluid'></img>
              </div>
              <div className="card-body">
                <p>lorem20</p>
                <button className='btn btn-primary text-center'>Book Now</button>
              </div>

            </div>
          </div>
        </div>
      </div><br />
      <br />
      <br />
      <br />
    </div>
  )
}

