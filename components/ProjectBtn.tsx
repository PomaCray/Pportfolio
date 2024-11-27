import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react'

const ProjectsBtn = () => {
  return(

  <div className=" bg-white/10 w-[30%] sm:w-[20%] p-3 rounded-full shadow-2xl">
    <Link href={'#Work'} className=" flex justify-center items-center">
    <h1>Work</h1>
      <ArrowRight className="text-4xl hover:translate-x-2 transition-all duration-300"/>
    </Link>
  </div>
  ) 
};

export default ProjectsBtn;