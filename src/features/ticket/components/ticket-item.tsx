'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketPath } from '@/path';
import clsx from 'clsx';
import { LucideCircleArrowOutUpRight, LucideTrash } from 'lucide-react';
import Link from 'next/link';
import { TICKET_ICONS } from '../constants';
import { Ticket } from '../../../../generated/prisma';
import { prisma } from '@/lib/prisma';
import { deleteTicketAction } from '../actions/delete-ticket';

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
};
const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
    const detailButton = (
        <Link href={ticketPath(ticket.id)} className={buttonVariants({ variant: 'ghost' })}>
            <LucideCircleArrowOutUpRight className="h-4 w-4" />
        </Link>
    );
    const handleDeleteTicket = async () => {
        await deleteTicketAction(ticket.id);
    };
    const deleteButton = (
        <Button variant="outline" size="icon" onClick={handleDeleteTicket}>
            <LucideTrash className="h-4 w-4" />
        </Button>
    );
    return (
        <div
            className={clsx('flex w-full gap-x-2', {
                'max-w-[420px]': !isDetail,
                'max-w-[580px]': isDetail,
            })}
        >
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex gap-x-2">
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span className="truncate">{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span
                        className={clsx('whitespace-break-spaces', {
                            'line-clamp-3': !isDetail,
                        })}
                    >
                        {ticket.content}
                    </span>
                </CardContent>
            </Card>
            <div className="flex flex-col gap-y-11">{isDetail ? deleteButton : detailButton}</div>
        </div>
    );
};
export { TicketItem };
