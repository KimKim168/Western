import { Separator } from '@/components/ui/separator';
import useTranslation from '@/hooks/use-translation';
import { Logo } from '@/pages/Sesor/components/navbars/logo';
import { Link, usePage } from '@inertiajs/react';

const footerSections = [
    {
        title: 'Quick Links',
        links: [
            { title: 'Home', href: '/' },
            { title: 'History And Values', href: '/history_and_values' },
            { title: 'Admission', href: '/admissions' },
            { title: 'Contact', href: '/contact' },
            // { title: 'Job Opportunities', href: '#' },
        ],
    },
];

const socialMedia = [
    { image: '/assets/buddhist/facebook.png', href: '#' },
    { image: '/assets/buddhist/instagram.png', href: '#' },
    { image: '/assets/buddhist/telegram.png', href: '#' },
    { image: '/assets/buddhist/linkedin.png', href: '#' },
    { image: '/assets/buddhist/tiktok.png', href: '#' },
    { image: '/assets/buddhist/youtube.png', href: '#' },
];

const Footer = () => {
    const { media_links, website_info } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <footer
            className="mt-10 bg-primary text-white"
            style={{
                // backgroundImage: "url('/assets/buddhist/image.png')"
                // , backgroundSize: 'cover'
                //  ,      uncomment if you want it to cover the whole div
                backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="section-container">
                <div className="grid grid-cols-1 gap-8 gap-y-10 py-12 sm:grid-cols-2 md:grid-cols-3">
                    {/* Logo */}
                    <Logo />

                    {/* Footer Sections */}
                    {footerSections.map(({ title, links }) => (
                        <div key={title}>
                            <h6 className="text-xl font-bold">{title}</h6>
                            <ul className="mt-2 space-y-2">
                                {links.map(({ title, href }) => (
                                    <li key={title}>
                                        <Link href={href} className="hover:underline">
                                            {t(title)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social Media */}
                    <div>
                        <h6 className="text-xl font-bold">Social Media</h6>
                        <div className="mt-2 flex gap-2">
                            {media_links.map((item: any) => (
                                <a
                                    key={item.id}
                                    href={item.link || '#'}
                                    target="_blank"
                                    className="cursor-pointer rounded-full bg-white p-2 duration-300 hover:scale-115"
                                >
                                    <img src={`/assets/images/links/thumb/${item.image}`} alt={``} className="h-7 w-7 object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Separator />

            {/* Copyright */}
            <div className="flex flex-col items-center justify-center gap-2 px-6 py-8 sm:flex-row xl:px-0">
                <span
                    className="text-sm text-white"
                    dangerouslySetInnerHTML={{
                        __html: currentLocale == 'kh' ? website_info?.copyright_kh || website_info?.copyright : website_info?.copyright,
                    }}
                ></span>
            </div>
        </footer>
    );
};

export default Footer;
