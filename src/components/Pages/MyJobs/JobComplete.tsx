import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from "date-fns";
import { useJobStatusUpdateMutation } from '@/redux/api/jobsApi';
import { toast } from 'sonner';

type completeType = {
    date: Date;
}

const JobComplete = ({ clicker, id }: { clicker: React.ReactNode, id: string }) => {

    const [postUpdateStatusJob, { isLoading }] = useJobStatusUpdateMutation();

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<completeType>();

    const handleFormSubmit: SubmitHandler<completeType> = async (data) => {
        try {
            await postUpdateStatusJob({
                id: id, data: {
                    "isComplete": true,
                    "completeDate": data?.date
                }
            }).unwrap();
            toast.success("Job update successfully")
        } catch (err: any) {
            toast.error(err?.data?.message || "Something went wrong, try again")
        }
    }

    return (
        <Dialog>
            <DialogTrigger className='w-full text-left py-1.5 hover:bg-zinc-100 duration-150'>
                {clicker}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Complete Job</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>

                <div className="font-figtree">

                    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">

                        {/* -------------------schedule date & time----------------- */}
                        <div className="w-full mx-auto mb-3">
                            <label htmlFor='job_date' className="mb-1.5 block text-black dark:text-white font-figtree">
                                Scheduled Date & Time:
                                <span className="text-red-500 text-base ml-1">*</span>
                            </label>
                            <Controller
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
                                                toDate={new Date()}
                                                onSelect={field?.onChange}
                                                initialFocus
                                                className='bg-form'
                                            />
                                        </PopoverContent>
                                    </Popover>
                                )} >

                            </Controller>

                            {/* <DateTimePicker control={control} name="date" /> */}
                            {errors?.date && <p className="text-red-500 text-sm col-span-2">{errors?.date?.message}</p>}
                        </div>


                        <button type='submit' disabled={isLoading} className='bg-primary_red py-2.5 font-figtree text-secondary rounded-md w-full mt-5 hover:bg-opacity-80 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                            {isLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                            <span>{isLoading ? 'Loading...' : "Complete"}</span>
                        </button>

                    </form>


                </div>

            </DialogContent>
        </Dialog>
    )
}

export default JobComplete;