import { CardCompact } from '@/components/card-compact';
import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';
import { TicketCreateForm } from '@/features/ticket/components/ticket-create-form';
import { TicketList } from '@/features/ticket/components/ticket-list';
import { Suspense } from 'react';

const TicketPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-y-8">
            <Heading title="Tickets" description="Find All Your Tickets Here!" />
            <CardCompact
                title="Create New Ticket"
                className="w-full max-w-[420px] self-center"
                description="A new ticket will be generated"
                content={<TicketCreateForm />}
            />
            <Suspense fallback={<Spinner />}>
                <TicketList />
            </Suspense>
        </div>
    );
};
export default TicketPage;
