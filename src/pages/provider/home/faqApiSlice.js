import { baseApi } from "../query/baseApi";

export const faqApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getFaqsInfo: builder.query({
            query: () => '/faq'
        })
    })
})

export const { useGetFaqsInfoQuery } = faqApi;