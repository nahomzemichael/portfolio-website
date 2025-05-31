"use client"
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/magic-button'


const Footer = () => {
  const sendEmail = () => {
      const recipient = "nahomworkueshete@gmail.com";
      const subject = "";
      const body = "";
      const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(url, "_blank");
    };
  return (
    <footer className= "w-full pt-20 mb-15 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg" 
          alt="grid"
          className="w-full h-full opacity-50"
          
          
        />
      </div>

      <div className = "flex flex-col items-center">
        <h1 className="heading text-3xl font-bold text-center mb-5  lg:max-w-[45vw]">
          let&#39;s take <span className="text-purple">your</span> digital presence to the next level
        </h1>

        <a href="mailto:nahomworkueshete@gmail.com">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow/>}
            position="right"
            sendEmail={sendEmail}
           />
        </a>

      </div>

      <div className="flex mt-16 flex-col md:flex-row justify-between items-center">
        <p className="text-center text-sm md:font-normal font-light">Copyright &#169; 2025</p>
      </div>
      
    </footer>
  )
}

export default Footer
