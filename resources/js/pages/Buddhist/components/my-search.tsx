import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import { Search } from 'lucide-react';
import { MySearchProducts } from './my-search-products';

const MySearch = () => {
    return (
        <div>
            <Sheet>
                <div className="flex items-center gap-1">
                    <SheetTrigger asChild>
                            <Search className="size-6 text-white" />
                    </SheetTrigger>
                </div>
                <SheetContent side="top" className="w-full bg-background/30 p-2 shadow-md backdrop-blur-xl">
                        <SheetTitle className="text-white">Search</SheetTitle>
                    <MySearchProducts className="mx-auto max-w-full border-white" />
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MySearch;
