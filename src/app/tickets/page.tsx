import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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
            <div>
                <h1 className="text-3xl font-bold tracking-tighter">Tickets Page</h1>
                <p className="text-sm">Find All Your Tickets Here</p>
            </div>
            <Separator />
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
