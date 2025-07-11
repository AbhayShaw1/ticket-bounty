import { CardCompact } from '@/components/card-compact';
import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';
import { TicketList } from '@/features/ticket/components/ticket-list';
import { TicketUpsertForm } from '@/features/ticket/components/ticket-upsert-form';
import { Suspense } from 'react';

const TicketPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-y-8">
            <Heading title="Tickets" description="Find All Your Tickets Here!" />
            <CardCompact
                title="Create New Ticket"
                className="w-full max-w-[420px] self-center"
                description="A new ticket will be generated"
                content={<TicketUpsertForm />}
            />
            <Suspense fallback={<Spinner />}>
                <TicketList />
            </Suspense>
        </div>
    );
};
export default TicketPage;
