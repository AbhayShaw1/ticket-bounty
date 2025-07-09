import { Heading } from '@/components/heading';
import { initialTickets } from '@/data';
import { TicketItem } from '@/features/ticket/components/ticket-item';

const TicketPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-y-8">
            <Heading title="Tickets" description="Find All Your Tickets Here!" />
            <div className="animate-fade-in-from-top flex flex-1 flex-col gap-y-4">
                {initialTickets.map(ticket => {
                    return <TicketItem key={ticket.id} ticket={ticket} />;
                })}
            </div>
        </div>
    );
};
export default TicketPage;
