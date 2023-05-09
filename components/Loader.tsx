import { loader } from '../assets'
import Image from 'next/image'
import Layout from './Layout'
import { useModeToggle } from '@/context/modeProvider'

const Loader = ({ title }: any) => {
  const { darkMode } = useModeToggle()
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full">
        <Image src={loader} alt="loading screen" width={50} height={50} />
        <h1 className={`mt-2 text-2xl font-bold ${darkMode && 'text-[#C1D0B5]'}`}>{title || 'Loading...'}</h1>
      </div>
    </Layout>
  )
}

export default Loader
