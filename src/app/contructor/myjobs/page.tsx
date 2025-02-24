import MyJobsFilter from '@/components/Pages/MyJobs/MyJobsFilter';
import MyJobTable from '@/components/Pages/MyJobs/MyJobTable';
import React from 'react';

const page = () => {
    return (
        <div className='container'>
            <div>
                <MyJobsFilter />
                <MyJobTable />
            </div>
        </div>
    );
};

export default page;