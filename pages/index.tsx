import Layout from '@/components/Layout'

import Discover from '@/components/Discover'
import { Loader, Error } from '@/components'
import { useGetSongsByGenreQuery, useGetTopChartsQuery } from '../redux/services/shazamCore'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  const { genreListId } = useSelector((state: any) => state.player)

  //const { isFetching, error } = useGetSongsByGenreQuery(genreListId || 'pop')
  // @ts-ignore
  const { isFetching, error } = useGetTopChartsQuery('en-US')

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode)
  }

  if (isFetching) return <Loader title="Loading songs..." />
  if (error) return <Error />
  return (
    <Layout title="Home | Next.js + TypeScript">
      <Discover />
    </Layout>
  )
}
