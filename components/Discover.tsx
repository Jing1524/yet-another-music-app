import Layout from '@/components/Layout'
import { Error, Loader, SongCard } from '../components'
import { genres } from '@/assets/constants'
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore'
import { selectGenreListId } from '@/redux/features/playerSlice'
import { useDispatch, useSelector } from 'react-redux'

const Discover = () => {
  const { activeSong, isPlaying, genreListId } = useSelector((state: any) => state.player)

  // @ts-ignore
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP')
  const dispatch = useDispatch()

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title

  // if (isFetching) return <Loader title="Loading songs..." />
  // if (error) return <Error />
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-between mt-4 mb-10 sm:flex-row">
        <h2 className="text-3xl font-bold text-left text-white">Discover {genreTitle}</h2>
        <select
          onChange={(e) => {
            dispatch(selectGenreListId(e.target.value))
          }}
          value={genreListId || 'Pop'}
          className="p-2 mt-5 text-sm text-gray-300 bg-black rounded-lg outline-none sm:mt-0 w-[10rem] mr-10"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-12 sm:justify-start ">
        {data?.map((song: any, idx: number) => (
          <SongCard key={idx} song={song} idx={idx} activeSong={activeSong} isPlaying={isPlaying} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Discover
