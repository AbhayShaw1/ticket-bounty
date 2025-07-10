import { prisma } from '@/lib/prisma';

export const getTicketsQuery = async () => {
    return await prisma.ticket.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
};
