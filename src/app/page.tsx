import { ticketsPath } from '@/path';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="flex flex-1 flex-col gap-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tighter">Home Page</h1>
                <p className="text-sm">Let&apos;s get started</p>
            </div>
            <div className="flex flex-1 flex-col items-center">
                <Link href={ticketsPath()} className="text-sm underline">
                    Go To Tickets Page
                </Link>
            </div>
        </div>
    );
};
export default HomePage;
