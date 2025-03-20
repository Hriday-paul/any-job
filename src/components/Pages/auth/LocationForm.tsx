"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import MapWithDrawing from '@/components/Shared/MapWithDrawing';
import ConnectBankPopup from './ConnectBankPopup';
import { useUpdateProfileMutation } from '@/redux/api/authApi';
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'sonner';

const LocationForm = () => {

    const [postUpdate, { isLoading: updateLoading }] = useUpdateProfileMutation();

    const [selectedArea, setSelectedArea] = useState<{ latitude: number, longitude: number }[][]>([]);
    const router = useRouter();

    const [open, setOpen] = useState<boolean>(false);

    const handleClick = async () => {

        if (selectedArea?.length <= 0) {
            toast.error("Please select your service area");
            return;
        }

        try {

            const form = new FormData();
            form.append('data', JSON.stringify({ location: selectedArea }))

            await postUpdate({ data: form }).unwrap();

            setOpen(true);

        } catch (err: any) {
            toast.error(err?.data?.message || "Something went wrong, try again")
        }
    }

    const resetArea = () => {
        setSelectedArea([]);
    };

    return (
        <div>
            {/* <CountryMap setSelectedCountry={setSelectedCountry} /> */}

            <MapWithDrawing selectedArea={selectedArea} setSelectedArea={setSelectedArea} />

            <div className="w-full mx-auto my-5">

                <div className='grid grid-cols-2 gap-x-5 items-center my-5'>
                    <button onClick={resetArea} className="w-full bg-white border border-primary_red hover:bg-primary_red text-primary_red hover:text-white font-medium px-4 py-3 rounded-md transition-colors font-figtree">
                        Clear
                    </button>

                    <button onClick={handleClick} type='submit' disabled={updateLoading} className='w-full bg-primary_red hover:bg-opacity-85 text-white font-medium px-4 py-3 rounded-md transition-colors font-figtree duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60'>
                        {updateLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                        <span>{updateLoading ? 'Loading...' : "Next"}</span>
                    </button>

                </div>

            </div>
            <ConnectBankPopup open={open} />
        </div>
    );
};

export default LocationForm;