import { initialTickets } from '@/data';
import { Ticket } from '../types';

export const getTicketQuery = async (ticketId: string): Promise<Ticket | null> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const maybeTicket = initialTickets.find(ticket => ticket.id.toString() === ticketId);
    return new Promise(resolve => {
        resolve(maybeTicket || null);
    });
};
