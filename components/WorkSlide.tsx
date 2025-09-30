'use client'
import { Swiper, SwiperSlide } from 'swiper/react';   
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';

import { ArrowRight } from 'lucide-react';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';

const workSlides = [   
    {
      title: 'E-commerce',
      path: '/mockup-proj.png',
      href: 'https://mockup-pi.vercel.app/',
      description: 'An E-commerce wesite made with Next.js, TailwindCSS, TypeScript, Sanity, Shadcdn, and Stripe.'
    },
    {
      title: 'CarHub',
      path: '/carhub-project.png',
      href: 'https://carhub-mauve.vercel.app/',
      description: 'A Car website built with Next.js, Typescript and TailwindCSS.'
    },
  
    {
      title: 'Landing Page',
      path: '/success-proj.png',
      href: 'https://sci-tens.netlify.app/',
      description: 'A responsive landing page made with HTML and SCSS,  project.'
    },
    {
      title: 'Loan Calculator',
      path: '/loan-project.png',
      href:'https://tenscalc.netlify.app/',
      description: 'Loan Calculator built with JavaScript, HTML, and BootStrap.'
    },    


]
  


export default function WorkSlide() {
  return (
    <Swiper breakpoints={{
      320:{
        slidesPerView:1,
        spaceBetween:15,
      },
      640:{
        slidesPerView:2,
        spaceBetween:15,
      },
      768:{
        slidesPerView:2,
        spaceBetween:15,
      },
      1024:{
        slidesPerView:2,
        spaceBetween:15,
      }
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className=' w-[100%] sm:w-[70%] '
    >
    {
      workSlides.map((pluto, seh)=>{
        return(
          <SwiperSlide key={seh} className='my-14'>
            <div className=' bg-secondary text-primary/100 shadow-xl rounded-lg py-0 gap-x-6 sm:gap-x-0 group cursor-pointer  transition-all duration-300 '>
              
                <Image 
                  src={`${pluto.path}`} 
                  height={150} width={150}  alt='alt'
                  className='rounded w-[100%] h-[150px] mb-4'
                  />
              
              <div className='mb-1 flex flex-col px-3'>
                <div className='mb-2 text-sm sm:text-xl font-medium'>{pluto.title}</div>
                <p className='max-w-[350px] leading-normal'>{pluto.description}</p>
              </div>
              <Link href={`${pluto.href}`} className='text-3xl flex mt-5 p-2 justify-end'>
                <ArrowRight className='group-hover:rotate-45 group-hover:text-primary/60 transition-all duration-300 '/>
              </Link>
            </div>
          </SwiperSlide>
        )
      })
    }
   </Swiper>

  )
}
// {workSlides.slides.map((pluto, seh)=>(
//   <SwiperSlide>
//     <div key={seh} className='grid h-full  grid-flow-col sm:grid-flow-col md:grid-rows-2 gap-x-3  '>
//       {pluto.images.map((real, cap)=>(
//         <div className='rounded-lg overflow-hidden flex items-center justify-center group mb-6 ' key={cap}>
//         <Link href={`${real.href}`} className='flex items-center justify-center relative overflow-hidden group'>
//           <Image src={real.path} width={500} height={300} alt='' className='object-contain ' />
//           <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#1c1c1d] to-[#4b494bbd] opacity-0 group-hover:opacity-80 transition-all duration-100'></div>
         
//         </Link>
//       </div>
//       ))}
