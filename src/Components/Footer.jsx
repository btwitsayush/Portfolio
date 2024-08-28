import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
          <div className='flex flex-col items-center justify-center'>
            <div className='relative flex space-x-4 cursor-pointer text-2xl md:text-3xl '>
              <a href="https://www.linkedin.com/in/-ayush-srivastava" target="_blank">
                <FaLinkedin className="hover:scale-110 duration-200" />
              </a>
              <a href="mailto:srivastavaayush6393@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdMarkEmailUnread className="hover:scale-110 duration-200" />
              </a>
              <a href="https://www.instagram.com/ayush.srivastava.12/" target="_blank">
                <BsInstagram className="hover:scale-110 duration-200"/>
              </a> 
            </div>
            <div className='mt-4 border-t border-gray-700 pt-6 flex flex-col items-center'>
              <p className='text-l'>
                 &copy; All rights reserved.
              </p>
              <p className='text-l mt-2'>
                 Made by Ayush Srivastava 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
