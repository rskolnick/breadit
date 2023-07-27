import Link from 'next/link';
import { toast } from './use-toast';
import { buttonVariants } from '@/components/ui/Button';

export const useCustomToast = () => {
    const loginToast = () => {
        const { dismiss } = toast({
            title: 'Login Required',
            description: 'Please log in to view this content.',
            variant: 'destructive',
            action: (
                <Link
                    href="/sign-in"
                    className={buttonVariants({ variant: 'outline' })}
                    onClick={() => dismiss()}
                >
                    Login
                </Link>
            ),
        });
    };

    return { loginToast };
};
