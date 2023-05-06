import Layout from '@/components/Layout'
import { Error, Loader, SongCard } from '../components'
import { genres } from '@/assets/constants'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'

const Discover = () => {
  // @ts-ignore
  const { data, isFetching, error } = useGetTopChartsQuery()
  console.log({ data })
  const genreTitle = 'Pop'
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, idx) => (
            <SongCard key={idx} song={song} idx={idx} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Discover
