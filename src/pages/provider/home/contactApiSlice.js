import { baseApi } from "../query/baseApi";

export const contactApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postContact: builder.mutation({
            query: (contactData) => 
            ({
                url: '/contact',
                method: 'POST',
                body: contactData,
            })
        })
    })
});

export const {usePostContactMutation } = contactApi;