export const initialTickets = [
    {
        id: '1',
        title: 'First Ticket',
        content: 'This is the start of the ticket-bounty app.',
        status: 'DONE' as const,
    },
    {
        id: '2',
        title: 'Bug in Login Page',
        content: 'Users cannot log in with Facebook credentials.',
        status: 'IN_PROGRESS' as const,
    },
    {
        id: '3',
        title: 'UI Design for Dashboard',
        content: 'Create wireframes for the new user dashboard.',
        status: 'OPEN' as const,
    },
];
