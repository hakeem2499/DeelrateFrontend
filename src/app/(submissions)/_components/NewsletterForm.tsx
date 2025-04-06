'use client';
import { ContactUsSchema, newsletterSchema, NewsletterType, type ContactUsType } from '@/app/utils/zodSchemas';
import React, { type SVGProps, useTransition } from 'react';
import { contactUsSubmissionJob, newsLetterSubmissionJob } from '../actions';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { ImageField } from '@prismicio/types';

import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import Bounded from '@/app/components/ui/Bounded';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';
import LoadingIcon from './Loader';



const NewsletterForm = ({ image }: { image: ImageField }) => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<NewsletterType>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: {

            email: '',
            agreeToTerms: false

        }
    });

    async function onSubmit(values: NewsletterType) {
        startTransition(async () => {
            const data = await newsLetterSubmissionJob(values);
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
            <div className='flex flex-col md:flex-row-reverse items-center md:items-start justify-between  w-full gap-4'>
                <div className='w-full md:w-1/2 h-fit'>

                    <PrismicNextImage priority className='h-full w-full' field={image} />
                </div>
                <div className="w-full  md:w-1/2 h-fit">
                    <div className='space-y-4 py-4'>
                        <div className="text-gray-900 not-dark:text-white text-xl uppercase">

                            SIGN UP FOR OUR NEWSLETTER
                        </div>
                        <p className='md:text-sm text-xs text-muted-foreground'>
                            Sign up for our newsletter and become a part of the Deelrate's community. You’ll get exclusive updates on upcoming events, testing opportunities, published materials, product information, and more.
                        </p>
                    </div>
                    <Form  {...form}>
                        <form className="flex w-full text-background flex-col py-2 md:py-4  gap-4" onSubmit={form.handleSubmit(onSubmit)}>


                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input className='rounded-none border-background' type="email" placeholder="Enter your email address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <div className="items-top space-y-4 py-4">
                                <p className="md:text-sm text-xs text-muted-foreground">
                                    Deelrate uses the information you provide to us to contact you about our relevant content, products, and services. You may update or unsubscribe from these communications at any time. For more information, review our <Link href="/privacy" className="underline">privacy policy</Link>.
                                </p>

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
                                    By submitting, you consent to allow Deelrate to store and process the personal information submitted above to provide you the content requested.
                                </p>
                            </div>

                            <Button className='md:w-64 w-32 rounded-none ' type="submit" disabled={isPending}>
                                {isPending ? <LoadingIcon className="animate-spin" /> : "Submit"}
                            </Button>


                        </form>
                    </Form>
                </div>
            </div>
        </div >
    );
};

export default NewsletterForm;