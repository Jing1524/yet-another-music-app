import React from 'react'
// import { Link } from 'react-router-dom';

import PlayPause from './PlayPause'

const SongBar = ({ song, idx, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }: any) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-[#C1D0B5] ${
      activeSong?.title === song?.title ? 'bg-[#C1D0B5]' : 'bg-transparent'
    } py-2 p-4 rounded-lg cursor-pointer mb-2`}
  >
    <h3 className="mr-3 text-base font-bold text-white">{idx + 1}.</h3>
    <div className="flex flex-row items-center justify-between flex-1">
      <img
        className="w-20 h-20 rounded-lg"
        src={
          artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : song?.images?.coverart
        }
        alt={song?.title}
      />
      <div className="flex flex-col justify-center flex-1 mx-3">
        {/* {!artistId ? (
          <Link to={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">
              {song?.title}
            </p>
          </Link>
        ) : (
          <p className="text-xl font-bold text-white">
            {song?.attributes?.name}
          </p>
        )} */}
        <p className="mt-1 text-base text-gray-300">{artistId ? song?.attributes?.albumName : song?.subtitle}</p>
      </div>
    </div>
    {!artistId ? (
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, idx)}
      />
    ) : null}
  </div>
)

export default SongBar
