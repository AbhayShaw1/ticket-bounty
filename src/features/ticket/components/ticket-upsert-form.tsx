'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Ticket } from '../../../../generated/prisma';
import { upsertTicketAction } from '../actions/upsert-ticket';
import { SubmitButton } from '@/components/form/submit-button';
import { useActionState } from 'react';

type TicketUpsertFormProps = {
    ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
    const [actionState, action] = useActionState(upsertTicketAction.bind(null, ticket?.id), {
        message: '',
    });
    return (
        <form action={action} className="flex flex-col gap-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
                type="text"
                name="title"
                id="title"
                defaultValue={(actionState.payload?.get('title') as string) ?? ticket?.title}
            />
            <Label htmlFor="content">Content</Label>
            <Textarea
                name="content"
                id="content"
                defaultValue={(actionState.payload?.get('content') as string) ?? ticket?.content}
            />
            <SubmitButton label={ticket ? 'Edit Ticket' : 'Create Ticket'} />
            {actionState.message}
        </form>
    );
};
export { TicketUpsertForm };
