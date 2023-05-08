import { createContext, ReactNode, useContext, useState } from 'react'

type modeToggleContextType = {
  darkMode: boolean
  setDarkMode: any
  toggleDarkMode: any
}

const modeToggleContextDefaultValues: modeToggleContextType = {
  darkMode: false,
  setDarkMode: () => {},
  toggleDarkMode: () => {},
}

const ModeToggleContext = createContext<modeToggleContextType>(modeToggleContextDefaultValues)

export function useModeToggle() {
  return useContext(ModeToggleContext)
}

type Props = {
  children: ReactNode
}

export function ModeToggleProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode)
  }
  const value = {
    darkMode,
    setDarkMode,
    toggleDarkMode,
  }
  return (
    <>
      <ModeToggleContext.Provider value={value}>{children}</ModeToggleContext.Provider>
    </>
  )
}
