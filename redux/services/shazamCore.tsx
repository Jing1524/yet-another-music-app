import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', `${process.env.SHAZAM_CORE_API_KEY}`)

      return headers
    },
  }),
  // build all end points that's needed
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: (countryCode) => `/charts/track?locale=${countryCode}` }),
    getSongsByGenre: builder.query({ query: (listId) => `/charts/track?listId=${listId}` }),
    getSongDetails: builder.query({ query: (songid) => `/songs/get-details?key=${songid}` }),
    getRelatedSongs: builder.query({ query: (songid) => `artists/get-top-songs?id=${songid}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?id=${artistId}` }),
    getAlbumDetails: builder.query({ query: (albumId) => `/albums/get-details?id=${albumId}` }),
    getSongsByCountry: builder.query({ query: () => '/charts/list' }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}`,
    }),
  }),
})

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetAlbumDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi
