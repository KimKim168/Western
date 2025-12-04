import { Link } from '@inertiajs/react';

export const Logo = () => (
    <Link href='/' className="flex items-center  gap-2">
        <img src={`/assets/buddhist/logo.png`} alt="Logo" className="h-15 w-auto object-cover xl:h-25" />
    </Link>
);
