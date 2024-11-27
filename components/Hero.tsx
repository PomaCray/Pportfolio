'use client'
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import ProjectsBtn from './ProjectBtn';
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
  return (
    
   <motion.div 

   className="container mx-auto mt-72 sm:mt-28 flex justify-between  w-full">
        <div className="tracking-tight font-mono flex flex-col text-primary/60">
          <motion.div
            initial={{opacity:0, x:15}}
            animate={{opacity:1, x:0}}
            whileInView="visible"
            transition={{delay:0.2}}
            viewport={{ once: true }}
          className=''>
            <h1 className="text-2xl sm:text-3xl font-medium ">Hello, my name is</h1>
              <p className="text-4xl sm:text-5xl font-bold ">Abdurrazaq Awwal<span className="text-primary/100">|Poma|</span></p>
              <h1 className="text-xl sm:text-3xl font-medium mb-1  flex gap-x-2.5 "> Im a 
              <span className='text-xl sm:text-3xl text-primary/100'> <Typewriter options={{strings: ['Front-end Web dev', 'Freelancer','content writer', 'MOD'],autoStart: true,loop: true,}} /> </span>
              </h1>
              <p className="text-xl sm:text-3xl font-medium "> Transforming Ideas <br /> Into{''} <span className="text-primary/100">Digital Reality</span></p>
          </motion.div>
          <motion.div
            initial={{opacity:0, x:-15}}
            animate={{opacity:1, x:0}}
            whileInView="visible"
            transition={{delay:0.5}}
            viewport={{ once: true }}
          className='mt-10'>
            <ProjectsBtn/>
          </motion.div>
           
        </div>

        <motion.div
          initial={{opacity:0, x:-15}}
          animate={{opacity:1, x:0}}
          whileInView="visible"
          transition={{delay:0.5}}
          viewport={{ once: true }}
        className='absolute sm:relative top-24 sm:top-12  '>
            <Image src={'/poma2.jpg'} alt='avatar' className='object-fit rounded-full shadow-2xl h-[12rem] w-[12rem] md:h-[18rem] md:w-[18rem]' width={100} height={100}/>
        </motion.div>

</motion.div> 

  )
}
