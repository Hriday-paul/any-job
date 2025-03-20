"use client"
import ProfileSkeleton from '@/components/Skeletons/ProfileSkeleton';
import { useGetProfilesByIDQuery, useGetUserProfileQuery } from '@/redux/api/authApi';
import React from 'react';
import ProfileHeader from './ProfileHeader';
import ContructorProfileBio from './ContructorProfileBio';
import Reviews from './Reviews';
import ErrorComponent from '@/components/Shared/ErrorComponent';
import GiveReview from './GiveReview';

const PublicProfile = ({ id }: { id: string }) => {

    const { isLoading, isSuccess, isError, data } = useGetProfilesByIDQuery({ id });

    return (
        <div>
            {
                isLoading ? <ProfileSkeleton /> : isSuccess ? <div className="bg-white py-6">
                    {/* Header Section */}
                    <ProfileHeader isEditable={false} profileData={data?.data} isPublic={false} />

                    <ContructorProfileBio profileData={data?.data} />

                    <hr className='my-8' />


                    <GiveReview id={id} />

                    <Reviews reviews={data?.data?.reviews} />

                </div> : isError ? <ErrorComponent /> : <></>
            }
        </div>
    );
};

export default PublicProfile;