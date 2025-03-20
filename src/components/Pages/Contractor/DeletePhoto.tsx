import { useDeleteWorkPhotoMutation } from '@/redux/api/serviceApi';
import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { MdDeleteOutline } from 'react-icons/md';
import { toast } from 'sonner';

const DeletePhoto = ({ url }: { url: string }) => {
    const [postDeleteWorkPhot, { isLoading }] = useDeleteWorkPhotoMutation();

    const removeExistings = async (url: string) => {
        try {
            const res = await postDeleteWorkPhot({ url }).unwrap();

            toast.success(res?.message)

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again')
        }
    }

    return (
        <button onClick={() => removeExistings(url)} type='button' className='border border-stroke bg-zinc-200 rounded p-1 mr-2'>
            {isLoading ? <ImSpinner2 className="text-lg text-primary_red animate-spin" /> : <MdDeleteOutline className='text-lg text-danger' />}
        </button>
    );
};

export default DeletePhoto;