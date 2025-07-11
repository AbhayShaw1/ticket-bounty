import { CardCompact } from '@/components/card-compact';
import { TicketUpsertForm } from '@/features/ticket/components/ticket-upsert-form';
import { getTicketQuery } from '@/features/ticket/queries/get-ticket';
import { notFound } from 'next/navigation';
type TicketEditPageProps = {
    params: Promise<{ ticketId: string }>;
};

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
    const { ticketId } = await params;
    const ticket = await getTicketQuery(ticketId);
    if (!ticket) {
        notFound();
    }
    return (
        <div className="flex flex-1 flex-col items-center justify-center">
            <CardCompact
                title={'Edit Ticket'}
                description="Edit existing Ticket"
                className="animate-fade-in-from-top w-full max-w-[420px] self-center"
                content={<TicketUpsertForm ticket={ticket} />}
            />
        </div>
    );
};

export default TicketEditPage;
