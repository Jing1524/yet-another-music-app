import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import { DetailsHeader, Error, Loader, RelatedSongs } from '@/components'
import { setActiveSong, playPause } from '@/redux/features/playerSlice'

import { useGetSongDetailsQuery, useGetRelatedSongsQuery } from '@/redux/services/shazamCore'
import Layout from '@/components/Layout'
import { useModeToggle } from '@/context/modeProvider'
import { useEffect, useState } from 'react'
const SongDetails = () => {
  const { darkMode } = useModeToggle()
  const { query } = useRouter()
  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)

  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(query.slug)

  const [artistId, setArtistId] = useState()

  useEffect(() => {
    if (songData) {
      setArtistId(songData?.artists[0].adamid)
    }
  }, [songData])
  const { data, isFetching: isFetchingRelatedSongs, error } = useGetRelatedSongsQuery(artistId)

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song: any, idx: number) => {
    dispatch(setActiveSong({ song, data, idx }))
    dispatch(playPause(true))
  }

  if (isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="Searching song details" />
  if (error) return <Error />

  return (
    <Layout>
      <div className="flex flex-col">
        <DetailsHeader artistId="" songData={songData} />
        <div className="mb-10">
          <h2 className={`text-3xl font-bold ${darkMode && 'text-[#C1D0B5]'}`}>Lyrics:</h2>
          <div className="mt-5">
            {songData?.sections[1].type === 'LYRICS' ? (
              songData?.sections[1].text.map((line: string, idx: number) => (
                <p key={idx} className={`text-base ${darkMode && 'text-[#C1D0B5]'}`}>
                  {line}
                </p>
              ))
            ) : (
              <p className={`my-1 text-base ${darkMode && 'text-[#C1D0B5]'}`}>Sorry, no lyrics found!</p>
            )}
          </div>
        </div>
        <RelatedSongs
          data={data}
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

export default SongDetails
