import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import { Error, Loader } from '@/components'
import { setActiveSong, playPause } from '@/redux/features/playerSlice'

import { useGetAlbumDetailsQuery } from '@/redux/services/shazamCore'
import Layout from '@/components/Layout'
import { useModeToggle } from '@/context/modeProvider'

import AlbumDetailsHeader from '@/components/AlbumDetailsHeader'
import AblumTracks from '@/components/AblumTracks'

const AlbumTracks = () => {
  const { darkMode } = useModeToggle()
  const { query } = useRouter()
  const albumId = query.slug
  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)

  const { data: albumData, isFetching: isFetchingAlbumDetails, error } = useGetAlbumDetailsQuery(query.slug)

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song: any, idx: number) => {
    dispatch(setActiveSong({ song, albumData, idx }))
    dispatch(playPause(true))
  }

  if (isFetchingAlbumDetails) return <Loader title="Searching song details" />
  if (error) return <Error />

  return (
    <Layout>
      <div className="flex flex-col">
        <AlbumDetailsHeader albumId={albumId} data={albumData} />
        <div className="mb-10">
          <h2 className={`text-3xl font-bold ${darkMode && 'text-[#C1D0B5]'}`}>Tracks:</h2>
        </div>
        <AblumTracks
          data={albumData}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          artistId=""
        />
      </div>
    </Layout>
  )
}

export default AlbumTracks
