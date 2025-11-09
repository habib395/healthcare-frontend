import { baseApi } from "../query/baseApi";

export const blogsApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        getBlogsInfo: builder.query({
            query: () => '/blogs'
        })
    })
});

export const { useGetBlogsInfoQuery } = blogsApi;