'use server';

import { prisma } from '@/lib/prisma';

export const deleteTicketAction = async (id: string): Promise<void> => {
    await prisma.ticket.delete({
        where: {
            id,
        },
    });
};
