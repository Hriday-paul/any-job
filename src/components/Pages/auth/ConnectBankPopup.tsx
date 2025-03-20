'use client'
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import Link from 'next/link';
import bank_icon from '../../../../public/bank.png'
import Image from 'next/image';
import { useConnectAccountMutation } from '@/redux/api/SubscriptionApi';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const ConnectBankPopup = ({ open }: { open: boolean }) => {

    const [connectAccount, { isLoading: accountConnectLoading }] = useConnectAccountMutation();

    const router = useRouter();

    const handleConnectAccount = async () => {
        try {
            const loadingToast = toast.loading("Loading...", { position: "top-center" })
            const res = await connectAccount({redirect : "/pricing"}).unwrap();
            toast.dismiss(loadingToast)
            router.push(res?.data);
        }
        catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }
    }

    return (
        <div>
            <Dialog open={open}>

                <DialogContent className="!rounded-lg p-5 md:max-w-lg" hideCloseButton={true}>
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription>
                            <div>
                                <div className="flex items-start gap-x-0 md:gap-x-5">
                                    <div className="flex h-9 md:h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-yellow-200">
                                        <Image src={bank_icon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <h5 className="text-xl text-zinc-900 font-figtree">Connect Your Account</h5>
                                        <p className='text-zinc-800 text-base font-figtree'>You need to connect your account for receive work payment.
                                        </p>
                                        <button disabled={accountConnectLoading} onClick={handleConnectAccount} type='button' className='bg-primary_red py-3 font-figtree text-secondary rounded-lg w-full hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white mt-3'>
                                            Connect Account
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-row justify-end mt-4 space-x-2">

                                    <Link href={'/pricing'} type="button" className="text-neutral-50 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none font-figtree focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border border-primary_red bg-primary_red shadow-sm hover:bg-opacity-85 h-9 px-4 py-2">Skip</Link>

                                </div>

                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};



export default ConnectBankPopup;