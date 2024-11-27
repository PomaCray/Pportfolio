import { Linkedin, Facebook, Instagram, Github, Twitter } from "lucide-react" 
import Link from "next/link"

export default function Socials() {
  return (
    <div className="flex justify-center w-[65%] sm:w-[50%] md:w-full gap-x-5 md:gap-x-8  bg-white/10 p-3 shadow-2xl rounded-full">
      <Link href={'https://github.com/PomaCray'} className="hover:text-secondary/60 transition-all duration-300">
        <Github />
      </Link>
      <Link href={''} className="hover:text-secondary/60 transition-all duration-300">
        <Instagram />
      </Link>
      <Link href={'https://facebook.com/opeyemi.agbaje.3304'} className="hover:text-secondary/60 transition-all duration-300">
        <Facebook />
      </Link>
      <Link href={'https://www.linkedin.com/in/abdurrazaq-awwal-566344248/'} className="hover:text-secondary/60 transition-all duration-300">
        <Linkedin />
      </Link>
      <Link href={''} className="hover:text-secondary/60 transition-all duration-300">
        <Twitter />
      </Link>
    </div>
  )
}
