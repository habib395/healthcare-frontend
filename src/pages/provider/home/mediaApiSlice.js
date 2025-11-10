import { baseApi } from '../query/baseApi';

export const mediaApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getMediaInfo: builder.query({
            query: () => '/media'
        })
    })
})

export const { useGetMediaInfoQuery } = mediaApi;