import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ButtonSimple from '@/pages/Sesor/components/Bottons/ButtonSimple';
import { X } from 'lucide-react';
import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';
import { useState } from 'react';
import { PhotoProvider } from 'react-photo-view';
import { styled } from 'styled-components';

const CardSectionTextFisrt = () => {
    const data = [
        {
            id: 1,
            title: 'Educational Field Trips',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            short_description: '',
            long_description: `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
  senectus et netus et malesuada fames ac turpis egestas. Maecenas non
  facilisis dui, sit amet volutpat nunc. Integer vitae ipsum nulla. Sed
  faucibus, ipsum at fermentum consectetur, nulla lorem dapibus velit,
  eu convallis erat nibh eu odio.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
  sed libero ultrices egestas. Aliquam erat volutpat. Nullam eget gravida
  augue. In hac habitasse platea dictumst. Sed vehicula, erat id volutpat
  vestibulum, risus lorem scelerisque elit, sed lacinia purus nunc eget sem.
</p>`,
        },
        {
            id: 2,
            title: 'International Study Trips',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
  senectus et netus et malesuada fames ac turpis egestas. Maecenas non
  facilisis dui, sit amet volutpat nunc. Integer vitae ipsum nulla. Sed
  faucibus, ipsum at fermentum consectetur, nulla lorem dapibus velit,
  eu convallis erat nibh eu odio.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
  sed libero ultrices egestas. Aliquam erat volutpat. Nullam eget gravida
  augue. In hac habitasse platea dictumst. Sed vehicula, erat id volutpat
  vestibulum, risus lorem scelerisque elit, sed lacinia purus nunc eget sem.
</p>`,
        },
        {
            id: 3,
            title: 'International Competitions',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
  senectus et netus et malesuada fames ac turpis egestas. Maecenas non
  facilisis dui, sit amet volutpat nunc. Integer vitae ipsum nulla. Sed
  faucibus, ipsum at fermentum consectetur, nulla lorem dapibus velit,
  eu convallis erat nibh eu odio.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
  sed libero ultrices egestas. Aliquam erat volutpat. Nullam eget gravida
  augue. In hac habitasse platea dictumst. Sed vehicula, erat id volutpat
  vestibulum, risus lorem scelerisque elit, sed lacinia purus nunc eget sem.
</p>`,
        },
        {
            id: 4,
            title: 'Sports Tournaments',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
  senectus et netus et malesuada fames ac turpis egestas. Maecenas non
  facilisis dui, sit amet volutpat nunc. Integer vitae ipsum nulla. Sed
  faucibus, ipsum at fermentum consectetur, nulla lorem dapibus velit,
  eu convallis erat nibh eu odio.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
  sed libero ultrices egestas. Aliquam erat volutpat. Nullam eget gravida
  augue. In hac habitasse platea dictumst. Sed vehicula, erat id volutpat
  vestibulum, risus lorem scelerisque elit, sed lacinia purus nunc eget sem.
</p>`,
        },
        {
            id: 5,
            title: 'Prom Night',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
  senectus et netus et malesuada fames ac turpis egestas. Maecenas non
  facilisis dui, sit amet volutpat nunc. Integer vitae ipsum nulla. Sed
  faucibus, ipsum at fermentum consectetur, nulla lorem dapibus velit,
  eu convallis erat nibh eu odio.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
  sed libero ultrices egestas. Aliquam erat volutpat. Nullam eget gravida
  augue. In hac habitasse platea dictumst. Sed vehicula, erat id volutpat
  vestibulum, risus lorem scelerisque elit, sed lacinia purus nunc eget sem.
</p>`,
        },
    ];
    const [selectedItem, setSelectedItem] = useState(null);
    const [mainImageIndex, setMainImageIndex] = useState(0);

    const prevImage = () => {
        if (!selectedItem) return;
        setMainImageIndex((prev) => (prev === 0 ? selectedItem.images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        if (!selectedItem) return;
        setMainImageIndex((prev) => (prev === selectedItem.images.length - 1 ? 0 : prev + 1));
    };

    return (
        <AlertDialog>
            <Carousel opts={{ align: 'start' }} className="relative mt-4 w-full">
                <CarouselContent>
                    {data.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <AlertDialogTrigger asChild>
                                <div
                                    onClick={() => {
                                        setSelectedItem(item);
                                        setMainImageIndex(0);
                                    }}
                                    className="cursor-pointer"
                                >
                                    <Card className="gap-2 rounded-none bg-primary py-0 text-white shadow-none">
                                        <CardHeader className="p-0">
                                            <img src={item.images[0]} className="aspect-square w-full object-cover" alt={item.title} />
                                        </CardHeader>
                                        <CardContent className="px-3 pb-4">
                                            <h3 className="inline-block bg-white p-1.5 text-xl font-semibold text-primary">{item.title}</h3>
                                            <p className="text-lg">{item.short_description}</p>
                                            <div className="mt-16 text-center ">
                                                <p className='button w-[120px] bg-primary-two hover:bg-primary-two rounded-none p-2 text-[13px] text-white transition-all md:text-[15px]'>Read More</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </AlertDialogTrigger>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="mt-4 flex justify-center gap-3 pr-2 text-primary">
                    <CarouselPrevious className="static translate-y-0 rounded-none" />
                    <CarouselNext className="static translate-y-0 rounded-none" />
                </div>
            </Carousel>

            <AlertDialogContent className="rounded-none sm:max-w-full">
                <div className="flex justify-end">
                    <AlertDialogPrimitive.Cancel className={buttonVariants({ variant: 'ghost', size: 'icon', className: 'h-10 w-10' })}>
                        <X />
                    </AlertDialogPrimitive.Cancel>
                </div>

                {selectedItem && (
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                        {/* Text */}
                        <div className="flex flex-col gap-4">
                            <h2 className="inline-block bg-primary p-4 text-xl font-bold text-white md:text-3xl lg:text-4xl">{selectedItem.title}</h2>
                            <p className="mt-6 text-xl text-gray-800" dangerouslySetInnerHTML={{ __html: selectedItem.long_description }} />
                        </div>

                        {/* Image Gallery */}
                        <PhotoProvider>
                            <div className="relative flex flex-col items-center">
                                {/* Main Image */}
                                <div className="relative w-full max-w-xl">
                                    <button
                                        onClick={prevImage}
                                        className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-primary/80 text-white transition hover:bg-primary"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-left"
                                        >
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                    </button>

                                    <img
                                        src={selectedItem.images[mainImageIndex]}
                                        className="max-h-[500px] w-full cursor-pointer object-cover shadow"
                                    />

                                    <button
                                        onClick={nextImage}
                                        className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-primary/80 text-white transition hover:bg-primary"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-right"
                                        >
                                            <path d="m9 6 6 6-6 6" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Thumbnails */}
                                <div className="mt-4 flex flex-wrap justify-center gap-3">
                                    {selectedItem.images.map((src, index) => (
                                        <img
                                            key={index}
                                            src={src}
                                            onClick={() => setMainImageIndex(index)}
                                            className={`h-20 w-20 cursor-pointer object-cover transition ${
                                                index === mainImageIndex ? 'border-2 border-primary shadow-md' : 'opacity-70 hover:opacity-100'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </PhotoProvider>
                    </div>
                )}
            </AlertDialogContent>
        </AlertDialog>
    );
};

const StyledWrapper = styled.div`
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border: none;
        transition: all 0.3s ease;
    }

    .button:hover {
        transform: translateY(-2px);
    }

    .svgIcon {
        opacity: 0;
        transform: translateX(-5px);
        transition: all 0.3s ease;
    }

    .button:hover .svgIcon {
        opacity: 1;
        transform: translateX(0);
    }
`;

export default CardSectionTextFisrt;
