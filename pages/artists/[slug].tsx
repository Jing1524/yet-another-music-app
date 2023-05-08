import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { DetailsHeader, Error, Loader, RelatedSongs } from '@/components'

import { useGetArtistDetailsQuery } from '@/redux/services/shazamCore'
import Layout from '@/components/Layout'

const ArtistDetails = () => {
  const { query } = useRouter()
  const artistId = query.slug
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId)
  console.log({ artistData })

  if (isFetchingArtistDetails) return <Loader title="Loading artist details" />
  if (error) return <Error />

  return (
    <Layout>
      <div className="flex flex-col">
        <DetailsHeader artistId={artistId} artistData={artistData} />

        <RelatedSongs
          data={artistData?.data[0].views['top-songs']?.data}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      </div>
    </Layout>
  )
}

export default ArtistDetails
