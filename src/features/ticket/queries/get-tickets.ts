import { initialTickets } from '@/data';
import { Ticket } from '../types';

export const getTicketsQuery = async (): Promise<Ticket[]> => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return new Promise(resolve => {
        resolve(initialTickets);
    });
};
