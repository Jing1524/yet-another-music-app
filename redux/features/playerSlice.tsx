import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song
      console.log(action.payload)
      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload?.data?.tracks.hits
        console.log('wahhhhhhhhhhhhhh', state.currentSongs)
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks
        console.log('hererererereeerereerere', state.currentSongs)
      } else if (action.payload?.data?.data) {
        state.currentSongs = action.payload?.data?.data
        console.log('woooooooooooooooo', state.currentSongs)
      } else {
        state.currentSongs = action.payload?.albumData?.data[0]?.relationships?.tracks?.data
        console.log('whatttttttttttttt', state.currentSongs)
      }

      state.currentIndex = action.payload.idx
      state.isActive = true
    },

    nextSong: (state, action) => {
      // @ts-ignore
      if (state.currentSongs[action.payload]?.track) {
        // @ts-ignore
        state.activeSong = state.currentSongs[action.payload]?.track
      } else {
        state.activeSong = state.currentSongs[action.payload]
      }
      console.log(action)
      state.currentIndex = action.payload
      state.isActive = true
    },

    prevSong: (state, action) => {
      // @ts-ignore
      if (state.currentSongs[action.payload]?.track) {
        // @ts-ignore
        state.activeSong = state.currentSongs[action.payload]?.track
      } else {
        state.activeSong = state.currentSongs[action.payload]
      }

      state.currentIndex = action.payload
      state.isActive = true
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload
    },
  },
})

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions

export default playerSlice.reducer
