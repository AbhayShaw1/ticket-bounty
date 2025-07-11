import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TicketCreateForm } from '@/features/ticket/components/ticket-create-form';
import { TicketList } from '@/features/ticket/components/ticket-list';
import { Suspense } from 'react';

const TicketPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-y-8">
            <Heading title="Tickets" description="Find All Your Tickets Here!" />
            <Card className="w-full max-w-[420px]">
                <CardHeader>
                    <CardTitle>Create New Ticket</CardTitle>
                    <CardDescription>A new ticket will be generated here</CardDescription>
                </CardHeader>
                <CardContent>
                    <TicketCreateForm />
                </CardContent>
            </Card>
            <Suspense fallback={<Spinner />}>
                <TicketList />
            </Suspense>
        </div>
    );
};
export default TicketPage;
