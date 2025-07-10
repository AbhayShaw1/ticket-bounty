'use client';
import { PlaceHolder } from '@/components/placeHolder';

export default function Error({ error }: { error: Error }) {
    return <PlaceHolder label={error.message || 'Something went wrong'} />;
}
