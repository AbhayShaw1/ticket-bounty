import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketEditPath, ticketPath } from '@/path';
import clsx from 'clsx';
import { LucideCircleArrowOutUpRight, LucidePencil, LucideTrash } from 'lucide-react';
import Link from 'next/link';
import { Ticket } from '../../../../generated/prisma';
import { TICKET_ICONS } from '../constants';
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

    const editButton = (
        <Link href={ticketEditPath(ticket.id)} className={buttonVariants({ variant: 'outline' })}>
            <LucidePencil className="h-4 w-4" />
        </Link>
    );

    const deleteButton = (
        <form action={deleteTicketAction.bind(null, ticket.id)}>
            <Button variant="outline" size="icon">
                <LucideTrash className="h-4 w-4" />
            </Button>
        </form>
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
            <div className="flex flex-col gap-y-1">
                {isDetail ? (
                    <>
                        {editButton}
                        {deleteButton}
                    </>
                ) : (
                    <>
                        {detailButton}
                        {editButton}
                    </>
                )}
            </div>
        </div>
    );
};
export { TicketItem };
