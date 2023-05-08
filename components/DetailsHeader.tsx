import Link from 'next/link'

const DetailsHeader = ({ artistId, artistData, songData }: any) => {
  return (
    <div className="relative flex flex-col w-full">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          alt="art"
          src={
            artistId
              ? artistData?.attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
              : songData?.images?.coverart
          }
          className="object-cover border-2 rounded-full shadow-xl sm:w-48 w-28 sm:h-48 h-28 shadow-black"
        />

        <div className="ml-5 ">
          <p className="text-xl font-bold text-white sm:text-3xl">
            {artistId ? artistData?.attributes?.name : songData?.title}
          </p>
          {!artistId && (
            <Link className="mt-2 text-base text-gray-400" href={`/artists/${songData?.artists[0].adamid}`}>
              <p>{songData?.subtitle}</p>
            </Link>
          )}
          <p className="mt-2 text-base text-gray-400">
            {artistId ? artistData?.attributes?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
      <div className="w-full h-24 sm:h-44" />
    </div>
  )
}
export default DetailsHeader
