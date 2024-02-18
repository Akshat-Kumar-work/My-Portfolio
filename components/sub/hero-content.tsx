"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer 
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Namaste
            </span>{" "}
            
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
         Welcome to my portfolio! I'm Akshat Kumar, a passionate final-semester BTech Computer Science student with a keen interest in cutting-edge technologies. Throughout my academic journey, I've delved deep into the world of MERN stack development, mastering its intricacies and applying them creatively to various projects.

With a foundation built on solid theoretical knowledge and practical expertise, I've had the privilege of completing three enriching internships and a freelance project. Currently, I'm immersed in the fascinating realm of WebRTC technology, exploring its capabilities and pushing boundaries to create seamless real-time communication solutions.

Driven by a relentless curiosity and a thirst for knowledge, I'm eagerly diving into the world of Next.js 14, poised to unlock its full potential and integrate it seamlessly into my skill set.

As I approach the culmination of my academic journey, I am excited about the opportunities that lie ahead and the chance to contribute meaningfully to the ever-evolving landscape of technology. Join me as I embark on this exhilarating journey of innovation and discovery.
      
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-1 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
           Engineer by Degree & Passion.
        </motion.a>
    
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
