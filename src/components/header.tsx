import { homePath, ticketsPath } from '@/path';
import { LucideKanban } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { ThemeSwitcher } from './theme/theme-switcher';

const Header = () => {
    return (
        <nav className="back fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b px-8 py-2.5 backdrop-blur">
            <div className="align-items flex gap-x-2">
                <Link href={homePath()} className={buttonVariants({ variant: 'ghost' })}>
                    <LucideKanban />
                    <h1 className="ml-2 text-lg font-semibold">TicketBounty</h1>
                </Link>
            </div>
            <div className="align-items flex gap-x-2">
                <ThemeSwitcher />
                <Link href={ticketsPath()} className={buttonVariants({ variant: 'default' })}>
                    Tickets
                </Link>
            </div>
        </nav>
    );
};
export { Header };
