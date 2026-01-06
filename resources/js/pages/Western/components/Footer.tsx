import { Separator } from '@/components/ui/separator';
import useTranslation from '@/hooks/use-translation';
import { Logo } from '@/pages/Sesor/components/navbars/logo';
import { Link, usePage } from '@inertiajs/react';

const footerSections = [
    {
        title: 'About Us',
        links: [
            { title: 'Home', href: '/' },
            { title: 'History And Values', href: '/history_and_values' },
            { title: 'Admission', href: '/admissions' },
            { title: 'Contact', href: '/contact' },
            // { title: 'Job Opportunities', href: '#' },
        ],
    },
];

const Footer = () => {
    const { media_links, website_info } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <footer className="relative z-0 mt-10 w-full overflow-hidden bg-primary text-white">
            {/* 1. Background Layer */}
            <div
                className="pointer-events-none w-full absolute inset-0 z-10 opacity-10 bg-contain md:bg-cover"
                style={{
                    backgroundImage: "url('/assets/footerBackground.png')",
                    // backgroundSize: 'cover', // Shows the full image without cropping
                    backgroundPosition: 'bottom', // Pins the image to the very bottom
                    backgroundRepeat: 'no-repeat', // Prevents tiling
                }}
            />

            {/* 2. Content Layer (Keeps text 100% visible) */}
            <div className="section-container relative z-10  px-6">
                <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Logo */}
                    <div className="flex flex-col items-start">
                        <Logo />
                    </div>

                    {/* Links */}
                    {footerSections.map(({ title, links }) => (
                        <div key={title} className="flex flex-col">
                            <h6 className="text-xl font-bold md:text-[25px]">{title}</h6>
                            <ul className="mt-4 space-y-3">
                                {links.map(({ title, href }) => (
                                    <li key={title}>
                                        <Link
                                            href={href}
                                            className="text-lg transition-all duration-150 hover:translate-x-1 hover:underline md:text-xl"
                                        >
                                            {t(title)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social Media */}
                    <div className="flex flex-col">
                        <h6 className="text-xl font-bold md:text-[25px]">{t('Social Media')}</h6>

                        <div className="mt-4 grid grid-cols-6 md:gap-5">
                            {media_links.map((item: any) => (
                                <a
                                    key={item.id}
                                    href={item.link || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-150 ease-out hover:scale-150 hover:shadow-xl active:scale-110 md:h-12 md:w-12"
                                >
                                    <img
                                        src={`/assets/images/links/thumb/${item.image}`}
                                        alt="icon"
                                        className="h-8 w-8 object-contain md:h-10 md:w-10"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Separator className="opacity-20" />

                {/* Copyright */}
                <div className="py-8 text-center">
                    <span
                        className="text-[15px]"
                        dangerouslySetInnerHTML={{
                            __html: currentLocale === 'kh' ? website_info?.copyright_kh || website_info?.copyright : website_info?.copyright,
                        }}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
