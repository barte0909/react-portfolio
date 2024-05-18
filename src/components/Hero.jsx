import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilePic.jpg";
import { motion } from "framer-motion";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const container = (delay) => ({
    hidden: {x: -100 , opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5 , delay: delay},
    },
});
const hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="'flex flex-col items-center lg:items-start ">
          
         
    
             
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                 className="pb-2 text-6xl  font-thin  tracking-tight lg:mt-2 "
                 ><span>Hi,  </span>Joshua V. Barte</motion.h1>
                <motion.span
                 variants={container(0.5)}
                 initial="hidden"
                 animate="visible"
                className="bg-gradient-to-r from-cyan-300  via-slate-500 to-pink-500 bg-clip-text text-3xl tracking-tight text-transparent">Web Developer</motion.span>
                <motion.p 
                 variants={container(1)}
                 initial="hidden"
                 animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                 <motion.div
                   variants={container(1.3)}
                   initial="hidden"
                   animate="visible"
                 className="flex items-center justify-start gap-4 pb-10 text-2xl">
                        <FaLinkedin />
                        <FaGithub/>
                        <FaSquareXTwitter/>
                        <FaInstagram/>

                </motion.div>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img 
                initial={{x : 100 , opacity: 0}}
                animate={{x: 0 , opacity: 1}}
                transition={{duration: 1 , delay: 1.4}}

                className="w-96 rounded-md" src={profilePic} alt="Joshua barte pogi" />
            </div>
        </div>
      

        </div>
       
    </div>
  )
}

export default hero