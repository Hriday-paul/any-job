
import { userResType } from "../types";
import baseApi from "./baseApi";

const AuthApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<{ message: string, data: { token: string } }, { formData: any }>({
            query: ({ formData }) => ({
                url: '/auth/sign-up',
                method: 'POST',
                body: formData
            }),
            // invalidatesTags: []
        }),
        verifyOtp: builder.mutation<{ message: string, "accessToken": string }, { otp: number }>({
            query: ({ otp }) => ({
                url: '/auth/verify-account',
                method: 'POST',
                body: { otp },
            })
        }),

        resendOtp: builder.mutation<{ message: string, data: { token: string } }, void>({
            query: () => ({
                url: '/auth/resend-otp',
                method: 'POST',
            })
        }),

        loginUser: builder.mutation<{ message: string, data: { accessToken: string, refreshToken: string, profilePicture: string, firstName: string } }, { email: string, password: string }>({
            query: (data) => ({
                url: '/auth/sign-in',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['user']
        }),

        forgotPassword: builder.mutation<{ message: string, data: { token: string } }, { email: string }>({
            query: ({ email }) => ({
                url: '/auth/forget-password',
                method: 'POST',
                body: { email },
            }),
        }),

        resetPassword: builder.mutation<{ message: string }, { password: string }>({
            query: ({ password }) => ({
                url: '/auth/reset-password',
                method: 'POST',
                body: { password }
            }),
        }),

        getUserProfile: builder.query<{ message: string, data: userResType }, void>({
            query: () => ({
                url: '/user/profile',
            }),
            providesTags: ['user']
        }),
        getProfilesByID: builder.query<{ message: string, data: userResType }, { id: string }>({
            query: ({ id }) => ({
                url: `/user/contractor/${id}`,
            }),
        }),

        changePassword: builder.mutation<{ message: string }, {
            "oldPassword": string,
            "newPassword": string
        }>({
            query: (data) => ({
                url: '/auth/change-password',
                method: 'PATCH',
                body: data
            }),
        }),

        updateProfile: builder.mutation<{ message: string }, { data: any }>({
            query: ({ data }) => ({
                url: '/user/profile',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['user']
        }),

        addReview: builder.mutation<{ message: string, success: boolean }, {
            "userId": string,
            "rating": number,
            "comment": string,
            name: string,
            email: string
        }>({
            query: ({ userId, rating, comment, name, email }) => ({
                url: '/review/create',
                method: 'POST',
                body: { userId, rating, comment, name, email }
            }),
        })

    })
})

export const { useRegisterUserMutation, useVerifyOtpMutation, useResendOtpMutation, useLoginUserMutation, useResetPasswordMutation, useGetUserProfileQuery, useChangePasswordMutation, useUpdateProfileMutation, useForgotPasswordMutation, useGetProfilesByIDQuery, useAddReviewMutation } = AuthApi;