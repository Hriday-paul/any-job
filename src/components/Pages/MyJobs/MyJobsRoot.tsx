"use client"
import React, { useState } from 'react';
import MyJobsFilter from './MyJobsFilter';
import MyJobTable from './MyJobTable';
import { useMyJobsQuery } from '@/redux/api/jobsApi';
import { ImSpinner8 } from 'react-icons/im';
import ErrorComponent from '@/components/Shared/ErrorComponent';
import { DateRange } from 'react-day-picker';

const MyJobsRoot = () => {

    const [date, setDate] = useState<DateRange | undefined>(undefined);

    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');

    const [status, setStatus] = useState<any>(false);

    const [page, setPage] = useState<number>(1);

    const query: { startDate?: Date, endDate?: Date, searchTerm?: string, status?: string, page: number, isComplete?: boolean } = { page: page, status: "APPROVED" };

    if (date) {
        query["startDate"] = date?.from;
        query["endDate"] = date?.to;
    }
    if (debouncedSearchTerm) {
        query["searchTerm"] = debouncedSearchTerm;
    }
    if (status) {
        if (status !== 'all') query["isComplete"] = status;
    }

    const { isLoading, isSuccess, data, isError } = useMyJobsQuery(query);

    

    return (
        <div>
            <MyJobsFilter date={date} setDate={setDate} setDebouncedSearchTerm={setDebouncedSearchTerm} setStatus={setStatus} />

            {
                isLoading ?
                    <div>
                        <div className='min-h-48 flex items-center justify-center'>
                            <ImSpinner8 className="text-4xl text-primary_red animate-spin" />
                        </div>
                    </div>
                    :
                    isSuccess ? <MyJobTable data={data?.data} totalPage={data?.meta?.totalPage} setPage={setPage} /> : isError ? <ErrorComponent /> : <></>
            }

        </div>
    );
};

export default MyJobsRoot;