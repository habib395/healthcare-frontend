import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://health-care-backend-pied.vercel.app/api/v1',
        prepareHeaders: (headers) =>{
            const token = localStorage.getItem("token");
            if(token){
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () =>({}),
})
