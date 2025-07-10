import { PlaceHolder } from '@/components/placeHolder';
import { Button } from '@/components/ui/button';
import { ticketsPath } from '@/path';
import { Link } from 'lucide-react';

export default function NotFound() {
    return (
        <PlaceHolder
            label="Ticket not found!"
            button={
                <Button asChild variant="link">
                    <Link href={ticketsPath()}>Go back to tickets page.</Link>
                </Button>
            }
        />
    );
}
