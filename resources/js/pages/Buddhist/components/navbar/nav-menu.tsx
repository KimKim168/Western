import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu';

export function MyNavMenu({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const { nav_bar } = usePage().props; // your data from backend
    const { t, currentLocale } = useTranslation();
    const { url } = usePage();

    return (
        <div className={cn('mx-auto w-full', className)}>
            <div className="flex h-full items-center justify-end">
                <div className="hidden lg:block">
                    <div className="flex items-center gap-2">
                        <Menu setActive={setActive}>
                            {nav_bar?.map((item) => {
                                const skipDropdown = item.code === 'home' || item.code === 'admissions';
                                const hasChildren = item.children && item.children.length > 0 && !skipDropdown;
                                const isActive = item.link === url;
                                return hasChildren ? (
                                    // Item with children → show dropdown
                                    <MenuItem
                                        key={item.id}
                                        setActive={setActive}
                                        active={active}
                                        item={currentLocale === 'kh' ? item.name_kh || item.name : item.name}
                                        subRoutes={item.children.map((c) => c.link).filter(Boolean)}
                                        className="text-[15px] font-bold"
                                    >
                                        <div className="flex flex-col space-y-2 text-[10px]">
                                            {item.children
                                                .filter((child) => child.link)
                                                .map((child) => (
                                                    <HoveredLink key={child.id} href={child.link!}>
                                                        {currentLocale === 'kh' ? child.name_kh || child.name : child.name}
                                                    </HoveredLink>
                                                ))}
                                        </div>
                                    </MenuItem>
                                ) : (
                                    // Item without children or Home/Admissions → just clickable
                                    <Link key={item.id} href={item.link || '#'}>
                                        <Link key={item.id} href={item.link || '#'}>
                                            <div
                                                className={cn(
                                                    'mx-6 cursor-pointer text-base font-semibold text-white hover:opacity-90 transition-transform duration-300',
                                                    isActive && 'bg-primary-two px-6 py-1.5',
                                                )}
                                            >
                                                {currentLocale === 'kh' ? item.name_kh || item.name : item.name}
                                            </div>
                                        </Link>
                                    </Link>
                                );
                            })}
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
}
