import React from 'react'

const Track = ({ isPlaying, isActive, activeSong }: any) => (
  <div className="flex items-center justify-start flex-1">
    <div
      className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}
    >
      <img
        src={
          activeSong?.images?.coverart
            ? activeSong?.images?.coverart
            : activeSong?.attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
        }
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div className="w-[50%]">
      <p className="text-lg font-bold text-white truncate">
        {activeSong?.title ? activeSong?.title : activeSong?.attributes?.name}
      </p>
      <p className="text-gray-300 truncate">
        {activeSong?.subtitle ? activeSong?.subtitle : activeSong?.attributes?.albumName}
      </p>
    </div>
  </div>
)

export default Track
