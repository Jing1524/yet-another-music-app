import axios from 'axios'
import { Error, Loader, ArtistCard } from '@/components'
import { useGetTopChartsQuery } from '@/redux/services/shazamCore'
import Layout from '@/components/Layout'

const TopArtists = () => {
  //@ts-ignore
  const { data, isFetching, error } = useGetTopChartsQuery()

  if (isFetching) return <Loader title="Loading top charts" />
  if (error) return <Error />

  return (
    <Layout>
      <div className="flex flex-col ">
        <h2 className="mt-4 mb-10 text-3xl font-bold text-left text-white">Discover Top Artists</h2>
        <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
          {data?.map((track: any) => {
            return <ArtistCard key={track.key} track={track} />
          })}
        </div>
        CountryTracks
      </div>
    </Layout>
  )
}

export default TopArtists
