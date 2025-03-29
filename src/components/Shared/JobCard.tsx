import React, { useState } from 'react';
import SendQuote from '../Pages/Jobs/SendQuote';
import { jobType } from '@/redux/types';
import moment from 'moment'

import JobImagePreview from './JobImagePreview';

export default function JobCard({ job }: { job: jobType }) {

    const images = job?.jobAdditionalDetails;

    return (
        <div className=" bg-white rounded-xl shadow-lg">
            <div className="p-6 space-y-4">
                {/* Header with Avatar and Contact */}
                <div>
                    <h2 className="text-xl font-semibold font-figtree">{job?.title}</h2>
                </div>

                <div>
                    <p className="text-gray-600 font-figtree">Name: {(job?.firstName + " " + job?.lastName) || "-----"}</p>
                    {/* <p className="text-gray-600 font-figtree">Email: {job?.email || "-----"}</p>
                    <p className="text-gray-600 font-figtree">Phone Number: {job?.phoneNumber || "-----"}</p> */}
                </div>

                <div>
                    <span className="font-medium font-figtree">Service: </span>
                    <span className="text-gray-600 font-figtree">{job?.service}</span>
                </div>

                {/* Job Description */}
                <div>
                    <h3 className="font-medium mb-2 font-figtree">Job Description:</h3>
                    <p className="text-gray-600 font-figtree">
                        {job?.description}
                    </p>
                </div>

                {/* Location Details */}
                <div className="space-y-2">
                    <div>
                        <span className="font-medium font-figtree">Location: </span>
                        <span className="text-gray-600 font-figtree">{job?.city}, {job?.state}, {job?.country}</span>
                    </div>
                    <div>
                        <span className="font-medium font-figtree">Eircodes: </span>
                        <span className="text-gray-600 font-figtree">{job?.zipCode || "------------"}</span>
                    </div>
                    <div>
                        <span className="font-medium font-figtree">Preferred Schedule: </span>
                        <span className="text-gray-600 font-figtree">{moment(job?.preferredJobDate).format('MMMM Do YYYY')} {job?.dates && (job?.dates)} - {job?.time || "flexible time"}</span>
                    </div>
                    {job?.budget && <div>
                        <span className="font-medium font-figtree">Budget: </span>
                        <span className="text-gray-800 font-figtree font-semibold">{job?.budget}$</span>
                    </div>}
                </div>

                {/* Photos */}
                <div>
                    <h3 className="font-medium mb-3 font-figtree">Photos:</h3>

                    <JobImagePreview images={images || []} />

                </div>

                {/* Special Instructions */}
                <div>
                    <h3 className="font-medium mb-2 font-figtree">Special Instruction:</h3>
                    <p className="text-gray-600 font-figtree">
                        {job?.specialInstructions}
                    </p>
                </div>

                {/* Availability Buttons */}
                <div className="grid grid-cols-1 gap-4">
                    <SendQuote id={job?.id} clicker={<button className="w-full py-2 bg-primary_red text-white rounded-md hover:bg-primary_red transition-colors font-figtree">
                        Quote
                    </button>}></SendQuote>
                    {/* <button className="w-full py-2 bg-white border border-primary_red text-primary_red rounded-md hover:bg-primary_red hover:text-white transition-colors">
                        Not Available
                    </button> */}
                </div>
            </div>
        </div>
    )
}

