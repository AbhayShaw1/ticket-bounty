import { Heading } from '@/components/heading';
import { TicketList } from '@/features/ticket/components/ticket-list';
import { Suspense } from 'react';

const TicketPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-y-8">
            <Heading title="Tickets" description="Find All Your Tickets Here!" />
            <Suspense>
                <TicketList />
            </Suspense>
        </div>
    );
};
export default TicketPage;
