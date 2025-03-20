import { useDeleteWorkPhotoMutation } from '@/redux/api/serviceApi';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { toast } from 'sonner';
import DeletePhoto from './DeletePhoto';

const FilesManager = ({ uploadServiceImg, servicePhotos, setServicePhotos, defaultImgs }: { uploadServiceImg: (e: React.ChangeEvent<HTMLInputElement>) => void, servicePhotos: File[], setServicePhotos: React.Dispatch<React.SetStateAction<File[]>>, defaultImgs: string[] }) => {

    

    const [defaultWorkPhotos, setDefaultWorkPhotos] = useState<string[]>([])

    const removeImg = useCallback((indxParam: number) => {
        const finalImgs = servicePhotos?.filter((i, indx) => {
            return indx !== indxParam
        })
        setServicePhotos(finalImgs)
    }, [servicePhotos])


    useEffect(() => {
        setDefaultWorkPhotos(defaultImgs)
    }, [defaultImgs]);


    return (
        <div className="w-full mx-auto mb-3">
            <label htmlFor='img' className="mb-1.5 block text-black dark:text-white font-figtree">
                Upload Images
                {/* <span className="text-red-500 text-base ml-1">*</span> */}
            </label>
            <input
                type="file"
                id='img'
                accept="image/*"
                multiple
                onChange={uploadServiceImg}
                className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary mb-2`}
            />

            {
                servicePhotos?.map((img, indx) => {
                    return <div key={indx} className='flex flex-row justify-between items-center p-1 border border-stroke rounded-md mb-2'>
                        <div className='relative w-14 h-14'>
                            <Image src={URL.createObjectURL(img)} fill className='h-full w-full object-cover rounded-md' alt='any job work atachment' />
                        </div>
                        <button onClick={() => removeImg(indx)} type='button' className='border border-stroke bg-zinc-200 rounded p-1 mr-2'>
                            <MdDeleteOutline className='text-lg text-danger' />
                        </button>
                    </div>
                })
            }
            {
                defaultWorkPhotos?.map((img, indx) => {
                    return <div key={indx} className='flex flex-row justify-between items-center p-1 border border-stroke rounded-md mb-2'>
                        <div className='relative w-14 h-14'>
                            <Image src={img} fill className='h-full w-full object-cover rounded-md' alt='any job work atachment' />
                        </div>
                        <DeletePhoto url={img}/>
                    </div>
                })
            }
        </div>
    );
};

export default FilesManager;