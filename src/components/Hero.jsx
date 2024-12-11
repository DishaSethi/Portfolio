// import React from 'react';
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import jason from "../assets/jason-root.webp";

import { RiGithubFill,RiLinkedinFill } from "react-icons/ri";

const textVariants={
    hidden:{opacity:0,y:50},
    visible:{opacity:1, y:0, transition:{duration:0.8, ease:"easeOut"}}
}

const containerVariants={
    hidden:{opacity:1},
    visible:{
        opacity:1,
        transition:{
            staggerChildren:0.3,
        }
    }
}

const imageVariants={
    hidden:{clipPath:"inset(0 50% 0 50%" },
    visible:{
        clipPath:"inset(0 0% 0 0%",
        transition:{duration:1.2, ease:"easeInOut"},
    }

}

const iconVariants={
    hidden:{opacity:0, scale:0},
    visible:(delay=0)=>(
        {
            opacity:1,
            scale:1,
            transition:{
                duration:0.5,
                ease:"easeOut",
                delay:delay,
            }
        }
    )
}
const Hero = () => {
  return (
   <section>
    <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">

        
    <motion.div 
        className="w-full md:w-1/2 p-8"
        initial="hidden"
        animate="visible"
        variants={imageVariants}>
            <img src={jason} alt="Jason Root" width={400} height={400}
            className="rounded-3xl" />


            <div className="flex space-x-6 mt-6 justify-center">
                <motion.a href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                initial="hidden"
                whileInView="visible"
                custom={1.0}
                variants={iconVariants}>

                    <RiLinkedinFill size={36} className="text-white hover:text-blue-600 transition duration-300"/>

                </motion.a>

                <motion.a
              href="https://github.com/jason-root"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              initial="hidden"
              whileInView="visible"
              custom={1.2}
              variants={iconVariants}
            >
              <RiGithubFill size={36} className="text-white hover:text-gray-600 transition duration-300" />
            </motion.a>

            </div>

        </motion.div>

        <motion.div className="w-full md:w-1/2 p-8"
        initial="hidden"
        animate="visible" 
        variants={containerVariants}>
            <motion.h1 
            className="text-2xl md:text-3xl lg:text-5xl my-14"
            variants={textVariants}>
                {HERO_CONTENT.greeting}

            </motion.h1>
            <motion.p className="text-xl md:text-2xl lg:text-4xl mb-4"
            variants={textVariants}>
                {HERO_CONTENT.introduction}


            </motion.p>
            <motion.p className="text-xl md:text-2xl lg:text-4xl "
            variants={textVariants}>
                {HERO_CONTENT.description}


            </motion.p>

            <motion.a className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl"
            href={HERO_CONTENT.resumeLink}
            download
            rel="noopener noreferrer"
            target="_blank"
            variants={textVariants}>
                {HERO_CONTENT.resumeLinkText}

            </motion.a>

        </motion.div>

    </div>
   </section>
  );
}

export default Hero;
