import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();
const tickets = [
    {
        title: 'First Ticket',
        content: 'This is the start of the ticket-bounty app.',
        status: 'DONE' as const,
    },
    {
        title: 'Bug in Login Page',
        content: 'Users cannot log in with Facebook credentials.',
        status: 'IN_PROGRESS' as const,
    },
    {
        title: 'UI Design for Dashboard',
        content: 'Create wireframes for the new user dashboard.',
        status: 'OPEN' as const,
    },
];

const seed = async () => {
    const t0 = performance.now();
    console.log('Seeding in database started...');
    await prisma.ticket.deleteMany({});
    await prisma.ticket.createMany({
        data: tickets,
        skipDuplicates: true,
    });
    const t1 = performance.now();
    console.log(`Seeding in database finished at ${t1 - t0} ms`);
};
seed();
