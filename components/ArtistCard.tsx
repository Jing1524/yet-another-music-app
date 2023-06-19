import { useModeToggle } from '@/context/modeProvider'
import { useRouter } from 'next/router'
const ArtistCard = ({ track }: any) => {
  const router = useRouter()
  const { darkMode } = useModeToggle()
  return (
    <div
      className={`flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer  ${
        darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-[#99A98F]'
      }`}
      onClick={() => router.push(`/artists/${track?.artists[0].adamid}`)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="artist"
        src={track?.share?.avatar ? track?.share?.avatar : track?.images?.coverart}
        className="w-full h-56 rounded-lg"
      />
      <p className="mt-4 text-lg font-semibold truncate">{track?.subtitle}</p>
    </div>
  )
}

export default ArtistCard
