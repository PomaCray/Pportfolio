import  {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma, 
    
  } from 'react-icons/fa';
    
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiBootstrap,
    SiVisualbasic,
    SiSolidity,
    SiNodedotjs
} from 'react-icons/si'

const data =  [
    {
        title: 'HTML5',
        icon: <FaHtml5/>,
    },
    {
        title: 'CSS',
        icon: <FaCss3/>,
    },
    {
        title: 'Node.js',
        icon: <SiNodedotjs/>,
    },
    {
        title: 'JavaScript',
        icon: <FaJs/>,
    },
    {
        title: 'React.js',
        icon: <FaReact/>,
    },
    {
        title: 'Solidity',
        icon: <SiSolidity/>,
    },
    {
        title: 'Next.js',
        icon: <SiNextdotjs/>,
    },
    {
        title: 'Typescript',
        icon: < SiTypescript/>,
    },
    {
        title: 'Bootstrap',
        icon: <SiBootstrap/>,
    },
    {
        title: 'TailwindCSS',
        icon: <SiTailwindcss/>,
    },
    {
        title: 'Visualbasic',
        icon: <SiVisualbasic/>,
    },
    {
        title: 'Figma',
        icon: <FaFigma/>,
    },
]

export default function Skills() {
  return (
   
     <div className=' font-mono mx-auto text-primary/100 grid grid-cols-3 md:w-[50%] gap-3 px-6 mt-5 pt-5 '>
        {data.map((lola, idy) =>(
            <div key={idy} className='flex hover:scale-105 hover:translate-x-2 flex-col items-center bg-white/10 py-4 rounded-lg px-8 shadow-xl cursor-pointer transition-all duration-100'>
                <div className='  text-4xl '>{lola.icon}</div>
                <div className='  text-sm '>{lola.title}</div>
            </div>
        ))}
     </div>

  )
}
