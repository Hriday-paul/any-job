import React from 'react';
import PublicProfile from '@/components/Pages/Contractor/PublicProfile';

const page = async({
    params,
  }: {
    params: Promise<{ id: string }>
  }) => {
    const {id} = await params;
    return (
        <div className='container'>
            <PublicProfile id={id} />
        </div>
    );
};

export default page;