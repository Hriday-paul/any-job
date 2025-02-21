import React from 'react';
import { services } from '../../../../utils/default';

const FilterService = () => {
    return (
        <div className='p-2'>
            <section className='flex flex-col space-y-5'>
                {
                    services?.map((item, indx) => {
                        return <div key={indx} className="inline-flex items-center mt-2">
                            <label className="flex items-center cursor-pointer relative" htmlFor={item}>
                                <input type="checkbox" name='service' className="peer h-[18px] w-[18px] cursor-pointer transition-all appearance-none rounded-sm border border-zinc-500 checked:border-zinc-500" id={item} />
                                <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label className="cursor-pointer ml-2.5 text-[#232323] font-figtree font-medium text-base capitalize" htmlFor={item}>
                                {item}
                            </label>
                        </div>
                    })
                }
            </section>
        </div>
    );
};

export default FilterService;