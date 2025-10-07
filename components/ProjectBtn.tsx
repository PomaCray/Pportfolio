import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react'

const ProjectsBtn = () => {
  return(

  <div className=" bg-primary/100 hover:translate-y-1 transition-all duration-300 w-min p-3 rounded-full shadow-lg">
    <button 
     onClick={()=>{
      const element = document.getElementById('Work');
      element?.scrollIntoView({
      behavior:'smooth'
      })
    }}
    className="text-secondary flex  justify-center items-center">
    <h1>Work</h1>
      <ArrowRight className="text-4xl hover:translate-x-2  transition-all duration-300"/>
    </button>
  </div>
  ) 
};

export default ProjectsBtn;