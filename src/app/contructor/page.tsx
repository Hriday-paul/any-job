import ContructorProfileBio from '@/components/Pages/Contractor/ContructorProfileBio';
import ProfileHeader from '@/components/Pages/Contractor/ProfileHeader';
import Reviews from '@/components/Pages/Contractor/Reviews';
import React from 'react';

const page = () => {
    return (
        <div className='container'>
            <div className="bg-white py-6">
                {/* Header Section */}
                <ProfileHeader isEditable={true} />

                <ContructorProfileBio />

                <hr className='my-8'/>

                <Reviews />

            </div>
        </div>
    );
};

export default page;