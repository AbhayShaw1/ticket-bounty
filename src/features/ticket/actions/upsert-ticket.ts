'use server';

import { prisma } from '@/lib/prisma';
import { ticketsPath } from '@/path';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const upsertTicketAction = async (ticketId: string | undefined, formData: FormData) => {
    const data = {
        title: formData.get('title') as string,
        content: formData.get('content') as string,
    };
    await prisma.ticket.upsert({
        where: {
            id: ticketId || '',
        },
        update: data,
        create: data,
    });

    revalidatePath(ticketsPath());
    if (ticketId) {
        redirect(ticketsPath());
    }
};
