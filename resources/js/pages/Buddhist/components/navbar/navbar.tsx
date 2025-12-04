import { useEffect, useRef, useState } from 'react';
import { Logo } from './logo';
import { MyNavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';
import { usePage } from '@inertiajs/react';
import MySearch from '../my-search';
import { LanguageSwitcher } from '@/pages/Sesor/components/LanguageSwitcher';

const NavbarPage = () => {
  const { application_info } = usePage().props;
  const headerRef = useRef(null);
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );

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
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${isSticky ? 'bg-white/70 backdrop-blur-lg shadow-sm' : 'bg-transparent'}
        `}
      >
        <div className="mx-auto max-w-screen-2xl px-4 xl:px-16">
          <div className="flex items-center justify-between h-24 xl:h-28">
            
            {/* LOGO  */}
            <Logo />

            {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-6">
              <MyNavMenu />
              <MySearch/>
            </div>
            <div>
              <LanguageSwitcher/>
            </div>

            {/* MOBILE MENU */}
            <div className="md:hidden flex items-center gap-2">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarPage;
