import { baseApi } from "../query/baseApi";

export const downloadApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        getDownloadInfo: builder.query({
            query: () => '/download'
        })
    })
})

export const { useGetDownloadInfoQuery } = downloadApi;