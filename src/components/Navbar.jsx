import logo from "../assets/logo.png";

import React, { useState } from 'react';
import { motion } from "framer-motion";



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="mb-20 flex items-center sticky top-0 z-50 justify-between py-3">
    <div className="flex flex-shrink-0 items-center">
      <img src={logo} alt="logo" className="w-20 mx-2" />
    </div>
  
    <div className="hidden md:flex items-center justify-center gap-4 text-1xl">
      <motion.a
      whileInView={{opacity: 1, x: 0}}
      whileFocus={{ scale: 1.2 }}
      initial={{opacity: 0 , x: 100}}
      transition={{duration:1.5}}
       href="#home">Home</motion.a>
      <motion.a
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0 , x: 100}}
      transition={{duration:1.5}}
       href="#about">About Me</motion.a>
      <motion.a
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0 , x: 100}}
      transition={{duration:1.5}}
      href="#technologies">Technologies</motion.a>
      <motion.a
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0 , x: 100}}
      transition={{duration:1.5}}
       href="#experience">Experience</motion.a>
      <motion.a
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0 , x: 100}}
      transition={{duration:1.5}}
        a href="#projects">Projects</motion.a>
      <motion.a
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0 , x: 100}}
      transition={{duration:1.5}}
        a href="#contact">Contact</motion.a>
    </div>
  
    <div className="md:hidden flex items-center">
      <button onClick={toggleMenu} className="focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
    </div>
  
    {isOpen && (
      <div className="md:hidden absolute top-16 left-3 right-3 rounded-md bg-neutral-700/50 flex flex-col items-center gap-4 text-1xl mt-4 py-2">
        <a className="hover:bg-cyan-500 rounded-full px-4 py-2  hover:text-white w-full text-center" href="#home" onClick={toggleMenu}>Home</a>
        <a className="hover:bg-cyan-500  rounded-full px-4 py-2 hover:text-white w-full text-center" href="#about" onClick={toggleMenu}>About Me</a>
        <a className="hover:bg-cyan-500  rounded-full px-4 py-2 hover:text-white w-full text-center" href="#technologies" onClick={toggleMenu}>Technologies</a>
        <a className="hover:bg-cyan-500 rounded-full px-4 py-2 hover:text-white w-full text-center" href="#experience" onClick={toggleMenu}>Experience</a>
        <a className="hover:bg-cyan-500 rounded-full px-4 py-2 hover:text-white w-full text-center" href="#projects" onClick={toggleMenu}>Projects</a>
        <a className="hover:bg-cyan-500  rounded-full px-4 py-2 hover:text-white w-full text-center" href="#contact" onClick={toggleMenu}>Contact</a>
      </div>
    )}
  </nav>
  
  )
}

export default Navbar