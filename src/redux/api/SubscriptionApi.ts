
import { currentSubscriptionType, packageType } from "../types";
import baseApi from "./baseApi";

const SubscriptionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        packages: builder.query<{ message: string, data: packageType[] }, void>({
            query: () => ({
                url: '/package/packages',
                method: 'GET',
            }),
        }),
        creatSubscription: builder.mutation<{ message: string, data: { paymentLink: string } }, { packageId: string }>({
            query: ({ packageId }) => ({
                url: '/subscription/create',
                method: 'POST',
                body: { packageId: packageId }
            }),
        }),

        currentSubscription: builder.query<{ message: string, data: currentSubscriptionType | null, success: boolean }, void>({
            query: () => ({
                url: '/subscription/current',
                method: 'GET',
            }),
        }),

        connectAccount: builder.mutation<{ message: string, data: string, success: boolean }, { redirect: string }>({
            query: ({ redirect }) => ({
                url: '/stripe/connect',
                method: 'PATCH',
                params: { redirectPath: redirect }
            }),
        }),
    })
})

export const { usePackagesQuery, useCreatSubscriptionMutation, useConnectAccountMutation, useCurrentSubscriptionQuery } = SubscriptionApi;