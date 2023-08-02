import React from "react"
import {FaInstagram} from "react-icons/fa"
import {HiOutlineMail} from 'react-icons/hi'
import {AiTwotonePhone} from 'react-icons/ai'
import {LiaLinkedinIn} from 'react-icons/lia'

const Footer = () => {
  return (
    <section id='contact'>
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-6 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100 text-lg">
          © 2023 Nithyasri Palanisamy<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://www.linkedin.com/in/nithyasri-palanisamy-55a549261" rel="noreferrer" target="_blank">
            <LiaLinkedinIn
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="mailto:nithyasripalanisamy@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <HiOutlineMail
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.instagram.com/nithyasri.p_/"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={27}
            />
          </a>
          <a
            href="tel:6504849916"
            rel="noreferrer"
            target="_blank"
          >
            <AiTwotonePhone
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={27}
            />
          </a>
        </div>
      </div>
    </footer>
    </section>
  )
}

export default Footer
