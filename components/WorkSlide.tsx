"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
import { FreeMode, Pagination } from "swiper/modules";
import Link from "next/link";
import { motion } from "framer-motion";

const workSlides = [
  {
    title: "Sendit",
    path: "/Seinder.png",
    href: "https://sender-psi.vercel.app/",
    description:
      "An Airdrop wesite made with Next.js, TailwindCSS, TypeScript, Wagmi and solidity for contracts.",
  },
  {
    title: "Megethos",
    path: "/Megethos.png",
    href: "https://megethos-omnm.vercel.app/",
    description:
      "A Web3 Task Tracker Landing page made with Next.js, TailwindCSS and TypeScript.",
  },
  {
    title: "E-commerce",
    path: "/mockup-proj.png",
    href: "https://mockup-pi.vercel.app/",
    description:
      "An E-commerce wesite made with Next.js, TailwindCSS, TypeScript, Sanity, Shadcdn, and Stripe.",
  },
  {
    title: "CarHub",
    path: "/carhub-project.png",
    href: "https://carhub-mauve.vercel.app/",
    description:
      "A Car website built with Next.js, Typescript and TailwindCSS.",
  },
  {
    title: "Crpt-Coffee",
    path: "/coffee_me.png",
    href: "https://github.com/PomaCray/Fund_me",
    description:
      "A buy_me coffee with crypto app made with HTML, CSS, JavaScript and viem.",
  },
  {
    title: "Landing Page",
    path: "/success-proj.png",
    href: "https://sci-tens.netlify.app/",
    description: "A responsive landing page made with HTML and SCSS,  project.",
  },
  {
    title: "Loan Calculator",
    path: "/loan-project.png",
    href: "https://tenscalc.netlify.app/",
    description: "Loan Calculator built with JavaScript, HTML, and BootStrap.",
  },
];

export default function WorkSlide() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className=" w-[100%] sm:w-[70%] "
    >
      {workSlides.map((pluto, seh) => {
        return (
          <SwiperSlide key={seh} className="my-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: seh * 0.2 }}
              viewport={{ once: true }}
              className=" bg-secondary text-primary/100 shadow-xl rounded-lg pt-0 pb-2 gap-x-6 sm:gap-x-0 group cursor-pointer  transition-all duration-300 "
            >
              <iframe
                src={`${pluto.href}`}
                className="rounded w-[100%] h-[200px] mb-4"
                loading="lazy"
                scrolling="no"
              />

              <div className="mb-1 flex flex-col px-3">
                <div className="mb-2 text-sm sm:text-xl font-medium">
                  {pluto.title}
                </div>
                <p className="max-w-[350px] leading-normal">
                  {pluto.description}
                </p>
              </div>
              <Link
                href={`${pluto.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm items-center w-fit hover:translate-x-2 hover:scale-105 transition-all duration-300 space-x-2 justify-end bg-primary/10 text-primary/100 flex mt-5 p-1 rounded-full mx-2"
              >
                <p>click here</p>
                <ArrowRight className="group-hover:rotate-45 p-1 bg-primary/100 text-secondary rounded-full  transition-all duration-300 " />
              </Link>
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
