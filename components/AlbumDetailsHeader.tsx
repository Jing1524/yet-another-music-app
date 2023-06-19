import { useModeToggle } from '@/context/modeProvider'
import Link from 'next/link'

const AblumDetailsHeader = ({ data }: any) => {
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
          src={data?.data[0].attributes.artwork.url.replace('{w}', '500').replace('{h}', '500')}
          className="object-cover border-2 rounded-full shadow-xl sm:w-48 w-28 sm:h-48 h-28 shadow-black"
        />

        <div className="ml-5 ">
          <p className={`text-xl font-bold sm:text-3xl ${darkMode && 'text-[#C1D0B5]'}`}>
            {data?.data[0]?.attributes?.name}
          </p>
          <p className={`mt-2 text-base ${darkMode && 'text-[#C1D0B5]'}`}>
            <b>Editorial Notes: </b>
            {data?.data[0]?.attributes?.editorialNotes?.short}
          </p>
          <p className={`mt-2 text-base ${darkMode && 'text-[#C1D0B5]'}`}>
            <b>Record Label</b> {data?.data[0]?.attributes?.recordLabel}
          </p>
        </div>
      </div>
      <div className="w-full h-24 sm:h-44" />
    </div>
  )
}
export default AblumDetailsHeader
