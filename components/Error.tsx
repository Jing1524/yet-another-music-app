import { useModeToggle } from '@/context/modeProvider'
import React from 'react'

const Error = () => {
  const { darkMode } = useModeToggle()
  return (
    <div className="flex items-center justify-center w-full">
      <h1 className={`mt-2 text-2xl font-bold ${darkMode && 'text-[#C1D0B5]'}`}>
        Oops, something went wrong. Please try again.
      </h1>
    </div>
  )
}

export default Error
