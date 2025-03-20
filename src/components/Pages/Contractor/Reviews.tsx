import React from 'react';
import Review from './Review';
import { reviewsType } from '@/redux/types';

const Reviews = ({ reviews }: { reviews: reviewsType[] }) => {
    return (
        <div className='space-y-6 pb-8 md:pb-10 lg:pb-12 my-8'>
            {
                reviews?.map(review => {
                    return <Review review={review} key={review?.id} />
                })
            }
        </div>
    );
};

export default Reviews;