import { Heading } from '@/components/heading';
import { TicketItem } from '@/features/ticket/components/ticket-item';
import { getTicketsQuery } from '@/features/ticket/queries/get-tickets';

const TicketPage = async () => {
    const tickets = await getTicketsQuery();
    return (
        <div className="flex flex-1 flex-col gap-y-8">
            <Heading title="Tickets" description="Find All Your Tickets Here!" />
            <div className="animate-fade-in-from-top flex flex-1 flex-col gap-y-4">
                {tickets.map(ticket => {
                    return <TicketItem key={ticket.id} ticket={ticket} />;
                })}
            </div>
        </div>
    );
};
export default TicketPage;
