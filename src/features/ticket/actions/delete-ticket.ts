'use server';

import { prisma } from '@/lib/prisma';
import { ticketsPath } from '@/path';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const deleteTicketAction = async (id: string): Promise<void> => {
    await prisma.ticket.delete({
        where: {
            id,
        },
    });
    revalidatePath(ticketsPath());
    redirect(ticketsPath());
};
