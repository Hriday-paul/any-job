"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogClose,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useSendQuoteMutation } from "@/redux/api/jobsApi";
import { ImSpinner2 } from "react-icons/im";
import { DateTimePicker } from "@/components/ui/DateTimePicker";

type sendQuoteType = {
    price: number,
    date: Date,
    message: string
}

export function SendQuote({ clicker, id }: { clicker: React.ReactNode, id: string }) {

    const [postQuote, { isLoading }] = useSendQuoteMutation();

    const [open, setOpen] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<sendQuoteType>();

    const handleFormSubmit: SubmitHandler<sendQuoteType> = async (data) => {

        try {
            const res = await postQuote({ jobId: id, message: data?.message, price: Number(data?.price), scheduleDateTime: data?.date, availability: "available" })

            if (res?.data?.success) {

                Swal.fire({
                    title: "Your quotes has been send successfully!",
                    text: "Job poster will review your quotes. You’ll be notified in you email when a quote arrives.",
                    icon: "success",
                    customClass: {
                        title: "text-xl text-black font-medium font-figtree",
                        container: "text-sm font-medium font-figtree text-zinc-800",
                        cancelButton: "bg-primary_red text-white",
                        confirmButton: "bg-primary_red text-white"
                    },
                    showCancelButton: true,
                    showConfirmButton: false,
                    cancelButtonText: "Close",
                });
            }

        } catch (err: any) {
            Swal.fire({
                title: err?.data?.message || "Something went wrong",
                // text: "Job poster will review your quotes. You’ll be notified in you email when a quote arrives.",
                icon: "error",
                customClass: {
                    title: "text-xl text-black font-medium font-figtree",
                    container: "text-sm font-medium font-figtree text-zinc-800",
                    cancelButton: "bg-primary_red text-white",
                    confirmButton: "bg-primary_red text-white"
                },
                showCancelButton: true,
                showConfirmButton: false,
                cancelButtonText: "Close",
            });
        } finally {
            setOpen(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild onClick={() => setOpen(true)} >
                {clicker}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Send Quote</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>

                <div className="px-4 py-2">
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">

                        {/* ---------------price field------------------- */}
                        <div className="w-full mx-auto mb-3">
                            <label htmlFor='Budget' className="mb-1.5 block text-black dark:text-white font-figtree">
                                Price
                                <span className="text-red-500 text-base ml-1">*</span>
                            </label>
                            <input
                                type="number"
                                id='Budget'
                                {...register("price", { required: true })}
                                placeholder="Enter Price"
                                className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.price ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                            />
                            {errors?.price && <p className="text-red-500 text-sm col-span-2">{errors?.price?.message}</p>}
                        </div>

                        {/* -------------------schedule date & time----------------- */}
                        <div className="w-full mx-auto mb-3">
                            <label htmlFor='job_date' className="mb-1.5 block text-black dark:text-white font-figtree">
                                Scheduled Date & Time:
                                <span className="text-red-500 text-base ml-1">*</span>
                            </label>
                            {/* <Controller
                                name={'date'}
                                defaultValue={new Date()}
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field }) => (
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <button className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree text-left ${errors?.date ? 'border-danger' : 'dark:text-white border-stroke'} text-zinc-500 flex flex-row gap-x-2 items-center`}>
                                                <CalendarIcon className='h-5 w-5' />
                                                {watch("date") ? format(watch("date"), "PPP") : "YYYY/MM/DD"}
                                            </button>
                                        </PopoverTrigger>
                                        <PopoverContent className="p-0">
                                            <Calendar
                                                mode="single"
                                                selected={watch("date")}
                                                onSelect={field?.onChange}
                                                initialFocus
                                                className='bg-form'
                                            />
                                        </PopoverContent>
                                    </Popover>
                                )} >

                            </Controller> */}

                            <DateTimePicker control={control} name="date" />
                            {errors?.date && <p className="text-red-500 text-sm col-span-2">{errors?.date?.message}</p>}
                        </div>

                        {/* -----------------message---------------- */}
                        <div className="w-full mx-auto mb-3">
                            <label htmlFor='Details' className="mb-1.5 block text-black dark:text-white font-figtree font-medium">
                                Message
                                <span className="text-red-500 text-base ml-1">*</span>
                            </label>
                            <textarea
                                id='Details'
                                {...register("message", { required: true, minLength: { value: 10, message: "message 10 character" } })}
                                placeholder="write message here..."
                                rows={4}
                                className={`w-full bg-form rounded-md border-[1.5px] bg-transparent py-3 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] ${errors?.message ? 'border-danger' : 'border-stroke'}`}
                            />
                            {errors?.message && <p className="text-red-500 text-sm col-span-2">{errors?.message?.message}</p>}
                        </div>

                        <button type='submit' disabled={isLoading} className='bg-primary_red py-2.5 font-figtree text-secondary rounded-md w-full mt-5 hover:bg-opacity-80 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                            {isLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                            <span>{isLoading ? 'Loading...' : "Send Quote"}</span>
                        </button>

                    </form>
                </div>

            </DialogContent>
        </Dialog >
    )
}


export default SendQuote;