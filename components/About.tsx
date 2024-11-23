
import Image from "next/image";
import Socials from "./Socials";
import { useRef } from "react";
import { motion, AnimatePresence} from 'framer-motion'

export default function About() {

  return (
   
      <div
        className="pt-[7rem] lg:pt-[10rem]  text-primary/60">
        <h1 className=" text-2xl font-medium mb-10 md:top-9">About <span className="text-primary/100 ">Me.</span></h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:w-[50%]">
              <h1 className="">
                Welcome to my web development realm! Im Abdurrazaq Awwal<span className="text-primary/100">|Poma|</span>
              </h1>
              <p className="tracking-wide leading-8">
              I am a passionate web developer who is proficient in JavaScript, HTML, CSS, SCSS, Tailwind, Bootstrap, React.js, and Next.js. With a passion for crafting dynamic websites and a keen eye for design, I specialize in creating visually appealing, seamless user experiences and crafting exceptional online experiences. Lets collaborate to bring your digital vision to life with cutting-edge technology and design.
              </p>
          </div>

          <div className="flex flex-col gap-y-10">
            <div className="">
              <Image src={'/about.jpg'} alt="about" width={300} height={300} className="rounded hidden md:flex "/>
            </div>
            <div>
              <Socials/>
            </div>
          </div>
        </div>
      </div>
    
    
  )
}
