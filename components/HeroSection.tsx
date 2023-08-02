"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/myAvatar.png"
            alt=""
            width={325}
            height={325}
            className="shadow-2xl rounded-xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-2xl text-slate-700 font-bold mt-6 md:mt-0 md:text-5xl">Hi there, I&#39;m Nithyasri!</h1>
          <p className="text-lg text-slate-700 mt-4 mb-6 md:text-xl">
            
            <span className="font-semibold text-indigo-500">
              Tech enthusiast.{" "}
            </span>
            Developer. Aspiring computer science student.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 rounded shadow bg-blue-900 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
