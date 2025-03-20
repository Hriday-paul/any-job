"use client"
import React, { useState } from 'react';
import { Rating, Star } from "@smastrom/react-rating"
import "@smastrom/react-rating/style.css"
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiEdit } from "react-icons/fi";
import { ImSpinner2 } from 'react-icons/im';
import { useAddReviewMutation } from '@/redux/api/authApi';
import { toast } from 'sonner';

type review = {
    message: string,
    name: string,
    email: string
}

const GiveReview = ({ id }: { id: string }) => {

    const [postReview, { isLoading }] = useAddReviewMutation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<review>();

    const [rating, setRating] = useState(1)

    const handleRatingChange = (newRating: number) => {
        setRating(newRating)

    }

    const handleFormSubmit: SubmitHandler<review> = async (data) => {
        try {
            const res = await postReview({ userId: id, comment: data?.message, rating: rating, name: data?.name, email: data?.email }).unwrap();
            toast.success(res?.message);
            reset();
            setRating(0);
        } catch (err: any) {
            toast.error(err?.data?.message || "Something wents wrong, try again")
        }
    }

    return (
        <div>
            <div className='flex flex-row gap-x-3 items-center'>
                <h5 className='text-lg font-figtree font-medium text-gray-600'>Give us rating </h5>
                <Rating
                    value={rating}
                    onChange={handleRatingChange}
                    readOnly={false}
                    style={{ maxWidth: 130 }}
                    items={5}
                    transition="zoom"
                    itemStyles={{
                        itemShapes: Star,
                        activeFillColor: "#ffb700",
                        inactiveFillColor: "#e5e7eb",
                    }}
                />
            </div>

            <div className='flex flex-row gap-x-2 items-center my-3'>
                <FiEdit className='text-gray-600 text-base' />
                <p className='font-figtree text-base text-gray-600 font-medium'>Write a Review</p>
            </div>

            <form onSubmit={handleSubmit(handleFormSubmit)}>

                <div className='grid grid-cols-2 gap-x-5 items-center mb-5'>
                    <input type='text' {...register("name", { required: true })} placeholder='First name' className={`rounded-lg bg-gray-100 w-full shadow border ${errors?.message ? "border-danger" : "border-stroke"} outline-0 p-3 px-5 font-figtree font-medium text-base`}></input>

                    <input type='email' {...register("email", { required: true })} placeholder='Email' className={`rounded-lg bg-gray-100 w-full shadow border ${errors?.message ? "border-danger" : "border-stroke"} outline-0 p-3 px-5 font-figtree font-medium text-base`}></input>
                </div>

                <textarea placeholder='Write review message here...' rows={6} {...register("message", { required: true, minLength: { value: 10, message: "message minimum 10 character" } })} className={`rounded-lg bg-gray-100 w-full shadow border ${errors?.message ? "border-danger" : "border-stroke"} outline-0 p-3 font-figtree font-medium text-base`}>
                </textarea>
                {errors?.message && <p className="text-red-500 text-sm col-span-2 font-figtree">{errors?.message?.message}</p>}

                <div className='flex justify-end'>
                    <button type='submit' disabled={isLoading} className='bg-primary_red py-3 px-5 font-figtree text-secondary rounded-lg mt-3 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                        {isLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                        <span>{isLoading ? 'Loading...' : "Submit"}</span>
                    </button>
                </div>
            </form>


        </div>
    );
};

export default GiveReview;