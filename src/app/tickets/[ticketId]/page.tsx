import { TicketItem } from '@/features/ticket/components/ticket-item';
import { getTicketQuery } from '@/features/ticket/queries/get-ticket';
import { notFound } from 'next/navigation';

type TicketPageProps = {
    params: Promise<{ ticketId: string }>;
};
const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;
    const ticket = await getTicketQuery(ticketId);
    if (!ticket) {
        notFound();
    }
    return (
        <div className="animate-fade-in-from-top">
            <TicketItem ticket={ticket} isDetail />
        </div>
    );
};
export default TicketPage;
