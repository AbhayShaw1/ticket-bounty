import { PlaceHolder } from '@/components/placeHolder';
import { Button } from '@/components/ui/button';
import { initialTickets } from '@/data';
import { ticketsPath } from '@/path';
import Link from 'next/link';

type TicketPageProps = {
    params: Promise<{ ticketId: string }>;
};
const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;
    const ticket = initialTickets.find(ticket => ticket.id.toString() === ticketId);
    if (!ticket) {
        return (
            <PlaceHolder
                label="Ticket not found!"
                button={
                    <Button asChild variant="link">
                        <Link href={ticketsPath()}>Go back to tickets page.</Link>
                    </Button>
                }
            />
        );
    }
    return (
        <div>
            <h1 className="text-lg font-bold">{ticket.title}</h1>
            <p className="text-sm">{ticket.content}</p>
        </div>
    );
};
export default TicketPage;
