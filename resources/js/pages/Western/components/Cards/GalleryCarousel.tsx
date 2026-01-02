import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

function GalleryCarousel({ images }: { images: any[] }) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const handleThumbClick = (index: number) => {
        api?.scrollTo(index);
    };

    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Main Carousel */}
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {images.map((item, index) => (
                        <CarouselItem key={index}>
                            <Card className="border-0 shadow-none">
                                <CardContent className="p-0">
                                    <img
                                        src={`/assets/images/pages/${item.image}`}
                                        alt=""
                                        className="aspect-[18/9] w-full object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* Thumbnails */}
            <Carousel className="mt-4 w-full">
                <CarouselContent className="flex gap-3">
                    {images.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className={cn(
                                'basis-1/4 md:basis-1/6 cursor-pointer',
                                current === index ? 'opacity-100' : 'opacity-60',
                            )}
                            onClick={() => handleThumbClick(index)}
                        >
                            <Card className="border-0">
                                <CardContent className="p-0">
                                    <img
                                        src={`/assets/images/pages/${item.image}`}
                                        alt=""
                                        className={cn(
                                            'h-20 w-full object-cover transition',
                                            current === index && 'ring-2 ring-primary',
                                        )}
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
export default GalleryCarousel;
