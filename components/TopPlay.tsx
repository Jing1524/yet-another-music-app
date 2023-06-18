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
import { useModeToggle } from '@/context/modeProvider'

const TopChartCard = ({ song, idx, isPlaying, activeSong, handlePauseClick, handlePlayClick }: any) => {
  const { darkMode } = useModeToggle()
  return (
    <div className="flex flex-row items-center w-full p-4 py-2 mb-2 rounded-lg cursor-pointer hover:bg-white/5">
      <h3 className={`mr-3 text-base font-bold ${darkMode && 'text-[#C1D0B5]'}`}>{idx + 1}.</h3>
      <div className="flex flex-row items-center justify-between flex-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={song?.images?.coverart} alt={song?.title} className="w-20 h-20 rounded-lg " />
        <div className="flex flex-col justify-center flex-1 mx-3">
          <Link href={`/songs/${song?.key}`}>
            <p className={`text-xl font-bold ${darkMode && 'text-[#C1D0B5]'}`}>{song.title}</p>
          </Link>
          <Link href={`/artists/${song.artists[0].adamid}`}>
            <p className={`mt-1 text-base font-bold ${darkMode && 'text-[#C1D0B5]'}`}>By {song.subtitle}</p>
          </Link>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        song={song}
        handlePause={handlePauseClick}
        activeSong={activeSong}
        handlePlay={handlePlayClick}
      />
    </div>
  )
}

const TopPlay = () => {
  const { darkMode } = useModeToggle()
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

  const topPlays = data?.tracks.slice(0, 5)

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song: any, idx: number) => {
    dispatch(setActiveSong({ song, data, idx }))
    dispatch(playPause(true))
  }
  return (
    <div ref={divRef} className="flex-1 mb-6 ml-0 xl:ml-6 xl:mb-0 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between felx-row">
          <h2 className={`text-2xl font-bold ${darkMode && 'text-[#C1D0B5]'}`}>Top Charts</h2>
          <Link href="/top-charts">
            <p className={`text-base curcor-pointer ${darkMode && 'text-[#C1D0B5]'}`}>See more</p>
          </Link>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          {topPlays?.map((track: any, idx: number) => {
            return (
              <TopChartCard
                key={track.key}
                song={track}
                idx={idx}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={() => handlePlayClick(track, idx)}
              />
            )
          })}
        </div>
      </div>
      <div className="flex flex-col w-full mt-8">
        <div className="flex items-center justify-between felx-row">
          <h2 className={`text-2xl font-bold ${darkMode && 'text-[#C1D0B5]'}`}>Top Artists</h2>
          <Link href="/top-artists">
            <p className={`text-base curcor-pointer ${darkMode && 'text-[#C1D0B5]'}`}>See more</p>
          </Link>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.map((track: any, idx: number) => {
            return (
              <SwiperSlide
                key={track.key}
                style={{ width: '25%', height: 'auto' }}
                className="rounded-full shadow-lg animate-slideright"
              >
                <Link href={`/artists/${track?.artists[0].adamid}`}>
                  <img
                    src={track?.share?.avatar ? track?.share?.avatar : track?.share?.image}
                    alt="artist name"
                    className="object-cover w-full rounded-full"
                  />
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default TopPlay
