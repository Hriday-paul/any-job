
import { packageType } from '@/redux/types';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { HiArrowUpRight } from 'react-icons/hi2';
import SignUpPopup from './SignUpPopup';
import { useCreatSubscriptionMutation } from '@/redux/api/SubscriptionApi';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useCookies } from 'react-cookie';

const PricingCard = ({ packag }: { packag: packageType }) => {

    const [postSubscription] = useCreatSubscriptionMutation();
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();

    const [cookie, _] = useCookies(['token', 'accessToken', 'refreshToken']);


    const handlePurchase = async (packageId: string) => {
        if (!cookie?.accessToken) {
            setOpen(true);
            return;
        }
        const loadingToast = toast.loading("Loading...", { position: "top-center" })
        try {

            const res = await postSubscription({ packageId: packageId }).unwrap();
            toast.dismiss(loadingToast)
            router.push(res?.data?.paymentLink);
        }
        catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        } finally {
            toast.dismiss(loadingToast)
        }
    }


    return (

        <div className="bg-white rounded-2xl shadow-lg p-8 w-full font-figtree border border-stroke">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-primary_red text-center">{packag?.name}</h2>
                {/* <p className="text-gray-400 mt-1 text-center">{packag?.description}</p> */}
            </div>

            {/* Price */}
            <div className="bg-red-50/50 shadow rounded-xl p-4 text-center mb-8">
                <span className="text-primary_red text-3xl font-bold font-figtree">${packag?.price}</span>
                <span className="text-primary_red font-figtree">/{packag?.interval}</span>
            </div>

            {/* Features */}
            {/* <div className="space-y-4 mb-8">
                {[
                    "Perfect for new contractors testing the platform",
                    "Access up to 5 quotes per month",
                    "Pay-as-you-go flexibility",
                    "Ideal for part-time service providers",
                ]?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="bg-primary_red rounded-full p-1.5 flex items-center justify-center font-figtree">
                            <FaArrowLeft className='text-sm lg:text-base xl:text-base text-white rotate-180' />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                    </div>
                ))}
            </div> */}

            <p className="text-gray-600 mt-1 text-center mb-8">{packag?.description}</p>

            {/* Subscribe Button */}
            <center>
                <button onClick={() => handlePurchase(packag?.id)} className='text-primary_red font-figtree flex flex-row gap-x-3 items-center justify-center group'>
                    Subscribe Now
                    <HiArrowUpRight className='text-xl rotate-45 mt-0.5 group-hover:rotate-0 duration-300' />
                    <span className='-ml-[37px] h-8 w-8 bg-[#ffe3e5] rounded-full mt-0.5'></span>
                </button>
            </center>

            <SignUpPopup open={open} setOpen={setOpen} />
        </div>

    );
};

export default PricingCard;