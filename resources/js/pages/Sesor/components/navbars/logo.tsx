import { Link, usePage } from '@inertiajs/react';

export const Logo = () => {
    const { website_info } = usePage<any>().props;

    return (
        <Link href="/" className="flex items-center gap-2">
            <img src={`/assets/images/website_infos/${website_info?.logo}`} alt="Logo" className="h-32 object-contain md:h-44" />
        </Link>
    );
};
