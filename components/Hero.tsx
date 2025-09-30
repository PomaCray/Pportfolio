'use client'
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import ProjectsBtn from './ProjectBtn';
import { AnimatePresence, motion } from "framer-motion";
import ContactBtn from './ContactBtn';

export default function Hero() {
  return (
    
   <motion.div 

   className="flex flex-col sm:flex-row w-full px-1">
        <div className="tracking-tight flex-1 font-mono flex flex-col text-primary/60">
          <motion.div
            initial={{opacity:0, x:15}}
            animate={{opacity:1, x:0}}
            whileInView="visible"
            transition={{delay:0.2}}
            viewport={{ once: true }}
          className=''>
            <h1 className="text-2xl sm:text-3xl font-medium ">Hello, my name is</h1>
              <p className="text-4xl sm:text-5xl font-bold ">Abdurrazaq Awwal<span className="text-primary/100">|Poma|</span></p>
              <h1 className="text-xl sm:text-3xl font-medium mb-1  flex gap-x-2.5 "> I am a 
              <span className='text-xl sm:text-3xl text-primary/100'> <Typewriter options={{strings: ['Web dev', 'Smart-contract dev','Marketer'],autoStart: true,loop: true,}} /> </span>
              </h1>
              <p className="text-xl sm:text-3xl font-medium "> Transforming Ideas <br /> Into{''} <span className="text-primary/100">Digital Reality</span></p>
          </motion.div>

          <motion.div
            initial={{opacity:0, x:-15}}
            animate={{opacity:1, x:0}}
            whileInView="visible"
            transition={{delay:0.5}}
            viewport={{ once: true }}
          className='mt-10 flex gap-4'>
            <ProjectsBtn/>
            <ContactBtn/>
          </motion.div>


           
        </div>

        <motion.div
          initial={{opacity:0, x:-15}}
          animate={{opacity:1, x:0}}
          whileInView="visible"
          transition={{delay:0.5}}
          viewport={{ once: true }}
        className=''>
            <Image src={'/web3me2.png'} alt='avatar' className='mt-[-4rem]' width={200} height={150} />
        </motion.div>
</motion.div> 

  )
}
