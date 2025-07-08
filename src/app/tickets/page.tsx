import Link from 'next/link';
import { initialTickets } from '@/data';
import { ticketPath } from '@/path';
const TicketPage = () => {
    return (
        <div>
            {initialTickets.map(ticket => {
                return (
                    <div key={ticket.id}>
                        <h2 className="text-lg">{ticket.title}</h2>
                        <Link href={ticketPath(ticket.id)} className="text-sm underline">
                            View Ticket
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
export default TicketPage;
