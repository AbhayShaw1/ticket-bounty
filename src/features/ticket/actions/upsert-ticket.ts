'use server';

import { prisma } from '@/lib/prisma';
import { ticketsPath } from '@/path';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import z from 'zod';

const upsertTicketSchema = z.object({
    title: z
        .string()
        .min(1, 'Title is required')
        .max(190, 'Title must be less than 255 characters'),
    content: z.string().min(1).max(1024, 'Content must be less than 1024 characters'),
});

export const upsertTicketAction = async (
    ticketId: string | undefined,
    _actionState: { message: string; payload?: FormData },
    formData: FormData,
) => {
    try {
        const data = upsertTicketSchema.parse({
            title: formData.get('title'),
            content: formData.get('content'),
        });
        await prisma.ticket.upsert({
            where: {
                id: ticketId || '',
            },
            update: data,
            create: data,
        });
    } catch (error) {
        return { message: 'Something went wrong', error, payload: formData };
    }

    revalidatePath(ticketsPath());
    if (ticketId) {
        redirect(ticketsPath());
    }
    return { message: 'Ticket created successfully' };
};
