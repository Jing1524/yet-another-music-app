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
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getSongsByGenre: builder.query({ query: () => '/charts/list' }),
    getSongDetails: builder.query({ query: (songid) => `/songs/get-details?key=${songid}` }),
    getRelatedSongs: builder.query({ query: (songid) => `artists/get-top-songs?id=${songid}` }),
    //getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?id=${artistId}` }),
    // getSongsByCountry: builder.query({ query: (countryCode) => `/v1/charts/country?country_code=${countryCode}` }),
    // getSongsBySearch: builder.query({
    //   query: (searchTerm) => `/v1/search/multi?search_type=SONGS_ARTISTS&query= ${searchTerm}`,
    // }),
  }),
})

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,

  useGetRelatedSongsQuery,
  //useGetArtistDetailsQuery,
  // useGetSongsByCountryQuery,
  // useGetSongsBySearchQuery,
} = shazamCoreApi
