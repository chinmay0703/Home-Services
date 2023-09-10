import React from 'react'
import { useNavigate } from 'react-router'
import {motion} from  'framer-motion'
import './Footer.css'
import facebook from '../../images/facebook.png'
import youtube from '../../images/youtube.png'
import instagram from '../../images/instagram.png'
import ios from '../../images/ios.svg'
import playstore from '../../images/playstore.png'
import fssai from '../../images/fssai.svg'


export default function Footer() {
  const navigate = useNavigate()
  return (
    <div className='footer' style={{ overflowX: "hidden" }}><br />
      <div className="row linkRow">
        <div className="col">
          <table className='table-responsive'>
            <th><h5>About</h5></th>
            <tbody>
              <tr><a className='footerLink' onClick={()=>(navigate('/aboutus'))}>About Us</a></tr>
            </tbody>
          </table>
        </div>
        <div className="col">
          <table>
            <th><h5>Legal</h5></th>
            <tbody>
              <tr> <a className='footerLink'>Terms and Conditions</a></tr>
            </tbody>
          </table>
        </div><div className="col">
          <table>
            <th><h5>Social Media</h5></th>
            <tbody>
              <tr style={{display:'inline'}}>
             <span> <td> <a className='footerLink' href="https://www.facebook.com/" target="_blank">&nbsp;<img src={facebook} alt='Facebook'/></a></td></span>
             <span><td> <a className='footerLink' href="https://www.youtube.com/" target="_blank">&nbsp;<img src={youtube} alt='Facebook'/></a></td></span>
             <span><td> <a className='footerLink' href="https://www.instagram.com/" target="_blank">&nbsp;&nbsp;<img src={instagram} alt='Facebook'/></a></td></span>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <div style={{marginLeft:"35%"}}>
       <a href='#' target="_blank" >
      <img src={ios} alt='ios' style={{height:"50px"}}/ >&nbsp;&nbsp;</a>
      <a href='#' target="_blank" >
      <img src={playstore} alt='Playstore' style={{height:"50px"}}/></a>
      
      </div>
      <br/>
     
      <br />
      <div>
       
        <h6 className='info'>© 2022 Home-Services India. All rights reserved. License Number: 45781256894512</h6>
      </div>
      <br />
    <div style={{marginLeft:"45%",marginBottom:"2%"}}>
     </div>
      {/* <br /> */}
    </div>

    
  )
}
