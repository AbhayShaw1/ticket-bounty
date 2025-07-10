import { PlaceHolder } from '@/components/placeHolder';
import { Button } from '@/components/ui/button';
import { TicketItem } from '@/features/ticket/components/ticket-item';
import { getTicketQuery } from '@/features/ticket/queries/get-ticket';
import { ticketsPath } from '@/path';
import Link from 'next/link';

type TicketPageProps = {
    params: Promise<{ ticketId: string }>;
};
const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;
    const ticket = await getTicketQuery(ticketId);
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
        <div className="animate-fade-in-from-top">
            <TicketItem ticket={ticket} isDetail />
        </div>
    );
};
export default TicketPage;
