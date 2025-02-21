import PricingCard from '@/components/Shared/PricingCard';
import React from 'react';

export type packageType = {
    id: number,
    title: string,
    details: string,
    duration: string,
    price: number,
    offers: string[]
}

const Price: packageType[] = [
    {
        id: 1,
        title: "Basic Plan",
        details: "Limited Quotes (Monthly)",
        duration: "mo",
        price: 29.99,
        offers: [
            "Perfect for new contractors testing the platform",
            "Access up to 5 quotes per month",
            "Pay-as-you-go flexibility",
            "Ideal for part-time service providers",
        ]
    },
    {
        id: 2,
        title: "Pro Plan",
        details: "Unlimited Quotes (Yearly)",
        duration: "yr",
        price: 299.99,
        offers: [
            "Perfect for new contractors testing the platform",
            "Access up to 5 quotes per month",
            "Pay-as-you-go flexibility",
            "Ideal for part-time service providers",
        ]
    }
]

const page = () => {
    return (
        <div>
            <div className='bg-[url("/banner.png")] min-h-96 md:min-h-[400px] lg:min-h-[430px] xl:min-h-[500px] bg-center bg-cover bg-no-repeat'>
                <div className='container'>
                    <div className='flex flex-col justify-center items-center p-5 md:p-12 lg:p-16 xl:p-20'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-figtree font-black text-[#0f3732] leading-tight my-2 md:my-5 text-center'>Choose Your Plan & Start <br /> Getting Hired!</h2>
                        <p className='text-xl font-figtree text-zinc-600 font-medium max-w-xl mx-auto text-center'>Pick a plan that fits your needs—monthly for flexibility or yearly for unlimited access!</p>


                        <div className="flex justify-center items-center bg-[#fff5f5] mt-5">
                            <div className="flex border border-red-500 rounded-lg overflow-hidden">
                                <div className="px-4 py-2 border-r border-red-500">
                                    <span className="text-red-500">Monthly</span>
                                </div>
                                <div className="px-6 py-2">
                                    <span className="text-red-500">Yearly</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center max-w-4xl mx-auto -mt-24 mb-10'>
                    {
                        Price?.map(item => {
                            return <PricingCard packag={item} key={item?.id} />
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default page;