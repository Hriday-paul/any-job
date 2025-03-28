import JobFilter from '@/components/Pages/Contractor/JobFilter';
import NearestJobs from '@/components/Pages/Jobs/NearestJobs';
import React from 'react';

const JobsPage = () => {
    return (
        <div className='container'>
            <NearestJobs />
        </div>
    );
};

export default JobsPage;