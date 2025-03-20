"use client"
import JobCard from '@/components/Shared/JobCard';
import { useMyNearestJobsQuery } from '@/redux/api/jobsApi';
import React, { useState } from 'react';
import JobFilter from '../Contractor/JobFilter';
import ErrorComponent from '@/components/Shared/ErrorComponent';
import { ImSpinner8 } from 'react-icons/im';
import { DateRange } from 'react-day-picker';

const NearestJobs = () => {

    const [date, setDate] = useState<DateRange | undefined>(undefined);

    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('')

    const query: { startDate?: Date, endDate?: Date, searchTerm?: string } = {};

    if (date) {
        query["startDate"] = date?.from;
        query["endDate"] = date?.to;
    }
    if (debouncedSearchTerm) {
        query["searchTerm"] = debouncedSearchTerm;
    }

    const { isLoading, isSuccess, data, isError } = useMyNearestJobsQuery(query);
    

    return (
        <div>
            <div>
                <JobFilter date={date} setDate={setDate} setDebouncedSearchTerm={setDebouncedSearchTerm} />
            </div>
            {
                isLoading ?
                    <div>
                        <div className='min-h-40 flex items-center justify-center'>
                            <ImSpinner8 className="text-4xl text-primary_red animate-spin" />
                        </div>
                    </div>
                    :
                    isSuccess ?
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5 max-w-5xl mx-auto'> {
                            data?.data?.map(item => {
                                return <JobCard job={item} key={item?.id} />
                            })
                        }
                        </div> : isError ? <ErrorComponent /> : <></>
            }
        </div>
    );
};

export default NearestJobs;