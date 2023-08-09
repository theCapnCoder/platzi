import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const playersSlice = createApi({
  reducerPath: 'players',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.balldontlie.io/api/v1/' }),
  tagTypes: ['Players'],
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => `players`,
      providesTags: ["Players"]
    }),
  })
})


export const { useGetPlayersQuery } = playersSlice;
