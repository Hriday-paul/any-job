"use client"
import React from 'react';
import { useServicesQuery } from '@/redux/api/serviceApi';
import { Skeleton } from '@/components/ui/skeleton';

const FilterService = ({ setSelectedServices, selectedServices }: { setSelectedServices: React.Dispatch<React.SetStateAction<string[]>>, selectedServices: string[] }) => {
    const { isLoading, isSuccess, data } = useServicesQuery({});

    const handleServiceFilter = (name: string) => {

        const exist = selectedServices?.find(item => item == name);

        if (exist) {
            const newData = selectedServices?.filter(i => i != name);
            setSelectedServices(newData)
        }
        else {
            setSelectedServices(prev => {
                return [...prev, name]
            })
        }
    };

    return (
        <div className='p-2'>
            <section className='flex flex-col space-y-5'>
                {
                    isSuccess && data?.data?.map((item) => {
                        return <div key={item?.id} className="inline-flex items-center mt-2">
                            <label className="flex items-center cursor-pointer relative" htmlFor={item?.name}>
                                <input onChange={() => handleServiceFilter(item?.name)} type="checkbox" name='service' className="peer h-[18px] w-[18px] cursor-pointer transition-all appearance-none rounded-sm border border-zinc-500 checked:border-zinc-500" id={item?.name} />
                                <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label className="cursor-pointer ml-2.5 text-[#232323] font-figtree font-medium text-base capitalize" htmlFor={item?.name}>
                                {item?.name}
                            </label>
                        </div>
                    })
                }

                {
                    isLoading && <div className='flex flex-col space-y-3'>
                        <Skeleton className="h-8 w-full bg-slate-100" />
                        <Skeleton className="h-8 w-full bg-slate-100" />
                        <Skeleton className="h-8 w-full bg-slate-100" />
                        <Skeleton className="h-8 w-full bg-slate-100" />
                        <Skeleton className="h-8 w-full bg-slate-100" />
                        <Skeleton className="h-8 w-full bg-slate-100" />
                        <Skeleton className="h-8 w-full bg-slate-100" />
                    </div>
                }
            </section>
        </div>
    );
};

export default FilterService;