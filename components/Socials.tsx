import { Linkedin, Facebook, Instagram, Github, Twitter } from "lucide-react" 
import Link from "next/link"

export default function Socials() {
  return (
    <div className="flex justify-center w-[65%] sm:w-[50%] md:w-full gap-x-5 md:gap-x-8  bg-primary/10 text-primary/100 p-3 shadow-2xl rounded-full">
      <Link href={'https://github.com/PomaCray'} target='_blank' rel='noopener noreferrer' className="hover:text-secondary/60 transition-all duration-300">
        <Github />
      </Link>
      <Link href={''} target='_blank' rel='noopener noreferrer' className="hover:text-primary/60 transition-all duration-300">
        <Instagram />
      </Link>
      <Link href={'https://facebook.com/opeyemi.agbaje.3304'} target='_blank' rel='noopener noreferrer' className="hover:text-primary/60 transition-all duration-300">
        <Facebook />
      </Link>
      <Link href={'https://www.linkedin.com/in/abdurrazaq-awwal-566344248/'} target='_blank' rel='noopener noreferrer' className="hover:text-primary/60 transition-all duration-300">
        <Linkedin />
      </Link>
      <Link href={'https://x.com/poma_crypt'} target='_blank' rel='noopener noreferrer' className="hover:text-primary/60 transition-all duration-300">
        <Twitter />
      </Link>
    </div>
  )
}
