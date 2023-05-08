import axios from 'axios'
import { useSelector } from 'react-redux'
import { Error, Loader, SongCard } from '@/components'
import { useGetTopChartsQuery } from '@/redux/services/shazamCore'
import Layout from '@/components/Layout'

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)
  //@ts-ignore
  const { data, isFetching, error } = useGetTopChartsQuery()

  if (isFetching) return <Loader title="Loading top charts" />
  if (error) return <Error />

  return (
    <Layout>
      <div className="flex flex-col ">
        <h2 className="mt-4 mb-10 text-3xl font-bold text-left text-white">Discover Top Charts</h2>
        <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
          {data?.map((song: any, idx: number) => {
            return (
              <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                idx={idx}
              />
            )
          })}
        </div>
        CountryTracks
      </div>
    </Layout>
  )
}

export default TopCharts
