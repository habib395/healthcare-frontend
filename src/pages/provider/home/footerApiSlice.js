import { baseApi } from "../query/baseApi";

export const footerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFooterInfo: builder.query({
            query: () => '/footer'
        })
    })
})

export const { useGetFooterInfoQuery } = footerApi;