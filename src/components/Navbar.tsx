import Link from 'next/link';
import { Icons } from './Icons';
import { buttonVariants } from './ui/Button';
import { getAuthSession } from '@/lib/auth';
import UserAccountNav from './UserAccountNav';

export default async function Navbar() {
    const session = await getAuthSession();

    return (
        <nav className="fixed top-0 inset-x-0 h-fit z-10 bg-zinc-100 border-b border-zinc-300 py-2">
            <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
                {/* logo */}
                <Link href="/" className="flex gap-2 items-center">
                    <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
                    <p className="hidden text-zinc-700 text-sm font-medium md:block">
                        Breadit
                    </p>
                </Link>
                {/* Search Bar */}

                {session?.user ? (
                    <UserAccountNav />
                ) : (
                    <Link href="/sign-in" className={buttonVariants()}>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}