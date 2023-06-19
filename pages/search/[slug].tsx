import { useRouter } from 'next/router'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Error, Loader, SongCard } from '@/components'
//import { useGetSongsBySearchQuery } from '@/redux/services/shazamCore'
import Layout from '@/components/Layout'
import { useModeToggle } from '@/context/modeProvider'

const Search = () => {
  const { darkMode } = useModeToggle()
  const { query } = useRouter()
  const searchTerm = query.slug
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)
  //@ts-ignore
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm)
  const songs = data?.tracks?.hits?.map((song: any) => song.track)
  if (isFetching) return <Loader title="Loading top charts" />
  if (error) return <Error />

  return (
    <Layout>
      <div className="flex flex-col ">
        <h2 className={`mt-4 mb-10 text-3xl font-bold text-left ${darkMode && 'text-[#C1D0B5]'}`}>
          Showing results for <span>{searchTerm}</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
          {/* {songs?.map((song: any, idx: number) => {
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
          })} */}
        </div>
      </div>
    </Layout>
  )
}

export default Search
