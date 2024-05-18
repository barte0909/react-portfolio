
// import aboutme from "../assets/aboutme.jpg";
import { motion } from "framer-motion";
import { ABOUT_ME } from "../constants";
import Lottie from "lottie-react";
import animationData from '../assets/Animation - 1716018441732 (1).json';



const About = () => {
  return (
    <div className="boder-b border-neutral-900 pb-4">
        <motion.h1
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0 , x: -100}}
         transition={{duration:1.5}} className="my-10 text-center text-4xl text-white">About 
        <span className=" text-neutral-400"> Me</span> 
        </motion.h1>

        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity: 1 , x: 0}}
            initial={{opacity: 0 , x: -100}}
            transition={{duration: 0.5}}

            className="w-full lg:w-1/2 lg:p-2">
                <div className="flex items-center justify-center">

                {/* <img className="rounded-2xl w-80" src={aboutme} alt="about" /> */}

                <div className="w-[500px] ">
                <Lottie animationData={animationData} />
                </div>
          

                </div>

            </motion.div>
            <motion.div
             whileInView={{opacity: 1 , x: 0}}
             initial={{opacity: 0 , x: 100}}
             transition={{duration: 0.5}}
            className="w-full lg:w-1/2">
                  <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-1">{ABOUT_ME}</p>

                  </div>

                </motion.div>

        </div>
    </div>
  )
}

export default About