
import Link from "next/link";

import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";


export default function Footer() {



  return (
    <div>
      <div className="flex flex-col mx-auto gap-y-5 text-primary/60">
        <div className="flex gap-x-4">
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

        <div className="flex gap-x-3">
          <Link href="#Home" className="border-b-2 hover:text-primary/100  duration-300 ">Home</Link>
          <Link href="#About" className="border-b-2 hover:text-primary/100  duration-300 ">About</Link>
          <Link href="#Work" className="border-b-2 hover:text-primary/100  duration-300 ">Work</Link>
          <Link href="#Skills" className="border-b-2 hover:text-primary/100  duration-300 ">Skills</Link>
        </div>
        
      </div>

        <div className="absolute right-0 text-primary/60">
          <h1 className="text-xl">Created by <span className="text-primary/100 text-2xl">|Poma|</span>.</h1>
        </div>
   </div>
  )
}
