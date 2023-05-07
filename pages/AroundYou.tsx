import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Error, Loader, SongCard } from '@/components'

const AroundYou = () => {
  const [country, setCountry] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)
  console.log(country)
  useEffect(() => {
    // at_TJKVQuu1zGZ69AZiNtKxIhYIISgVT
    axios
      .get(`https://geo.ipify.org/api/v2/country?apiKey=at_TJKVQuu1zGZ69AZiNtKxIhYIISgVT`)
      .then((res) => setCountry(res.data.location.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [country])
  return <div className="">CountryTracks</div>
}

export default AroundYou
