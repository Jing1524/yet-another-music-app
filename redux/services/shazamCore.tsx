import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', `${process.env.SHAZAM_CORE_API_KEY}`)

      return headers
    },
  }),
  // build all end points that's needed
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/chart/songs/' }),
    // @ts-ignore
    getSongsByGenre: builder.query({ query: (genre) => `/chart/songs/?chart_genre=${genre}&per_page=50` }),

    // getSongDetails: builder.query({ query: (songid) => `/v1/tracks/details?track_id=${songid}` }),
    // getRelatedSongs: builder.query({ query: (songid) => `/v1/tracks/related?track_id=${songid}` }),
    // getArtistDetails: builder.query({ query: (artistId) => `/v2/artists/details?artist_id=${artistId}` }),
    // getSongsByCountry: builder.query({ query: (countryCode) => `/v1/charts/country?country_code=${countryCode}` }),
    // getSongsBySearch: builder.query({
    //   query: (searchTerm) => `/v1/search/multi?search_type=SONGS_ARTISTS&query= ${searchTerm}`,
    // }),
  }),
})

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  // useGetSongDetailsQuery,
  // useGetRelatedSongsQuery,
  // useGetArtistDetailsQuery,
  // useGetSongsByCountryQuery,
  // useGetSongsBySearchQuery,
} = shazamCoreApi
