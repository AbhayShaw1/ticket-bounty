import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketPath } from '@/path';
import Link from 'next/link';
import { TICKET_ICONS } from '../constants';
import { Ticket } from '../types';
import { LucideCircleArrowOutUpRight } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';

type TicketItemProps = {
    ticket: Ticket;
};
const TicketItem = ({ ticket }: TicketItemProps) => {
    const detailButton = (
        <Link href={ticketPath(ticket.id)} className={buttonVariants({ variant: 'ghost' })}>
            <LucideCircleArrowOutUpRight className="h-4 w-4" />
        </Link>
    );

    return (
        <div className="flex w-full max-w-[420px] gap-x-2">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex gap-x-2">
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span className="truncate">{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span className="line-clamp-3 whitespace-break-spaces">{ticket.content}</span>
                </CardContent>
            </Card>
            <div className="flex flex-col gap-y-11">{detailButton}</div>
        </div>
    );
};
export { TicketItem };
