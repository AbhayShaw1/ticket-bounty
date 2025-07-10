import { getTicketsQuery } from '../queries/get-tickets';
import { TicketItem } from './ticket-item';

const TicketList = async () => {
    const tickets = await getTicketsQuery();
    return (
        <div className="animate-fade-in-from-top flex flex-1 flex-col gap-y-4">
            {tickets.map(ticket => {
                return <TicketItem key={ticket.id} ticket={ticket} />;
            })}
        </div>
    );
};
export { TicketList };
