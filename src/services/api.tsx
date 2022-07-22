import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PostMaze } from './types/maze.interface'

export const mockyApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://mocky.io/v2' }),
    endpoints: (builder) => ({
        sendSolveMoves: builder.mutation<PostMaze, Partial<PostMaze> & Pick<PostMaze, 'id'>>({
            query: (body) => ({
                url: `/${body.id}`,
                method: 'POST',
                body,
            }),
        }),
    }),
})

// Export hooks for usage in functional components
export const { useSendSolveMovesMutation } = mockyApi;