
import { config } from "../../../utils/config";
import { jobType, myjobsType, servicesType } from "../types";
import baseApi from "./baseApi";

const jobsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        myNearestJobs: builder.query<{ success: boolean, message: string, data: jobType[] }, any>({
            query: (query) => ({
                url: '/job/nearest',
                method: 'GET',
                params: query
            }),
            providesTags: ['jobs']
        }),
        getAddreessByGoogle: builder.query<{ results: any[] }, { lat: number, lng: number }>({
            query: ({ lat, lng }) => ({
                url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${config.MAP_KEY}`,
                method: 'GET',
            })
        }),
        PostJob: builder.mutation<{ message: string, success: boolean }, any>({
            query: (data) => ({
                url: '/job/create',
                method: 'POST',
                body: data
            }),

        }),
        sendQuote: builder.mutation<{ message: string, success: boolean }, {
            "jobId": string,
            "price": number,
            "scheduleDateTime": Date,
            "availability"?: string,
            "message": string
        }>({
            query: (data) => ({
                url: '/quote/create',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['jobs']
        }),

        MyJobs: builder.query<{ message: string, success: boolean, data: myjobsType[], meta: { totalPage: number } }, any>({
            query: (query) => ({
                url: `/quote/my-quotes-as-contractor`,
                method: 'GET',
                params: query
            })
        }),

        jobStatusUpdate: builder.mutation<{ message: string, success: boolean }, { id: string, data: any }>({
            query: ({ id, data }) => ({
                url: `/quote/${id}`,
                method: 'PATCH',
                body: data
            }),

        }),

        quotesByJob: builder.query<{ message: string, success: boolean, data: myjobsType[] }, { token: string }>({
            query: ({ token }) => ({
                url: `/quote/my-quotes?token=${token}`,
                method: 'GET',
            })
        }),

        acceptQuote: builder.mutation<{ message: string, success: boolean, data: string }, { id: string }>({
            query: ({ id }) => ({
                url: `/quote/make-payment/${id}`,
                method: 'POST',
            }),

        })

    })
})

export const { usePostJobMutation, useMyNearestJobsQuery, useSendQuoteMutation, useGetAddreessByGoogleQuery, useMyJobsQuery, useQuotesByJobQuery, useAcceptQuoteMutation, useJobStatusUpdateMutation } = jobsApi;