import React from 'react'
import Header from './Header'
import Hero from './Hero'
import { motion} from 'framer-motion'

export default function Top() {
  return (
  
    <motion.div
                initial={{opacity:0, x:15}}
            animate={{opacity:1, x:0}}
            whileInView="visible"
            transition={{delay:0.2}}
            viewport={{ once: true }}
    className="">
       <Header/>
       <Hero/>
    </motion.div>
    
  )
}
