import { Heading } from '@/components/heading';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { initialTickets } from '@/data';
import { ticketPath } from '@/path';
import { LucideCircleCheck, LucideFileText, LucidePencil } from 'lucide-react';
import Link from 'next/link';

const TICKET_ICONS = {
    DONE: <LucideCircleCheck />,
    IN_PROGRESS: <LucidePencil />,
    OPEN: <LucideFileText />,
};
const TicketPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-y-8">
            <Heading title="Tickets" description="Find All Your Tickets Here!" />
            <div className="animate-fade-in-from-top flex flex-1 flex-col gap-y-4">
                {initialTickets.map(ticket => {
                    return (
                        <Card key={ticket.id} className="w-full max-w-[420px]">
                            <CardHeader>
                                <CardTitle className="flex gap-x-2">
                                    <span>{TICKET_ICONS[ticket.status]}</span>
                                    <span className="truncate">{ticket.title}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <span className="line-clamp-3 whitespace-break-spaces">
                                    {ticket.content}
                                </span>
                            </CardContent>
                            <CardFooter>
                                <Link href={ticketPath(ticket.id)} className="text-sm underline">
                                    View Ticket
                                </Link>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};
export default TicketPage;
