import React,{useContext, useRef, useState} from 'react'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

import './contact.css'
import ph from '../../img/phone.png';
import em from '../../img/email.png';
import ad from '../../img/address.png';
import { ThemeContext } from '../../context';
import Seperator from '../Seperator/Seperator';
function Contact() {
    init("user_GANchS5DfGBcLPfzz5TAN");
    const formRef = useRef()
    const [done,setdone] =useState(false)
    const theme =useContext(ThemeContext)
    const darkMode=theme.state.darkMode;
    const handleSubmit =(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_g8grzio', 
        'template_mgxhh5s',
         formRef.current, 
         'user_GANchS5DfGBcLPfzz5TAN')
        .then((result) => {
            console.log(result.text);
            setdone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div id="contact" className="c">
            <Seperator/>
            <div className="c-bg"></div>
            <div className="c-wrapper"> 
          <div className="c-left">
            <h3 className="c-title">Contact Us</h3>
            <div className="c-info">
                <div className="c-info-item">
                    <img src={ph} alt="" className="c-icon" />
                    799xxxxxxx
                </div>
                <div className="c-info-item">
                    <img src={em} alt="" className="c-icon"/>
                    abc123xyz0622@gmail.com
                </div>
                <div className="c-info-item">
                    <img src={ad} alt="" className="c-icon" />
               xyz Colony-4520 Bihar India.
                </div>
            </div>
          </div>
          <div className="c-right">
              <p className="c-desc">
                  <b>Having a Doubt!!! </b>Get in touch and let us solve your queries. 
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                  <input  style={{backgroundColor: darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
                  <input  style={{backgroundColor: darkMode && "white"}} type="email" placeholder="Email " name="user_email" />
                  <input  style={{backgroundColor: darkMode && "white"}} type="number" placeholder="Phone " name="user_email" />
                  <input  style={{backgroundColor: darkMode && "white"}} type="text" placeholder="Qualification" name="user_subject" />
                  <input  style={{backgroundColor: darkMode && "white"}} type="text" placeholder="Preferred Course" name="user_subject" />
                  <textarea  style={{backgroundColor: darkMode && "white"}} cols="30" rows="5" placeholder="Your Query" name="message"></textarea>
                  <button>Submit Query</button>
                  {done && "Thanks you...."}
              </form>
          </div>
          {/* <div className="download" >
              <a style={{color: darkMode && "white"}} download href={require('../assets/MDResume.pdf').default}>
              <i class="fas fa-cloud-download-alt download-icon"></i>
                  Download Resume
                  </a>
          </div> */}
          </div>
        </div>
    )
}

export default Contact
