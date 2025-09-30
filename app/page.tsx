'use client'
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Typewriter from 'typewriter-effect';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Top from "@/components/Top";
import Contact from "@/components/Contact";


export default function Home() {
  // const sectionRefs = useRef<HTMLDivElement[]>([]);

  
  return (
    
    <div className="w-full">
        <section  className=" h-[100vh] px-4 sm:px-10 " id="Home" >
         <Top/>
        </section>



      <section className=" font-mono   h-[100vh] px-3 sm:px-10 " id="About">
        <About/>
      </section>


      <section  className=" font-mono px-3 sm:px-10 pb-5rem"  id="Work">
      <Work/>
      </section>

      <section className=' px-3 py-4 h-[100vh] pb-16' id='Skills'>
      
      <Skills/>
      </section>

      <section  className=" font-mono px-3 sm:px-10 pb-5rem"  id="Contact">
      <Contact/>
      </section>


    <section  className=" font-mono border-t px-3 sm:px-10 mt-5 pt-8 pb-10 text-secondary">
      <Footer/>
    </section>
    </div>
    
  )
}

