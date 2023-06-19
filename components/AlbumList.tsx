import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import PlayPause from './PlayPause'
import { useModeToggle } from '@/context/modeProvider'
import { useGetAlbumDetailsQuery } from '@/redux/services/shazamCore'

const AlbumList = ({ album }: any) => {
  const { data } = useGetAlbumDetailsQuery(album?.id)

  const { darkMode } = useModeToggle()
  return (
    <div
      className={`flex flex-col w-[250px] p-4 backdrop-blur-ms animate-slideup rounded-lg cursor-pointer ${
        darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-[#99A98F]'
      }`}
    >
      <Link href={`/albums/${album?.id}`}>
        <div className="relative w-full h-56 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="eager"
            className="w-full h-full rounded-lg"
            src={data?.data[0].attributes?.artwork?.url.replace('{w}', '1500').replace('{h}', '1500')}
            alt={data?.data[0]?.attributes.name}
          />
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex flex-row">
            <p className={`text-lg font-semibold ${darkMode && 'text-[#C1D0B5]'}`}>{data?.data[0]?.attributes.name}</p>
            <p className={`mt-1 ml-1 text-sm truncate ${darkMode && 'text-[#C1D0B5]'}`}>
              ({data?.data[0]?.attributes.recordLabel})
            </p>
          </div>

          <p className={`mt-1 text-sm truncate ${darkMode && 'text-[#C1D0B5]'}`}>
            Release Date {data?.data[0]?.attributes.releaseDate}
          </p>
          <p className={`mt-1 text-sm truncate ${darkMode && 'text-[#C1D0B5]'}`}>
            {data?.data[0]?.attributes.copyright}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default AlbumList
