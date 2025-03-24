"use client"
import React from 'react';
import ContructorProfileBio from '@/components/Pages/Contractor/ContructorProfileBio';
import ProfileHeader from '@/components/Pages/Contractor/ProfileHeader';
import Reviews from '@/components/Pages/Contractor/Reviews';
import { useGetUserProfileQuery } from '@/redux/api/authApi';
import ProfileSkeleton from '@/components/Skeletons/ProfileSkeleton';
import ErrorComponent from '@/components/Shared/ErrorComponent';

const ContructorProfie = () => {
    const { isLoading, isFetching, isSuccess, isError, data } = useGetUserProfileQuery()
    return (
        <div>
            {
                (isLoading || isFetching) ? <ProfileSkeleton /> : isSuccess ? <div className="bg-white py-6">
                    {/* Header Section */}
                    <ProfileHeader isEditable={true} profileData={data?.data} />

                    <ContructorProfileBio profileData={data?.data} />

                    <hr className='my-8' />

                    <Reviews reviews={data?.data?.reviews} />

                </div> : isError ? <ErrorComponent /> : <></>
            }
        </div>
    );
};

export default ContructorProfie;