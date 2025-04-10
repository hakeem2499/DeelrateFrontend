'use client';
import { ContactUsSchema, saveSeatSchema, SaveSeatType, type ContactUsType } from '@/app/utils/zodSchemas';
import React, { type SVGProps, useTransition } from 'react';
import { contactUsSubmissionJob, saveSeatSubmissionJob } from '../actions';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';

import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import clsx from 'clsx';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import Bounded from '@/app/components/ui/Bounded';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import LoadingIcon from './Loader';



const SaveSeatForm = () => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<SaveSeatType>({
        resolver: zodResolver(saveSeatSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            digitalAssetInterest: 'RealEstate',
            agreeToTerms: false
        }
    });

    async function onSubmit(values: SaveSeatType) {
        startTransition(async () => {
            const data = await saveSeatSubmissionJob(values);
            if (data.status === 'error') {
                toast.error(data.message);
            } else {
                toast.success(data.message);
                form.reset();
            }
        });
    }

    return (
        <div className="w-full flex flex-col items-center p-4 md:p-8 gap-4 bg-foreground ">
            <Form {...form}>
                <form className="flex w-full text-background flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex w-full h-32 justify-between items-center">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="flex-1  mr-2">
                                    <FormLabel className='text-xs md:text-base'>First Name</FormLabel>
                                    <FormControl>
                                        <Input className='text-xs md:text-base rounded-none' placeholder="Enter your first name" {...field} />
                                    </FormControl>
                                    <FormMessage className='text-xs md:text-sm' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="flex-1  ml-2">
                                    <FormLabel className='text-xs md:text-base'>Last Name</FormLabel>
                                    <FormControl>
                                        <Input className='text-xs md:text-base ring-0 rounded-none' placeholder="Enter your last name" {...field} />
                                    </FormControl>
                                    <FormMessage className='text-xs md:text-sm' />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input className='rounded-none' type="email" placeholder="Enter your email address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="digitalAssetInterest"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tokenized Asset Interested in</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className='w-full rounded-none'>
                                            <SelectValue placeholder="Select the asset you are interested in" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Asset</SelectLabel>
                                            <SelectItem value="RealEstate">Real Estate</SelectItem>
                                            <SelectItem value="SME">SME</SelectItem>
                                            <SelectItem value="Commodity">Commodity</SelectItem>
                                            <SelectItem value="Infrastructure">Infrastructure</SelectItem>

                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <div className="items-top space-y-4 py-4">


                        <FormField
                            control={form.control}
                            name="agreeToTerms"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className={form.formState.errors.agreeToTerms ? 'border-destructive' : ''}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className={form.formState.errors.agreeToTerms ? 'text-destructive' : ''}>
                                            Accept terms and conditions
                                        </FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormMessage className="-mt-2" />


                        <p className="md:text-sm text-xs text-muted-foreground">
                            Deelrate uses the information you provide to us to contact you about our relevant content, products, and services.For more information, review our <Link href="/privacy" className="underline">privacy policy</Link>. By submitting, you consent to allow Deelrate to store and process the personal information submitted above to provide you the content requested.
                        </p>
                    </div>

                    <Button  className='md:w-64 w-32 rounded-none ' type="submit" disabled={isPending}>
                        {isPending ? <LoadingIcon className="animate-spin" /> : "Submit"}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default SaveSeatForm;