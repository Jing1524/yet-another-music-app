import Head from 'next/head'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'

import Sidebar from './Sidebar'
import MusicPlayer from './MusicPlayer'
import Searchbar from './Searchbar'
import TopPlay from './TopPlay'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const { activeSong } = useSelector((state: any) => state.player)

  return (
    <div className="min-h-[100vh] overflow-x-hidden scroll-smooth">
      <Head>
        <title>Another Music App</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#99A98F]">
          <Searchbar />
          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            {/* all components */}
            <div className="flex-1 pb-40 h-fit">{children}</div>

            <div className="relative top-0 xl:sticky h-fit">
              <TopPlay />
            </div>
          </div>
        </div>

        {activeSong?.title && (
          <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#99A98F] backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )}
      </div>
    </div>
  )
}

export default Layout
