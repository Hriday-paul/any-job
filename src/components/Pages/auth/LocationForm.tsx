"use client"
import CountryMap from '@/components/Shared/CountryMap';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, { useState } from 'react';
import { counties } from '../../../../utils/default';
import { useRouter } from 'next/navigation';
import MapWithDrawing from '@/components/Shared/MapWithDrawing';

const LocationForm = () => {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const router = useRouter();

    const handleClick = () => {
        router.push('/pricing')
    }

    return (
        <div>
            {/* <CountryMap setSelectedCountry={setSelectedCountry} /> */}

            <MapWithDrawing />

            <div className="w-full mx-auto my-5">
                {/* <label htmlFor='brand' className="mb-1.5 block text-black dark:text-white font-figtree">
                    Select the counties you would like to receive jobs in?
                    <span className="text-red-500 text-base ml-1">*</span>
                </label> */}
                {/* <Select
                
                >
                    <SelectTrigger className={`bg-zinc-100 px-4 py-3 rounded-md  text-sm font-figtree w-full text-primary border border-stroke`}>
                        <SelectValue placeholder={"Select County"} />
                    </SelectTrigger>
                    <SelectContent className="rounded-sm text-sm font-figtree">
                        {
                            counties?.map(item => {
                                return <SelectItem key={item} value={item} className="h-10 font-figtree text-base font-medium hover:bg-zinc-100">{item}</SelectItem>
                            })
                        }
                    </SelectContent>
                </Select> */}

                <div className='grid grid-cols-2 gap-x-5 items-center my-5'>
                    <button onClick={handleClick} className="w-full bg-primary_red hover:bg-opacity-85 text-white font-medium px-4 py-3 rounded-md transition-colors font-figtree">
                        Enable Location
                    </button>
                    <button className="w-full bg-white border border-primary_red hover:bg-primary_red text-primary_red hover:text-white font-medium px-4 py-3 rounded-md transition-colors font-figtree">
                        Not Now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default LocationForm;