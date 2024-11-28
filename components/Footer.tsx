
import Link from "next/link";

import { Briefcase, Facebook, Github, Instagram, Linkedin, Settings, Twitter, User } from "lucide-react";
import Home from "@/app/page";


export default function Footer() {

  const links =[
    {name: 'Home', id: 'Home', icon:<Home/>},
    {name: 'About', id: 'About', icon:<User/>},
    {name: 'Work', id: 'Work', icon:<Briefcase/>},
    {name: 'Skills', id: 'Skills', icon:<Settings/>},
    
  ] 

  return (

    <div>
      <div className="flex  mx-auto gap-x-8 text-primary/60 text-[0.7rem]">
        <div className="flex flex-col gap-y-4 ">
          <Link href={'https://github.com/PomaCray'} className="hover:text-primary/100 transition-all duration-300">
            <Github />
          </Link>
          <Link href={''} className="hover:text-primary/100 transition-all duration-300">
            <Instagram />
          </Link>
          <Link href={'https://facebook.com/opeyemi.agbaje.3304'} className="hover:text-primary/100 transition-all duration-300">
            <Facebook />
          </Link>
          <Link href={'https://www.linkedin.com/in/abdurrazaq-awwal-566344248/'} className="hover:text-primary/100 transition-all duration-300">
            <Linkedin />
          </Link>
          <Link href={''} className="hover:text-primary/100 transition-all duration-300">
            <Twitter />
          </Link>
        </div>



        <div className="flex flex-col gap-y-9">
        {links.map((bad, idy)=>(
          <div key={idy} className=" ">
            <button
                 onClick={()=>{
                  const element = document.getElementById(`${bad.id}`);
                  element?.scrollIntoView({
                  behavior:'smooth'
                  })
                    }}  
                className="text-[0.7rem] sm:text-sm">
                  <div className="border-b-2 hover:text-primary/100 duration-300">{bad.name}</div>
              </button>
          </div>
        ))}
        </div>

        
      </div>

        <div className="absolute right-0 text-primary/60">
          <h1 className="text-sm sm:text-xl  ">Created by <span className="text-primary/100 text-md">|Poma|</span>.</h1>
        </div>
   </div>
  )
}





        {/* <div className="flex gap-x-3 text-[0.7rem] sm:text-sm">
          <Link href="#Home" className="border-b-2 hover:text-primary/100  duration-300 ">Home</Link>
          <Link href="#About" className="border-b-2 hover:text-primary/100  duration-300 ">About</Link>
          <Link href="#Work" className="border-b-2 hover:text-primary/100  duration-300 ">Work</Link>
          <Link href="#Skills" className="border-b-2 hover:text-primary/100  duration-300 ">Skills</Link>
        </div> */}