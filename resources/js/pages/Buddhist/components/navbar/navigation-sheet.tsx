import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, usePage } from '@inertiajs/react';
import { AlignLeftIcon, ChevronDownIcon } from 'lucide-react';
import { Logo } from './logo';
import { useState } from 'react';

export const NavigationSheet = () => {
    const { nav_bar } = usePage().props;
    const [openMenu, setOpenMenu] = useState<number | null>(null);

    const toggleMenu = (id: number) => {
        setOpenMenu(openMenu === id ? null : id);
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className='dark:bg-white/30 dark:border-input dark:hover:bg-white/50'>
                    <AlignLeftIcon className="stroke-3 text-primary" />
                </Button>
            </SheetTrigger>

            <SheetContent className="h-screen overflow-y-auto bg-white p-4 pb-30">
                <Logo />

                <div className="space-y-4 text-base">
                    {nav_bar?.map((item: any) => {
                        const skipDropdown = item.code === 'home' || item.code === 'admissions';
                        const childrenWithLink = item.children?.filter((c: any) => c.link);

                        // Simple link (no submenu)
                        if (skipDropdown || !childrenWithLink?.length) {
                            return (
                                <Link
                                    key={item.id}
                                    href={item.link || '#'}
                                    className="block font-noto-san-extra-light font-bold text-primary"
                                >
                                    {item.name}
                                </Link>
                            );
                        }

                        // Dropdown menu
                        const isOpen = openMenu === item.id;

                        return (
                            <div key={item.id}>
                                {/* Parent button */}
                                <button
                                    type="button"
                                    onClick={() => toggleMenu(item.id)}
                                    className="flex w-full items-center justify-between font-noto-san-extra-light font-bold text-primary"
                                >
                                    {item.name}
                                    <ChevronDownIcon
                                        className={`h-4 w-7 transition-transform ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                {/* Sub menu */}
                                {isOpen && (
                                    <ul className="mt-3 ml-2 space-y-3 border-l pl-4">
                                        {childrenWithLink.map((child: any) => (
                                            <li key={child.id}>
                                                <Link
                                                    href={child.link}
                                                    className="block text-primary hover:text-red-800 hover:underline"
                                                >
                                                    {child.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </div>
            </SheetContent>
        </Sheet>
    );
};
