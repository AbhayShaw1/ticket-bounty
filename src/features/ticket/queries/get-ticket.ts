import { prisma } from '@/lib/prisma';

export const getTicketQuery = async (id: string) => {
    return await prisma.ticket.findUnique({
        where: {
            id,
        },
    });
};
