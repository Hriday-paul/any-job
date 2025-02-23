import React from 'react';
import Review from './Review';

const Reviews = () => {
    return (
        <div className='space-y-6 pb-8 md:pb-10 lg:pb-12 my-8'>
            <Review />
            <Review />
            <Review />
        </div>
    );
};

export default Reviews;