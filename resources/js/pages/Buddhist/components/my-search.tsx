import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import LibrarySearch from '@/components/Search/LibrarySearch';

const MySearch = () => {
  return (
    <Sheet>
      {/* 1. Improved Trigger with Hover States */}
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative h-10 w-10 rounded-full text-white transition-all duration-300 hover:bg-white/10 hover:text-white active:scale-95"
        >
          <Search className="size-7" />
          <span className="sr-only">Open Search</span>
        </Button>
      </SheetTrigger>

      {/* 2. Glassmorphism Overlay */}
      <SheetContent 
        side="top" 
        className="border-b border-white bg-background/80 p-0 shadow-2xl backdrop-blur-2xl transition-all duration-500"
      >
        <div className="mx-auto w-full max-w-3xl px-6 py-12">
          <SheetHeader className="mb-2">
            <SheetTitle className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
              What are you looking for?
            </SheetTitle>
          </SheetHeader>
          
          {/* 3. Search Input Wrapper */}
          <div className="relative animate-in fade-in zoom-in-95 duration-300">
            <LibrarySearch />
          </div>
          
          {/* <p className="mt-4 text-center text-xs text-muted-foreground/60">
            Press <kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px]">ESC</kbd> to close
          </p> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MySearch;