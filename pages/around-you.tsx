import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Error, Loader, SongCard } from '@/components'
import { useGetSongsByCountryQuery } from '@/redux/services/shazamCore'
import Layout from '@/components/Layout'

const AroundYou = () => {
  const [country, setCountry] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)
  const { data, isFetching, error } = useGetSongsByCountryQuery(country)

  useEffect(() => {
    // at_TJKVQuu1zGZ69AZiNtKxIhYIISgVT
    axios
      .get(`https://geo.ipify.org/api/v2/country?apiKey=at_TJKVQuu1zGZ69AZiNtKxIhYIISgVT`)
      .then((res) => setCountry(res.data.location.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [country])

  if (isFetching && loading) return <Loader title="Loading songs in your country" />
  if (error && country) return <Error />

  return (
    <Layout>
      <div className="flex flex-col ">
        <h2 className="mt-4 mb-10 text-3xl font-bold text-left text-white">
          Music Around <span>{country}</span>
        </h2>
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
      </div>
    </Layout>
  )
}

export default AroundYou