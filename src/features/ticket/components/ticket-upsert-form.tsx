'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Ticket } from '../../../../generated/prisma';
import { upsertTicketAction } from '../actions/upsert-ticket';
import { SubmitButton } from '@/components/form/submit-button';

type TicketUpsertFormProps = {
    ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
    return (
        <form action={upsertTicketAction.bind(null, ticket?.id)} className="flex flex-col gap-y-2">
            <Label htmlFor="title">Title</Label>
            <Input type="text" name="title" id="title" defaultValue={ticket?.title} />
            <Label htmlFor="content">Content</Label>
            <Textarea name="content" id="content" defaultValue={ticket?.content} />
            <SubmitButton label={ticket ? 'Edit Ticket' : 'Create Ticket'} />
        </form>
    );
};
export { TicketUpsertForm };
