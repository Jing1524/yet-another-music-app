import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../redux/features/playerSlice'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'
import 'swiper/css'
import 'swiper/css/free-mode'

const TopPlay = () => {
  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)
  // @ts-ignore
  const { data } = useGetTopChartsQuery()
  const divRef = useRef(null)

  useEffect(() => {
    if (divRef) {
      // @ts-ignore
      divRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const topPlays = data?.slice(0, 5)
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, idx }))
    dispatch(playPause(true))
  }
  return <div ref={divRef} className="flex-1 mb-6 ml-0 xl:ml-6 xl:mb-0"></div>
}

export default TopPlay
