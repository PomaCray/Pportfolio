
import Image from "next/image";
import Socials from "./Socials";
import { useRef } from "react";
import { motion, AnimatePresence} from 'framer-motion'

export default function About() {

  return (
   
      <div
        className="pt-[2rem] lg:pt-[10rem]  text-primary/60">
        <h1 className=" text-2xl font-medium mb-10 md:top-9">About <span className="text-primary/100 ">Me.</span></h1>
        <div

        className="flex flex-col md:flex-row justify-between">
          <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{delay: 0.2}}
            viewport={{ once: true }}
          className="flex flex-col md:w-[50%]">
              <h1 className="">
                Welcome to my web development realm! Im Abdurrazaq Awwal<span className="text-primary/100">|Poma|</span>
              </h1>
              <p className="tracking-wide leading-8">
                    I am a passionate Web3 developer proficient in JavaScript, HTML, Solidity, Tailwind, Node.js, React.js, and Next.js. With expertise in smart contract development, blockchain integration, and marketing, I craft dynamic, user-focused websites and decentralized solutions. Let’s collaborate to bring your digital vision to life through innovation, seamless design, and Web3 technology.
              </p>
          </motion.div>

          <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{delay: 0.2}}
            viewport={{ once: true }}
          className="flex flex-col gap-y-10">
            <div className="">
              <Image src={'/about.jpg'} alt="about" width={300} height={300} className="rounded hidden md:flex "/>
            </div>
            <div>
              <Socials/>
            </div>
          </motion.div>
        </div>
      </div>
    
    
  )
}
