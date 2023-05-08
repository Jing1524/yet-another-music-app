import Layout from '@/components/Layout'

import Discover from '@/components/Discover'
import { Loader, Error } from '@/components'
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  // const { genreListId } = useSelector((state: any) => state.player)

  // const { isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP')

  // if (isFetching) return <Loader title="Loading songs..." />
  // if (error) return <Error />
  return (
    <Layout title="Home | Next.js + TypeScript">
      <Discover />
    </Layout>
  )
}
