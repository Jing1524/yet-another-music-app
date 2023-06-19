import axios from 'axios'
import { Error, Loader, ArtistCard } from '@/components'
import { useGetTopChartsQuery } from '@/redux/services/shazamCore'
import Layout from '@/components/Layout'
import { useModeToggle } from '@/context/modeProvider'

const TopArtists = () => {
  //@ts-ignore
  const { data, isFetching, error } = useGetTopChartsQuery('en-US')

  const { darkMode } = useModeToggle()
  if (isFetching) return <Loader title="Loading top charts" />
  if (error) return <Error />

  return (
    <Layout>
      <div className="flex flex-col ">
        <h2 className={`mt-4 mb-10 text-3xl font-bold text-left ${darkMode && 'text-[#C1D0B5]'}`}>
          Discover Top Artists
        </h2>
        <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
          {data?.tracks.map((track: any) => {
            return <ArtistCard key={track.key} track={track} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export default TopArtists
