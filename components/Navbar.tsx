import { Home } from "lucide-react"
import { User } from "lucide-react"
import { Briefcase } from "lucide-react"
import { Settings } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Link from 'next/link'

const links =[
  {name: 'Home', id: 'Home', icon:<Home/>},
  {name: 'About', id: 'About', icon:<User/>},
  {name: 'Work', id: 'Work', icon:<Briefcase/>},
  {name: 'Skills', id: 'Skills', icon:<Settings/>},
  
] 

export default function Navbar() {







  return (
    <nav>
      <div className=" fixed z-20 right-12 top-3 flex gap-x-6  p-3  rounded ">
        {links.map((bad, idy)=>(
          <div key={idy} className="">
            <button
                 onClick={()=>{
                  const element = document.getElementById(`${bad.id}`);
                  element?.scrollIntoView({
                  behavior:'smooth'
                  })
                    }}  
                className="flex text-secondary hover:text-secondary/60  transition-all duration-300">
                <div className="">{bad.icon}</div>
                <div className=" hidden md:flex text-sm font-medium font-mono mt-2">{bad.name}</div>
              </button>
            
          </div>
        ))}  
      </div>
    </nav>
  )
}


