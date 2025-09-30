import WorkSlide from "./WorkSlide";
import { motion, AnimatePresence} from 'framer-motion'
import { useEffect, useRef } from "react";

export default function Work() {

  return (
    
   
        <div
        className="pt-[2rem] lg:pt-[2rem] text-primary/60"
        >
            <h1 className=" text-2xl font-medium mb-10">My <span className="text-primary/100 ">Work.</span></h1>
            <div className="flex flex-col justify-between">
                <div>
                    <p className="tracking-wide leading-8">
                    JavaScript-powered Dynamic Websites <br/>
                    HTML and CSS Precision for Visual Excellence <br/>
                    SCSS Styling for Enhanced Aesthetics <br/>
                    React.js Magic for Interactive User Interfaces <br/>
                    Next.js Optimization for High-Performance Applications <br/>
                    Custom Web Solutions Tailored to Your Needs <br/>
                    Transformative Digital Experiences Delivered with Expertise.
                    </p>
                </div>

                <div className=""><WorkSlide/></div>
            </div>
        </div>
  
  )
}
