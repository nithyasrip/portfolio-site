import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Project A4K",
    description:
      "Founded a non-profit to improve children's lives in India, addressing basic needs. Bay Area's first SBSA club with Shanti Bhavan. Donated an Automatic Sanitary Napkin Machine to a school in Kurinjipadi, India. Now working on a t-shirt fundraiser!",
    image: "/a4k2.png",
    link: "https://www.instagram.com/project_a4k/",
  },

  {
    name: "Spotify Clone",
    description:
      "This application is a Spotify Clone that enables users to sign in to their Spotify accounts, allowing them to search for any song or artist they would like to listen to using the Spotify API. The lyrics are also displayed on the screen. Click on the link below to watch a demo!",
    image: "/opt1.png",
    link: "https://youtu.be/uoSJrK5LXOE",
  },
  {
    name: "Predicting Miscarriage",
    description:
      "At the UCSF AI4ALL program, I had the opportunity to use machine learning algorithms to conduct research on miscarriages using vaginal microbiomes. Presented my research at the final symposium (video linked below at the 1:30:24 mark).",
    image: "/microbiome2.png",
    link: "https://www.youtube.com/watch?v=Us8kZpk0h5U",    
  },

  {
    name: "Sweet Potato Genomics",
    description:
      "At Cal State East Bay, I learned the basics of bioinformatics. Took long and short read sequencing data of a sweet potato chloroplast genome and assembled them together into larger, more useful, annotated contigs. Read my report attached below for more details!",
    image: "/bio2.png",
    link: "https://docs.google.com/document/d/1PegPOGE5T2e4gLTz-RdiNNDlr5KtXd9jeSyPLli-aX0/edit?usp=sharing",    
  },
  {
    name: "DNA Profiling",
    description:
      "At Cal State East Bay, I compared my DNA sample with those of my parents to determine our level of genetic similarity. Additionally, I had the opportunity to assess my susceptibility to diabetes and lung cancer. Read the attached doc below for more details!",
    image: "/profiling.png",
    link: "https://docs.google.com/document/d/1lOU9wuhSD-wnuSrQkX_7lQGHFdA_amcty0_Y6jBKJ0Q/edit?usp=sharing",    
  },
  {
    name: "ID Scan Attendance System",
    description:
      "This program automates the process of marking attendance by integrating computer vision technologies and database management, enabling teachers to track student attendance in a more efficient manner. Watch the video linked below to learn more!",
    image: "/idcard3.png",
    link: "https://youtu.be/cEftBPNUuys",
  },

  {
    name: "Get Interested",
    description:
      "I directed the website design team of a non-profit organization and successfully delivered this user-friendly site within two months. Received positive feeback from the board!",
    image: "/getinterested.png",
    link: "https://www.getinterestedorg.com/",
  },
  {
    name: "TEDxSanRamon",
    description: "I developed and consistently updated this website for a TEDx event happening in my local community. Sold over 80 tickets through the website. Total revenue of $1,100!",
    image: "/tedxsanramon.png",
    link: "https://www.tedxsanramon.org/",
  },

]

//manim, hackathon

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl text-slate-700">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-900 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 text-slate-700">{project.name}</h1>
                    <p className="text-l leading-7 mb-4 text-slate-700 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      
                      
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
