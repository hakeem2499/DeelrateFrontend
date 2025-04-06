'use server';

import { redirect } from 'next/navigation';
import { ContactUsSchema, ContactUsType, newsletterSchema, NewsletterType, saveSeatSchema, type SaveSeatType } from '../utils/zodSchemas';
import { prisma } from '../utils/db';
import { FormResponse } from '../(submissions)/FormResponse';


export async function saveSeatSubmissionJob(
    values: SaveSeatType
): Promise<FormResponse<{ firstName: string, id: string; email: string }>> {
    const result = saveSeatSchema.safeParse(values);

    if (!result.success) {
        return {
            status: 'error',
            message: 'Validation failed',
            errors: result.error.issues.map(issue => ({
                path: issue.path.join('.'),
                message: issue.message
            }))
        };
    }

    try {
        const data = await prisma.saveSeat.create({
            data: {
                firstName: result.data.firstName,
                lastName: result.data.lastName,
                email: result.data.email.toLowerCase().trim(),
                digitalAssetInterest: result.data.digitalAssetInterest,
            }
        });

        return {
            status: 'success',
            message: 'Seat saved successfully',
            data: {
                firstName: data.firstName,
                id: data.id,
                email: data.email
            }
        };

    } catch (error) {
        console.error('Database error:', error);
        return {
            status: 'error',
            message: error instanceof Error ? error.message : 'Database operation failed'
        };
    }
}
export async function newsLetterSubmissionJob(
    values: NewsletterType
): Promise<FormResponse<{ email: string }>> {
    const result = newsletterSchema.safeParse(values);

    if (!result.success) {
        return {
            status: 'error',
            message: 'Validation failed',
            errors: result.error.issues.map(issue => ({
                path: issue.path.join('.'),
                message: issue.message
            }))
        };
    }

    try {
        const data = await prisma.newsletter.create({
            data: {

                email: result.data.email.toLowerCase().trim(),

            }
        });

        return {
            status: 'success',
            message: 'Seat saved successfully',
            data: {
                email: data.email
            }
        };

    } catch (error) {
        console.error('Database error:', error);
        return {
            status: 'error',
            message: error instanceof Error ? error.message : 'Database operation failed'
        };
    }
}
export async function contactUsSubmissionJob(
    values: ContactUsType
): Promise<FormResponse<{ firstName: string, id: string; email: string }>> {
    const result = ContactUsSchema.safeParse(values);

    if (!result.success) {
        return {
            status: 'error',
            message: 'Validation failed',
            errors: result.error.issues.map(issue => ({
                path: issue.path.join('.'),
                message: issue.message
            }))
        };
    }

    try {
        const data = await prisma.contactUs.create({
            data: {
                firstName: result.data.firstName,
                lastName: result.data.lastName,
                workEmail: result.data.email.toLowerCase().trim(),
                jurisdiction: result.data.jurisdiction,
                isSponsor : result.data.isSponsor,
                message : result.data.message
            }
        });

        return {
            status: 'success',
            message: 'Seat saved successfully',
            data: {
                firstName: data.firstName,
                id: data.id,
                email: data.workEmail
            }
        };

    } catch (error) {
        console.error('Database error:', error);
        return {
            status: 'error',
            message: error instanceof Error ? error.message : 'Database operation failed'
        };
    }
}


