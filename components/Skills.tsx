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
    SiSass,
    SiVisualbasic,
    SiSolidity
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
        title: 'Sass',
        icon: <SiSass/>,
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
        title: 'Next.js',
        icon: <SiNextdotjs/>,
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
        title: 'Figma',
        icon: <FaFigma/>,
    },
    {
        title: 'Typescript',
        icon: < SiTypescript/>,
    },
    {
        title: 'Visualbasic',
        icon: <SiVisualbasic/>,
    },
    {
        title: 'Solidity',
        icon: <SiSolidity/>,
    },
]

export default function Skills() {
  return (
   
     <div className=' font-mono  text-primary/100 grid grid-cols-3 md:w-[50%] gap-3 px-6 mt-16 pt-16'>
        {data.map((lola, idy) =>(
            <div key={idy} className='flex flex-col items-center bg-white/10 py-4 rounded-lg px-8 shadow-xl cursor-pointer transition-all duration-100'>
                <div className='  text-4xl '>{lola.icon}</div>
                <div className='  text-sm '>{lola.title}</div>
            </div>
        ))}
     </div>

  )
}
