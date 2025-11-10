import { baseApi } from "../query/baseApi";

export const partnersApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getPartnersInfo: builder.query({
            query: () => '/partnars'
        })
    })
})

export const { useGetPartnersInfoQuery } = partnersApi;