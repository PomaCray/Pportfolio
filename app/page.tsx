'use client'
import About from "@/components/About";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Top from "@/components/Top";
import Contact from "@/components/Contact";


export default function Home() {
  // const sectionRefs = useRef<HTMLDivElement[]>([]);

  
  return (
    
    <div className="w-full">
        <section  className=" px-4 sm:px-10 " id="Home" >
         <Top/>
        </section>


      <section className="font-mono  px-3 sm:px-10" id="About">
        <About/>
      </section>


      <section  className="font-mono px-3 sm:px-10 py-2"  id="Work">
       <Work/>
      </section>

      <section className='px-3 pb-8' id='Skills'>
       <Skills/>
      </section>

      <section  className="font-mono px-3 sm:px-10 mt-5 pb-5rem"  id="Contact">
       <Contact/>
      </section>


    <section  className="font-mono border-t px-3 sm:px-10 mt-5 pt-6 pb-8 text-secondary">
      <Footer/>
    </section>
    </div>
    
  )
}

