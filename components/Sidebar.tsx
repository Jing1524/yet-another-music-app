import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
import Lottie from 'react-lottie'
import astronautMusic from '../assets/astronautMusic.json'

import { logo } from '../assets'
import { links } from '../assets/constants'

const NavLinks = ({ handleClick }: any) => {
  console.log(links)
  return (
    <div className="mt-10">
      {links.map((link) => {
        return (
          <Link
            href={link.to}
            key={link.name}
            className="flex flex-row items-center justify-start my-8 text-sm font-medium text-gray-400 hover:text-[#C1D0B5]"
            onClick={() => handleClick && handleClick()}
          >
            <link.icon className="w-6 h-6 mr-2" />
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: astronautMusic,
  }
  return (
    <>
      <div className="md:flex hidden flex-col w-[200px] py-10 px-4 bg-[#191624]">
        <Lottie options={defaultOptions} height={150} width={150} />
        <NavLinks />
      </div>
      <div className="absolute block md:hidden top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        ) : (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#698269] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <Lottie options={defaultOptions} height={150} width={150} />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )
}

export default Sidebar
