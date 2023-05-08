import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
import Lottie from 'react-lottie'
import astronautMusic from '../assets/astronautMusic.json'
import { useModeToggle } from '@/context/modeProvider'

import { links } from '../assets/constants'

const NavLinks = ({ handleClick }: any) => {
  const { darkMode } = useModeToggle()
  return (
    <div className="mt-10">
      {links.map((link) => {
        return (
          <Link
            href={link.to}
            key={link.name}
            className={`flex flex-row items-center justify-start my-8 text-sm font-medium ${
              darkMode ? 'text-gray-400 hover:text-[#C1D0B5]' : ''
            }`}
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
  const { toggleDarkMode, darkMode } = useModeToggle()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: astronautMusic,
  }

  return (
    <>
      <div className={`md:flex hidden flex-col w-[200px] py-10 px-4 ${darkMode ? 'bg-[#191624]' : 'bg-[#C1D0B5]'}`}>
        <Lottie options={defaultOptions} height={150} width={150} />
        <NavLinks />
        <button onClick={toggleDarkMode} className={`${darkMode && 'text-[#C1D0B5]'}`}>
          toggle
        </button>
      </div>
      <div className="absolute block md:hidden top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 mr-2" onClick={() => setMobileMenuOpen(false)} />
        ) : (
          <HiOutlineMenu className="w-6 h-6 mr-2" onClick={() => setMobileMenuOpen(true)} />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#698269] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <Lottie options={defaultOptions} height={150} width={150} />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        <button onClick={toggleDarkMode}>toggle</button>
      </div>
    </>
  )
}

export default Sidebar
