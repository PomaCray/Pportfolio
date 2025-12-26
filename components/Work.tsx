import WorkSlide from "./WorkSlide";
import { motion} from 'framer-motion'


export default function Work() {

  return (
    
   
        <div
        className="pt-[2rem] lg:pt-[2rem] text-primary/60"
        >
            <h1 className=" text-2xl font-medium mb-10">My <span className="text-primary/100 ">Work.</span></h1>
            <div className="flex flex-col justify-between">
                <motion.div
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{delay: 0.2}}
                    viewport={{ once: true }}
                >
                    <p className="tracking-wide leading-8">
                    JavaScript-powered Dynamic Websites <br/>
                    HTML and Tailwind CSS Precision for Visual Excellence <br/>
                    React.js Magic for Interactive User Interfaces <br/>
                    Next.js Optimization for High-Performance Applications <br/>
                    Node.js for Scalable Backend Services <br/>
                    Solidity for Fully Decentralized Applications <br/>
                    Custom Web Solutions Tailored to Your Needs <br/>
                    Transformative Digital Experiences Delivered with Expertise.
                    </p>
                </motion.div>

                <div className=""><WorkSlide/></div>
            </div>
        </div>
  
  )
}
