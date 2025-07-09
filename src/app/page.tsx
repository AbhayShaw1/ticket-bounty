import { Heading } from '@/components/heading';
import { ticketsPath } from '@/path';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="flex flex-1 flex-col gap-y-8">
            <Heading title="Home" description="Let's get started" />
            <div className="flex flex-1 flex-col items-center">
                <Link href={ticketsPath()} className="text-sm underline">
                    Go To Tickets Page
                </Link>
            </div>
        </div>
    );
};
export default HomePage;
