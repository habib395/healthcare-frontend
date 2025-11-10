import { baseApi } from "../query/baseApi";

export const reviewApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getReviewInfo: builder.query({
            query: () => '/reviews'
        })
    }) 
})

export const { useGetReviewInfoQuery } = reviewApi;