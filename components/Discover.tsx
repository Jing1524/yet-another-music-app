import { SongCard } from '../components'
import { genres } from '@/assets/constants'
import { useGetSongsByGenreQuery, useGetTopChartsQuery, useGetSongDetailsQuery } from '../redux/services/shazamCore'
import { selectGenreListId } from '@/redux/features/playerSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useModeToggle } from '@/context/modeProvider'
import { useEffect, useState } from 'react'

const Discover = () => {
  const { darkMode } = useModeToggle()
  const { activeSong, isPlaying, genreListId } = useSelector((state: any) => state.player)

  // @ts-ignore
  const { data: songData } = useGetTopChartsQuery()
  console.log('for detail', songData) // array of keys, using key to get the genra from the song details

  //console.log('for genre', data?.global?.genres.name)

  //const genreTrack = data?.chart_items

  const dispatch = useDispatch()

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-between mt-4 mb-10 sm:flex-row">
        <h2 className={`text-3xl font-bold text-left ${darkMode && 'text-[#C1D0B5]'} uppercase`}>
          Discover {genreTitle}
        </h2>
        <select
          onChange={(e) => {
            dispatch(selectGenreListId(e.target.value))
          }}
          value={genreListId || 'Pop'}
          className={`p-2 mt-5 text-sm rounded-lg outline-none sm:mt-0 w-[10rem] mr-10 ${darkMode && 'bg-[#5F7161]'}`}
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-12 sm:justify-start ">
        {songData?.tracks.map((track: any, idx: number) => (
          <SongCard
            key={track.key}
            song={track}
            idx={idx}
            activeSong={activeSong}
            isPlaying={isPlaying}
            data={songData?.tracks}
          />
        ))}
      </div>
    </div>
  )
}

export default Discover
