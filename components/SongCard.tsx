import Link from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../redux/features/playerSlice'
import { useModeToggle } from '@/context/modeProvider'

const SongCard = ({ song, idx, data, isPlaying, activeSong }: any) => {
  // dispatch -> update state
  const dispatch = useDispatch()
  const { darkMode } = useModeToggle()
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, idx }))
    dispatch(playPause(true))
  }

  return (
    <div
      className={`flex flex-col w-[250px] p-4 bg-opacity-80 backdrop-blur-ms animate-slideup rounded-lg cursor-pointer ${
        darkMode ? 'bg-white/5' : 'bg-[#99A98F]'
      }`}
    >
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'
          }`}
        >
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="song image" src={song?.images?.coverart ? song?.images?.coverart : song?.images?.background} />
      </div>
      <div className="flex flex-col mt-4">
        <p className={`text-lg font-semibold truncate ${darkMode && 'text-[#C1D0B5]'}`}>
          <Link href={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className={`mt-1 text-sm truncate ${darkMode && 'text-[#C1D0B5]'}`}>
          <Link href={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>{song.subtitle}</Link>
        </p>
      </div>
    </div>
  )
}

export default SongCard
