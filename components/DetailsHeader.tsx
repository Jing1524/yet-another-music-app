import { useModeToggle } from '@/context/modeProvider'
import Link from 'next/link'

const DetailsHeader = ({ artistId, artistData, songData }: any) => {
  const { darkMode } = useModeToggle()
  return (
    <div className="relative flex flex-col w-full">
      <div
        className={`w-full bg-gradient-to-l from-transparent ${darkMode ? 'to-black' : 'to-[#617A55]'} sm:h-48 h-28 `}
      />
      <div className="absolute inset-0 flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="art"
          src={
            // artistId
            //   ? artistData?.data[0].avatar.replace('{w}', '500').replace('{h}', '500')
            songData?.song?.song_art_image_thumbnail_url
          }
          className="object-cover border-2 rounded-full shadow-xl sm:w-48 w-28 sm:h-48 h-28 shadow-black"
        />

        <div className="ml-5 ">
          <p className={`text-xl font-bold sm:text-3xl ${darkMode && 'text-[#C1D0B5]'}`}>
            {/* {artistId ? artistData?.data[0]?.attributes?.name : songData?.title} */}
            {songData?.song?.full_title}
          </p>
          {!artistId && (
            <Link
              className={`mt-2 text-base ${darkMode && 'text-[#C1D0B5]'}`}
              // href={`/artists/${songData?.artists[0].adamid}`}
              href=""
            >
              <p>By {songData?.subtitle}</p>
            </Link>
          )}
          <p className={`mt-2 text-base ${darkMode && 'text-[#C1D0B5]'}`}>
            {/* {artistId ? artistData?.data[0]?.attributes?.genreNames[0] : songData?.genres?.primary} */}
            {songData?.song?.primary_tag.name}
          </p>
        </div>
      </div>
      <div className="w-full h-24 sm:h-44" />
    </div>
  )
}
export default DetailsHeader
