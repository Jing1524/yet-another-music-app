import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '389e6464c6msh189912c5606252bp128cd9jsn360d3bc09b38')

      return headers
    },
  }),
  // build all end points that's needed
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/v1/charts/world' }),
    getSongDetails: builder.query({ query: (songid) => `/v1/tracks/details?track_id=${songid}` }),
    getRelatedSongs: builder.query({ query: (songid) => `/v1/tracks/related?track_id=${songid}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/v2/artists/details?artist_id=${artistId}` }),
  }),
})

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetRelatedSongsQuery, useGetArtistDetailsQuery } =
  shazamCoreApi
