import { LanguageSwitcher } from '@/pages/Sesor/components/LanguageSwitcher';
import { usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import MySearch from '../my-search';
import { Logo } from './logo';
import { MyNavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';

const NavbarPage = () => {
    const { application_info } = usePage().props;
    const headerRef = useRef(null);
    const sentinelRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIsSticky(!entry.isIntersecting), { threshold: 0 });

        if (sentinelRef.current) observer.observe(sentinelRef.current);

        return () => {
            if (sentinelRef.current) observer.unobserve(sentinelRef.current);
        };
    }, []);

    return (
        <>
            {/* Invisible sentinel above the navbar */}
            <div ref={sentinelRef} className="absolute top-0 h-1 w-full" />

            <nav
                ref={headerRef}
                className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isSticky ? 'bg-primary' : 'bg-transparent'} `}
            >
                {isSticky && <div className="pointer-events-none absolute left-0 right-0 top-0
            -bottom-10
            sm:-bottom-6
            md:-bottom-3
            lg:-bottom-2
            xl:bottom-0
            bg-[url('/assets/background.png')] bg-cover bg-center opacity-10 md:h-24 xl:h-36" />}
               
                <div className="section-container">
                    <div className="flex h-24 items-center justify-between xl:h-36">
                        {/* LOGO  */}
                        <Logo />

                        {/* DESKTOP MENU */}
                        <div className="hidden lg:flex lg:gap-6">
                            <MyNavMenu />
                            <MySearch />
                        </div>
                        <div className="hidden lg:flex lg:gap-6">
                            <LanguageSwitcher />
                        </div>

                        {/* MOBILE MENU */}
                        <div className="flex items-center gap-2 lg:hidden">
                            <MySearch />
                            <LanguageSwitcher />
                            <NavigationSheet />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavbarPage;
