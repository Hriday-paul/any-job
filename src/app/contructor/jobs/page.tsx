import JobFilter from '@/components/Pages/Contractor/JobFilter';
import JobCard from '@/components/Shared/JobCard';
import React from 'react';

const JobsPage = () => {
    return (
        <div className='container'>
            <div>
                <JobFilter />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5 max-w-5xl mx-auto'>
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </div>
        </div>
    );
};

export default JobsPage;