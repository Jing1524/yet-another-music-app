import Layout from '@/components/Layout'
import { Error, Loader, SongCard } from '../components'
import { genres } from '@/assets/constants'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'
import { useDispatch, useSelector } from 'react-redux'

const Discover = () => {
  // @ts-ignore
  const { data, isFetching, error } = useGetTopChartsQuery()
  const display = useDispatch()
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)

  const genreTitle = 'Pop'
  if (isFetching) return <Loader title="Loading songs..." />
  if (error) return <Error />
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-between w-full mt-4 mb-10 sm:flex-row">
          <h2 className="text-3xl font-bold text-left text-white">Discover {genreTitle}</h2>
          <select
            onChange={() => {}}
            value=""
            className="mt-5 text-sm text-gray-300 bg-black rounded-lg outline-none sm:mt-0"
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap justify-center gap-8 sm:justify-start ">
          {data?.map((song: any, idx: number) => (
            <SongCard key={idx} song={song} idx={idx} activeSong={activeSong} isPlaying={isPlaying} data={data} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Discover
