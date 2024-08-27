import React from 'react';
// Social media icons
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
// current technology icons
import { GrReactjs } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
// react typed library
import { ReactTyped } from "react-typed";
import Logo from "../Assests/Images/logo.avif"
import { Link } from 'react-router-dom';


const Home=()=>{
  return (
    <>
    {/* main conatiner div */}
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        {/* container for left and right div */}
        <div className="flex flex-col md:flex-row">

        {/* left div */}

        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 md:space-y-4 order-2 md:order-1">
           <span>Welcome !To my Portfolio </span> 
           <div className="flex space-x-2 md:space-x-3 text-2xl md:text-4xl">
           <h1 className="text-xl md:text-3xl">Hello I'm a</h1>
           {/* <span className="text-red-700 font-bold">Developer</span> */}
           <ReactTyped className="text-red-700 font-bold text-2xl md:text-4xl"
          strings={["Developer","Programmer","Tech Enthusiast","Continuous Learner","Problem Solver"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
           </div>

           <p className="text-sm md:text-md text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facilis rerum doloremque accusantium? Pariatur aut laboriosam, sunt eum beatae veniam.</p>


        {/* Container for social-media and technology div */}
        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">

           {/* social media icons */}

          <div className="space-y-3">
           <h1 className="font-semibold text-xl">Connect with me</h1>
           <div className="flex space-x-5 cursor-pointer text-2xl md:text-3xl  pl-6 md:pl-2">
            {/* we are using anchor tag b/c Link tag can be used only for website urls */}
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
        </div>

           {/* Current technology working on */}

           <div className="space-y-3">
           <h1 className="font-semibold text-xl">Currently working on</h1>
           <div className="flex space-x-5 cursor-pointer text-2xl md:text-3xl pl-4">
           <SiMongodb className="hover:scale-110 duration-200"/>
           <SiExpress className="hover:scale-110 duration-200"/>
           <GrReactjs className="hover:scale-110 duration-200"/>
           <FaNodeJs className="hover:scale-110 duration-200"/>
           </div>
           </div>
           </div>

    

        </div>
        {/* right div */}
        <div className="md:w-1/2 md:ml-48 mt-10 md:mt-16 order-1 md:order-2">
            <img src={Logo} alt="" className='rounded-full md:w-[450px] md:h-[450px]' />
        </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Home