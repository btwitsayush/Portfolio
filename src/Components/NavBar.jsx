import React, { useState } from "react";
import Logo from "../Assests/Images/logo.avif"
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";


const NavBar = () => {
  const[menu,setMenu]=useState(true);
  const navItems=[
    {
      id:1,
      name:"Home",
      link:"/"
    },
    {
      id:2,
      name:"About",
      link:"/about"
    },
    {
      id:3,
      name:"Projects",
      link:"/project"
    },
    {
      id:4,
      name:"Contact",
      link:"/contact"
    },
  ]
  return (
    <>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">

        {/*container too divide div into left and right part   */}
        <div className="flex justify-between items-center h-16">
        {/* this is left div to display logo */}
            <div className="flex space-x-2">
                <img src={Logo} alt="" className="h-12 w-12 rounded-full"/>
                <h1 className="font-semibold text-xl cursor-pointer">Ayu
                  <span className="text-green-500 text-2xl">sh</span>
                  <p className="text-sm">Web Developer</p>
                  </h1>
            </div>
            {/* this is right div to display navigation */}
            <div>
                <ul className="hidden md:flex space-x-8">

                  {/* directly doing destructuring here {id,name} we can also take elem as a parameter then we can acess elem.id and elem.name */}
                    {navItems.map(({id,name})=>{
                      return(
                        <li key={id} className="hover:scale-105 duration-200 cursor-pointer">{name}</li>
                      )

                    })}
                </ul>
                {/* toggling to show and close menu using useState*/}
                <div className="md:hidden"
                 onClick={()=>setMenu(!menu)} >
                {menu ? <FiMenu size={24} />:<AiOutlineClose size={24} />}
                </div>
            </div>
        </div>
        {/* mobile device navbar */}

        {!menu && (
        <div >
        <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl bg-red-500" >
        {navItems.map(({id,name})=>{
                      return(
                        <li key={id} className="hover:scale-105 duration-200 cursor-pointer">{name}</li>
                      )

                    })} 
                </ul>     
        </div>
        )}
      </div>
    </>
  );
};
export default NavBar;
