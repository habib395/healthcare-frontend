import { baseApi } from "../query/baseApi";

export const whyDocApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        getWHyDocInfo: builder.query({
            query: () => '/whyDoc'
        })
    })
})

export const { useGetWHyDocInfoQuery } = whyDocApi;