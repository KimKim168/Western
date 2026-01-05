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
    <footer className="relative mt-10 w-full z-0 overflow-hidden bg-primary text-white">
    {/* 1. Background Layer */}
    <div 
        className="absolute inset-0 z-10 opacity-10 pointer-events-none"
        style={{
            backgroundImage: "url('/assets/footerBackground.png')",
            backgroundSize: 'contain',    // Shows the full image without cropping
            backgroundPosition: 'bottom', // Pins the image to the very bottom
            backgroundRepeat: 'no-repeat', // Prevents tiling
        }}
    />

    {/* 2. Content Layer (Keeps text 100% visible) */}
    <div className="section-container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Logo */}
            <div className="flex flex-col items-start">
                <Logo />
            </div>

            {/* Links Sections */}
            {footerSections.map(({ title, links }) => (
                <div key={title} className="flex flex-col">
                    <h6 className="text-xl font-bold md:text-[25px]">{title}</h6>
                    <ul className="mt-4 space-y-3">
                        {links.map(({ title, href }) => (
                            <li key={title}>
                                <Link href={href} className="text-lg transition-colors hover:underline md:text-xl">
                                    {t(title)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            {/* Social Media */}
            <div className="flex flex-col">
                <h6 className="text-xl font-bold md:text-[25px]">{t("Social Media")}</h6>
                <div className="mt-4 flex flex-wrap gap-4">
                    {media_links.map((item: any) => (
                        <a
                            key={item.id}
                            href={item.link || '#'}
                            target="_blank"
                            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white duration-300 hover:scale-125"
                        >
                            <img src={`/assets/images/links/thumb/${item.image}`} alt="icon" className="h-8 w-8 object-contain" />
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
                    __html: currentLocale == 'kh' ? website_info?.copyright_kh || website_info?.copyright : website_info?.copyright,
                }}
            />
        </div>
    </div>
</footer>
    );
};

export default Footer;
