import { ticketsPath } from '@/path';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h1 className="text-lg">Home Page</h1>
            <Link href={ticketsPath()} className="text-sm underline">
                Go To Tickets Page
            </Link>
        </div>
    );
};
export default HomePage;
