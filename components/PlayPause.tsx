import { useModeToggle } from '@/context/modeProvider'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ song, handlePause, handlePlay, isPlaying, activeSong }: any) => {
  const { darkMode } = useModeToggle()
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className={`${darkMode ? 'text-gray-300' : 'text-gray-500'}`} onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className={`${darkMode ? 'text-gray-300' : 'text-gray-500'}`} onClick={handlePlay} />
  )
}

export default PlayPause
