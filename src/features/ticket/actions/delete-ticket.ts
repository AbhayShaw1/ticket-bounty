'use server';

import { prisma } from '@/lib/prisma';
import { ticketsPath } from '@/path';
import { redirect } from 'next/navigation';

export const deleteTicketAction = async (id: string): Promise<void> => {
    await prisma.ticket.delete({
        where: {
            id,
        },
    });
    redirect(ticketsPath());
};
