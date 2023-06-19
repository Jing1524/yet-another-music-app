/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react'

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }: any) => {
  console.log(activeSong)
  const ref = useRef(null)
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      // @ts-ignore
      ref.current.play()
    } else {
      // @ts-ignore
      ref.current.pause()
    }
  }

  useEffect(() => {
    // @ts-ignore
    ref.current.volume = volume
  }, [volume])
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    // @ts-ignore
    ref.current.currentTime = seekTime
  }, [seekTime])

  return (
    <audio
      src={
        activeSong?.hub?.actions[1]?.uri ? activeSong?.hub?.actions[1]?.uri : activeSong?.attributes?.previews[0].url
      }
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  )
}

export default Player
