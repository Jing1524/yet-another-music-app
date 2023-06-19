import { useModeToggle } from '@/context/modeProvider'
import SongBar from './SongBar'
import Discover from './Discover'
import AlbumList from './AlbumList'
import { useEffect, useState } from 'react'
import { useGetAlbumDetailsQuery } from '@/redux/services/shazamCore'

const AlbumTracks = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }: any) => {
  const { darkMode } = useModeToggle()
  const trackData = data?.data[0].relationships.tracks.data
  return (
    <div className="flex flex-col w-full mt-6">
      {trackData.map((song: any, idx: number) => {
        return (
          <SongBar
            key={`${song.id}`}
            song={song}
            idx={idx}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        )
      })}
    </div>
  )
}

export default AlbumTracks
