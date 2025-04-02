"use client"
import ErrorComponent from '@/components/Shared/ErrorComponent';
import { useSingleServiceQuery } from '@/redux/api/serviceApi';
import Image from 'next/image';
import React from 'react';
import { placeHolderBlurImg } from '../../../../utils/default';
import Link from 'next/link';
import { ImSpinner8 } from 'react-icons/im';

const SingleService = ({ id }: { id: string }) => {

    const { isLoading, isError, isSuccess, data } = useSingleServiceQuery({ id })

    console.log(data?.data)

    return (
        <div>

            <div className='bg-[url("/contructor_banner.jpeg")] min-h-80 md:min-h-[350px] lg:min-h-[400px] xl:min-h-[500px] bg-center bg-cover bg-no-repeat flex items-end'>
                <div className='container'>

                    <div className='p-5 md:p-6 lg:p-8 xl:p-10 bg-black/5 backdrop-blur-md mx-auto rounded'>
                        <Link href={`/postjob?service=${data?.data?.name}`} type='submit' className='bg-primary_red w-56 mx-auto px-5 py-3 font-figtree text-secondary rounded-lg mt-5 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                            Post Job & Get Quotes
                        </Link>
                    </div>

                </div>
            </div>

            <div className='container'>
                {
                    isLoading ? <div className='min-h-48 flex items-center justify-center'>
                        <ImSpinner8 className="text-4xl text-primary_red animate-spin" />
                    </div> : isSuccess ? <div className="bg-white py-6">

                        <h2 className='text-xl md:text-2xl xl:text-3xl font-figtree font-semibold text-black pb-5'>{data?.data?.name}</h2>

                        <Image src={data?.data?.image || "/empty_work_image.jpeg"} height={5000} width={5000} className='w-full mx-auto h-60 md:h-96 lg:h-[450px] xl:h-[500px] object-cover' placeholder='blur' alt="serviceImg" blurDataURL={placeHolderBlurImg} />

                        <article className='font-figtree text-zinc-800 py-5'>
                            {data?.data?.description}
                        </article>

                    </div> : isError ? <ErrorComponent /> : <></>
                }

            </div>
        </div>
    );
};

export default SingleService;