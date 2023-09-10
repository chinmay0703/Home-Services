import { motion} from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import logo from '../../images/asy.png'
import './About.css'
import pic from "../../images/about.png";

export default function About() {

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
                <a className="navbar-brand" href='/'><img src={logo} alt="" id='headerlogoProfile' /></a>
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
                    {/* <li className="nav-item">
                      <a className="nav-link" onClick={() => (navigate('/beverages'))} id='headerBtn'>Contact</a>
                    </li> */}
                    <li>
                      
                    </li>
                  </ul>
                  <div className=''>
                    <motion.button className='btn btn-primary SignButton'
                      whileHover={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                      whileTap={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                      onClick={()=>(navigate('/signin'))}
                    >Sign In</motion.button>
                  </div>
                  <div className=''>
                    <motion.button className='btn btn-primary SignButton float-start'
                      whileHover={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                      whileTap={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                      onClick={()=>(navigate('/signup'))}
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
        <div className='row'>
            <div className='col'>
                <img src={pic} className='img img-fluid'></img>
            </div>
        <div className='col text-center'>
            <div className='row'>
            <h1 className='py-5'>About Us</h1>
            </div>
            <div className='row'>
                <h3 className='py-2'>Who We Are</h3>
                <p>We’ll take the time to discuss your preferences and priorities with you before your first home cleaning service and combine them with methods to provide the best clean possible by our residential housekeepers.</p>
            </div>

        </div>
        </div>
      </div>
    </div>
  )
}

