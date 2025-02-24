import React from 'react';
import userImg from '../../../public/quotes/user.jpeg'
import serviceImg from '../../../public/works/img1.png'
import Image from 'next/image';
import SendQuote from '../Pages/Jobs/SendQuote';

export default function JobCard() {
    return (
        <div className=" bg-white rounded-xl shadow-lg">
            <div className="p-6 space-y-6">
                {/* Header with Avatar and Contact */}
                <div>
                    <h2 className="text-xl font-semibold font-figtree">John O'Conner</h2>
                    <p className="text-gray-600 font-figtree">Phone Number: +353123456789</p>
                </div>

                {/* Job Description */}
                <div>
                    <h3 className="font-medium mb-2 font-figtree">Job Description:</h3>
                    <p className="text-gray-600 font-figtree">
                        Needs a professional plumber to fix a leaking pipe. The leak is under the kitchen sink and requires
                        immediate attention. The contractor is expected to replace damaged parts if needed.
                    </p>
                </div>

                {/* Location Details */}
                <div className="space-y-2">
                    <div>
                        <span className="font-medium font-figtree">Location: </span>
                        <span className="text-gray-600 font-figtree">Dublin, Ireland</span>
                    </div>
                    <div>
                        <span className="font-medium font-figtree">Town: </span>
                        <span className="text-gray-600 font-figtree">Swords</span>
                    </div>
                    <div>
                        <span className="font-medium font-figtree">Availability: </span>
                        <span className="text-gray-600 font-figtree">Feb 10, 2025 - 10 AM</span>
                    </div>
                </div>

                {/* Photos */}
                <div>
                    <h3 className="font-medium mb-3 font-figtree">Photos:</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={serviceImg}
                            height={1500}
                            width={1500}
                            alt="Job site photo 1"
                            className="w-full h-32 object-cover rounded-lg"
                        />
                        <Image
                            height={1500}
                            width={1500}
                            src={serviceImg}
                            alt="Job site photo 2"
                            className="w-full h-32 object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Special Instructions */}
                <div>
                    <h3 className="font-medium mb-2 font-figtree">Special Instruction:</h3>
                    <p className="text-gray-600 font-figtree">
                        Needs a professional plumber to fix a leaking pipe. The leak is under the kitchen sink and requires
                        immediate attention. The contractor is expected to replace damaged parts if needed.
                    </p>
                </div>

                {/* Availability Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <SendQuote clicker={<button className="w-full py-2 bg-primary_red text-white rounded-md hover:bg-primary_red transition-colors font-figtree">
                        Available
                    </button>}></SendQuote>
                    <button className="w-full py-2 bg-white border border-primary_red text-primary_red rounded-md hover:bg-primary_red hover:text-white transition-colors">
                        Not Available
                    </button>
                </div>
            </div>
        </div>
    )
}

