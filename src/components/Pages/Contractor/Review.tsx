import React from 'react';
import { Rating, Star } from '@smastrom/react-rating';
import { reviewsType } from '@/redux/types';

const Review = ({ review }: { review: reviewsType }) => {
    return (
        <div>
            <div className=''>
                <h6 className='text-black text-lg font-medium font-figtree mb-1'>{review?.name}</h6>
                <section>
                    <div className='flex flex-row gap-x-1.5 items-center'>
                        <Rating
                            value={3}
                            readOnly={true}
                            style={{ maxWidth: 80 }}
                            items={5}
                            transition="zoom"
                            itemStyles={{
                                itemShapes: Star,
                                activeFillColor: "#ffb700",
                                inactiveFillColor: "#e5e7eb",
                            }}
                        />
                        <p className='text-sm font-figtree text-black'>{`(${review?.rating}/5)`}</p>
                    </div>
                </section>
            </div>
            <p className="text-base font-figtree font-medium text-gray-600 mt-2">
                {review?.comment}
            </p>
        </div>
    );
};

export default Review;