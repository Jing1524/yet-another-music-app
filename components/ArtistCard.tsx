import { useRouter } from 'next/router'
const ArtistCard = ({ track }: any) => {
  const router = useRouter()
  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => router.push(`/artists/${track?.artists[0].adamid}`)}
    >
      <img alt="artist" src={track?.images?.coverart} className="w-full h-56 rounded-lg" />
      <p className="mt-4 text-lg font-semibold text-white truncate">{track?.subtitle}</p>
    </div>
  )
}

export default ArtistCard
