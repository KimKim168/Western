import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useTranslation from '@/hooks/use-translation';
import { X } from 'lucide-react';
import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';
import { useState } from 'react';
import { PhotoProvider } from 'react-photo-view';

export default function ActivitiAndEventCard({ data }: { data: any[] }) {
    const {t, currentLocale } = useTranslation();

    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [mainImageIndex, setMainImageIndex] = useState(0);

    if (!data.length) return null;

    const firstCard = data[0];
    const carouselCards = data.slice(1);

    const prevImage = () => {
        setMainImageIndex((prev) => (prev === 0 ? selectedItem.images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setMainImageIndex((prev) => (prev === selectedItem.images.length - 1 ? 0 : prev + 1));
    };

    const imagePath = (img: string) => `/assets/images/pages/${img}`;

    return (
        <AlertDialog>
            <>
                {/* ================= FIRST ROW (1 COLUMN) ================= */}
                <div>
                    <div className="relative mx-auto mt-8 flex flex-col">
                        <div className="relative w-full">
                            <img src={imagePath(firstCard.images?.[0]?.image)} className="aspect-square w-full object-cover md:aspect-[21/9]" />
                        </div>

                        <div className="relative w-full bg-primary md:absolute md:bottom-0 md:left-0 md:bg-primary/70">
                            <div className="flex flex-col items-start p-3 lg:max-w-4xl">
                                <h3 className="inline-block bg-white p-1.5 text-xl font-semibold text-primary">
                                    {currentLocale === 'kh' ? firstCard?.name_kh || firstCard?.name : firstCard?.name}
                                </h3>
                                <p className="text-lg text-white">
                                    {/* Name */}
                                    {currentLocale === 'kh'
                                        ? firstCard?.short_description_kh || firstCard?.short_description
                                        : firstCard?.short_description}
                                </p>

                                <div className="mt-16 text-center">
                                    <AlertDialogTrigger asChild>
                                        <div
                                            onClick={() => {
                                                setSelectedItem(firstCard);
                                                setMainImageIndex(0);
                                            }}
                                        >
                                            <p className="button w-[100px] cursor-pointer rounded-none bg-primary-two p-2 text-[13px] text-white transition-all hover:bg-primary-two md:text-[15px]">
                                                {t("Read More")}
                                            </p>
                                        </div>
                                    </AlertDialogTrigger>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ================= SECOND ROW (3 COLUMNS CAROUSEL) ================= */}
                <Carousel opts={{ align: 'start' }} className="relative mt-4 w-full">
                    <CarouselContent>
                        {carouselCards.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Card className="h-full gap-3 rounded-none bg-primary py-0 text-white shadow-none">
                                    <CardHeader className="p-0">
                                        <img src={imagePath(item.images?.[0]?.image)} className="aspect-square w-full object-cover" />
                                    </CardHeader>

                                    <CardContent className="px-3 pb-4">
                                        <h3 className="inline-block bg-white p-1.5 text-xl font-semibold text-primary">{item.name}</h3>
                                        <p className="text-lg">{item.short_description}</p>

                                        <div className="mt-16 text-center">
                                            <AlertDialogTrigger asChild>
                                                <div
                                                    onClick={() => {
                                                        setSelectedItem(item);
                                                        setMainImageIndex(0);
                                                    }}
                                                >
                                                    <p className="button w-[100px] cursor-pointer rounded-none bg-primary-two p-2 text-[13px] text-white transition-all hover:bg-primary-two md:text-[15px]">
                                                        {t("Read More")}
                                                    </p>
                                                </div>
                                            </AlertDialogTrigger>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="mt-4 flex justify-center gap-3 pr-2 text-primary">
                        <CarouselPrevious className="static translate-y-0 rounded-none" />
                        <CarouselNext className="static translate-y-0 rounded-none" />
                    </div>
                </Carousel>

                {/* ================= MODAL (UNCHANGED) ================= */}

                <AlertDialogContent
                    className="overflow-scroll overflow-y-scroll rounded-none p-4 sm:max-w-full md:p-6"
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
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                            <div className="flex inline-block flex-col gap-4">
                                <h2 className="inline-block bg-primary p-2 text-lg font-bold text-white md:p-4 md:text-3xl lg:text-4xl">
                                    {currentLocale === 'kh' ? selectedItem?.name_kh || selectedItem?.name : selectedItem?.name}
                                </h2>
                                <p
                                    className="mt-4 text-black md:text-lg"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            currentLocale === 'kh'
                                                ? selectedItem?.long_description_kh || selectedItem?.long_description
                                                : selectedItem?.long_description,
                                    }}
                                />
                            </div>

                            <PhotoProvider>
                                <div className="relative flex flex-col items-center">
                                    <div className="relative w-full max-w-xl">
                                        <button
                                            onClick={prevImage}
                                            className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-primary/80 text-white transition hover:bg-primary"
                                        >
                                            &#10094;
                                        </button>

                                        {selectedItem?.images?.length > 0 && (
                                            <img
                                                src={`/assets/images/pages/${selectedItem.images[mainImageIndex]?.image}`}
                                                alt={selectedItem?.name || 'Campus image'}
                                                className="max-h-[500px] w-full cursor-pointer object-cover shadow"
                                            />
                                        )}

                                        <button
                                            onClick={nextImage}
                                            className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-primary/80 text-white transition hover:bg-primary"
                                        >
                                            &#10095;
                                        </button>
                                    </div>

                                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                                        {selectedItem?.images?.map((img: any, index: number) => (
                                            <img
                                                key={img.id ?? index}
                                                src={imagePath(img.image)}
                                                alt={`Thumbnail ${index + 1}`}
                                                onClick={() => setMainImageIndex(index)}
                                                className={`h-14 w-14 cursor-pointer object-cover transition md:h-20 md:w-20 ${
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
            </>
        </AlertDialog>
    );
}
