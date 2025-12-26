import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, usePage } from '@inertiajs/react';
import { AlignLeftIcon } from 'lucide-react';
import { Logo } from './logo';

export const NavigationSheet = () => {
    const { nav_bar } = usePage().props; // use nav_bar from backend

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <AlignLeftIcon className="stroke-3 text-primary" />
                </Button>
            </SheetTrigger>
            <SheetContent className="h-screen overflow-y-auto bg-white p-4 pb-30">
                <Logo />
                <div className="space-y-4 text-base">
                    {nav_bar?.map((item) => {
                        const skipDropdown = item.code === 'home' || item.code === 'admissions';
                        const childrenWithLink = item.children?.filter((c: any) => c.link);

                        if (skipDropdown || !childrenWithLink?.length) {
                            // Just a link (Home / Admissions or items without children)
                            return (
                                <Link key={item.id} prefetch href={item.link || '#'} className="font-noto-san-extra-light font-bold text-primary">
                                    {item.name}
                                </Link>
                            );
                        }

                        // Items with children → show dropdown
                        return (
                            <div key={item.id}>
                                <div className="font-noto-san-extra-light font-bold text-primary">{item.name}</div>
                                <ul className="mt-2 ml-1 space-y-3 border-l pl-4">
                                    {childrenWithLink.map((child: any) => (
                                        <li key={child.id}>
                                            <Link
                                                href={child.link!}
                                                className="flex items-center gap-2 text-primary hover:text-red-800 hover:underline"
                                            >
                                                {child.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </SheetContent>
        </Sheet>
    );
};
