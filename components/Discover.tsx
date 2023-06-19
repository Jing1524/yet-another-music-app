import { SongCard } from '../components'
import { genres } from '@/assets/constants'
import {
  useGetSongsByGenreQuery,
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongsByCountryQuery,
} from '../redux/services/shazamCore'
import { selectGenreListId } from '@/redux/features/playerSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useModeToggle } from '@/context/modeProvider'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Discover = () => {
  const { darkMode } = useModeToggle()
  const { activeSong, isPlaying, genreListId } = useSelector((state: any) => state.player)
  const [country, setCountry] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  // @ts-ignore
  const { data: songData } = useGetTopChartsQuery(genreListId || 'genre-global-chart-12')

  const dispatch = useDispatch()
  // @ts-ignore
  const { data, isFetching, error } = useGetSongsByCountryQuery()

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-between mt-4 mb-10 sm:flex-row">
        <h2 className={`text-3xl font-bold text-left ${darkMode && 'text-[#C1D0B5]'}`}>Discover {genreTitle}</h2>
        <select
          onChange={(e) => {
            dispatch(selectGenreListId(e.target.value))
          }}
          value={genreListId || 'Worldwide'}
          className={`p-2 mt-5 text-sm rounded-lg outline-none sm:mt-0 w-[10rem] mr-10 ${darkMode && 'bg-[#5F7161]'}`}
        >
          {genres.map((genre: any) => (
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
