import { initialTickets } from '@/data';

type TicketPageProps = {
    params: Promise<{ ticketId: string }>;
};
const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;
    const ticket = initialTickets.find(ticket => ticket.id.toString() === ticketId);
    if (!ticket) {
        return <p>Ticket not Found!</p>;
    }
    return (
        <div>
            <h1 className="text-lg font-bold">{ticket.title}</h1>
            <p className="text-sm">{ticket.content}</p>
        </div>
    );
};
export default TicketPage;
