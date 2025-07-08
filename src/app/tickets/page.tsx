import Link from 'next/link';
import { initialTickets } from '@/data';
import { ticketPath } from '@/path';

const TICKET_ICONS = {
    DONE: 'D',
    IN_PROGRESS: '>',
    OPEN: 'O',
};
const TicketPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tighter">Tickets Page</h1>
                <p className="text-sm">Find All Your Tickets Here</p>
            </div>
            <div className="flex flex-1 flex-col gap-y-4">
                {initialTickets.map(ticket => {
                    return (
                        <div
                            key={ticket.id}
                            className="max-w-[420px] rounded border border-slate-100 p-4"
                        >
                            <div>{TICKET_ICONS[ticket.status]}</div>
                            <h3 className="text-lg font-semibold">{ticket.title}</h3>
                            <p className="truncate text-sm text-slate-500">{ticket.content}</p>
                            <Link href={ticketPath(ticket.id)} className="text-sm underline">
                                View Ticket
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default TicketPage;
