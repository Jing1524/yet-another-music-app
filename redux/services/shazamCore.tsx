import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '389e6464c6msh189912c5606252bp128cd9jsn360d3bc09b38')

      return headers
    },
  }),
  // build all end points that's needed
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongDetails: builder.query({ query: (songid) => `/tracks/details?track_id=${songid}` }),
    getRelatedSongs: builder.query({ query: (songid) => `/tracks/related?track_id=${songid}` }),
  }),
})

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetRelatedSongsQuery } = shazamCoreApi
