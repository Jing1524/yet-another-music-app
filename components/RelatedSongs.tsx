import { useModeToggle } from '@/context/modeProvider'
import SongBar from './SongBar'
import Discover from './Discover'
import AlbumList from './AlbumList'
import { useEffect, useState } from 'react'
import { useGetAlbumDetailsQuery } from '@/redux/services/shazamCore'

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }: any) => {
  const { darkMode } = useModeToggle()

  return (
    <div className="flex flex-col">
      <h1 className={`text-3xl font-bold ${darkMode && 'text-[#C1D0B5]'}`}>Albums:</h1>

      {artistId ? (
        <div className="flex flex-wrap justify-center gap-12 mt-6 sm:justify-start">
          {data?.relationships?.albums?.data.map((album: any, idx: number) => {
            return (
              <AlbumList
                key={`${album.id}`}
                album={album}
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
      ) : (
        <div className="flex flex-col w-full mt-6">
          {data?.data?.slice(0, 5).map((song: any, idx: number) => {
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
      )}
    </div>
  )
}

export default RelatedSongs
