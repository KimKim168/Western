import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useTranslation from '@/hooks/use-translation';
import { X } from 'lucide-react';
import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';
import { useEffect, useRef, useState } from 'react';
import { PhotoProvider } from 'react-photo-view';
import { styled } from 'styled-components';

const CardSectionTextFisrt = ({ data }: { data: any }) => {
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const { t, currentLocale } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [thumbScrollable, setThumbScrollable] = useState(false);
    const thumbContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!selectedItem) return;

        const el = thumbContainerRef.current;
        if (!el) return;

        requestAnimationFrame(() => {
            setThumbScrollable(el.scrollWidth > el.clientWidth);
            el.scrollLeft = 0;
        });
    }, [selectedItem]);

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
                    {data.map((item: any, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div
                                onClick={() => {
                                    setSelectedItem(item);
                                    setMainImageIndex(0);
                                }}
                                className="h-full cursor-pointer"
                            >
                                <Card className="h-full gap-2 rounded-none bg-primary py-0 text-white shadow-none">
                                    <CardHeader className="p-0">
                                        <img
                                            src={`/assets/images/pages/${item.images[0]?.image}`}
                                            className="aspect-square w-full object-cover"
                                            alt={item.name}
                                        />
                                    </CardHeader>
                                    <CardContent className="flex h-full flex-col justify-between px-3 pb-4">
                                        <div>
                                            <h3 className="inline-block bg-white p-1.5 text-2xl font-semibold text-primary">
                                                {currentLocale == 'kh' ? item?.name_kh || item?.name : item?.name}
                                            </h3>
                                            <p className="mt-1 text-lg">
                                                {currentLocale == 'kh'
                                                    ? item?.short_description_kh || item?.short_description
                                                    : item?.short_description}
                                            </p>
                                        </div>
                                        <AlertDialogTrigger asChild>
                                            <div className="mt-16 text-center">
                                                <p className="button w-[120px] rounded-none bg-primary-two p-2 text-[13px] text-white transition-all hover:bg-primary-two md:text-[15px]">
                                                    {t('Read More')}
                                                </p>
                                            </div>
                                        </AlertDialogTrigger>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="mt-4 flex justify-center gap-3 pr-2 text-primary">
                    <CarouselPrevious className="static translate-y-0 rounded-none" />
                    <CarouselNext className="static translate-y-0 rounded-none" />
                </div>
            </Carousel>

            <AlertDialogContent
                className="overflow-scroll overflow-y-scroll rounded-none p-4 sm:max-w-full md:p-6 md:py-6"
                style={{
                    maxHeight: '90vh', // limits the height on mobile
                    overflowY: 'auto', // enable vertical scroll
                }}
            >
                <div className="flex justify-end">
                    <AlertDialogPrimitive.Cancel
                        className={buttonVariants({
                            variant: 'ghost',
                            size: 'icon',
                            className: 'h-2 w-2 md:h-10 md:w-10',
                        })}
                    >
                        <X />
                    </AlertDialogPrimitive.Cancel>
                </div>
                {selectedItem && (
                    <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
                        {/* Image Gallery – FIRST on mobile */}
                        <PhotoProvider>
                            <div className="relative order-1 flex flex-col items-center lg:order-2">
                                {/* Main Image */}
                                <div className="relative w-full max-w-2xl">
                                    <button
                                        onClick={prevImage}
                                        className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-primary/80 text-white hover:bg-primary"
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
                                            {' '}
                                            <path d="m15 18-6-6 6-6" />{' '}
                                        </svg>
                                    </button>

                                    <img
                                        src={`/assets/images/pages/${selectedItem.images[mainImageIndex]?.image}`}
                                        className="aspect-video max-h-[460px] cursor-pointer object-cover shadow"
                                    />

                                    <button
                                        onClick={nextImage}
                                        className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-primary/80 text-white hover:bg-primary"
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
                                            {' '}
                                            <path d="m9 6 6 6-6 6" />{' '}
                                        </svg>
                                    </button>
                                </div>

                                {/* Thumbnails */}

                                <div className="mt-4 w-full overflow-x-auto pb-2">
                                    <div ref={containerRef} className={`flex w-full gap-3 ${thumbScrollable ? 'justify-start' : 'justify-center'}`}>
                                        {selectedItem.images.map((src: any, index) => (
                                            <img
                                                key={index}
                                                src={`/assets/images/pages/${src.image}`}
                                                alt={`Thumbnail ${index + 1}`}
                                                onClick={() => setMainImageIndex(index)}
                                                className={`h-10 w-20 cursor-pointer object-cover transition sm:h-16 sm:w-24 ${
                                                    index === mainImageIndex ? 'border-2 border-primary' : 'opacity-70 hover:opacity-100'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </PhotoProvider>

                        {/* Text – SECOND on mobile */}
                        <div className="order-2 flex inline-block flex-col gap-4 lg:order-1">
                            <h2 className="inline-block bg-primary p-2 text-xl font-semibold text-white md:p-3 md:text-3xl lg:text-[45px]">
                                {currentLocale == 'kh' ? selectedItem?.name_kh || selectedItem?.name : selectedItem?.name}
                            </h2>

                            <p
                                className="prose mt-4 text-justify text-black md:mt-6 md:text-xl"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        currentLocale == 'kh'
                                            ? selectedItem?.long_description_kh || selectedItem?.long_description
                                            : selectedItem?.long_description,
                                }}
                            />
                        </div>
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
