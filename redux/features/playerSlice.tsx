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

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload?.data?.tracks.hits
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks
      } else if (action.payload?.data?.data) {
        state.currentSongs = action.payload?.data?.data
      } else {
        state.currentSongs = action.payload?.albumData?.data[0]?.relationships?.tracks?.data
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
