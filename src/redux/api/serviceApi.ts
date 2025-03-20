
import { servicesType } from "../types";
import baseApi from "./baseApi";

const serviceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        services: builder.query<{ message: string, data: servicesType[] }, any>({
            query: (query) => ({
                url: '/service-list/services',
                method: 'GET',
                params: query
            }),
        }),
        singleService : builder.query<{ message: string, data: servicesType }, {id : string}>({
            query: ({id}) => ({
                url: `/service-list/${id}`,
                method: 'GET',
            }),
        }),
        deleteWorkPhoto: builder.mutation<{ message: string }, { url: string }>({
            query: (data) => ({
                url: '/user/work-photo',
                method: 'DELETE',
                body: data
            }),
            invalidatesTags: ['user']
        }),
    })
})

export const { useServicesQuery, useDeleteWorkPhotoMutation, useSingleServiceQuery } = serviceApi;