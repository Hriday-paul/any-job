
import React from 'react';
import { Check,Star } from 'lucide-react';
import GiveReview from '@/components/Pages/Contractor/GiveReview';
import Reviews from '@/components/Pages/Contractor/Reviews';
import ServiceImages from '@/components/Pages/Contractor/ServiceImages';
import ProfileHeader from '@/components/Pages/Contractor/ProfileHeader';
import ContructorProfileBio from '@/components/Pages/Contractor/ContructorProfileBio';

const page = () => {
    return (
        <div className='container'>
            <div className="bg-white py-6">
                {/* Header Section */}
                <ProfileHeader />

                <ContructorProfileBio />

                <hr className='my-8' />

                <GiveReview />

                <Reviews />

            </div>
        </div>
    );
};

export default page;