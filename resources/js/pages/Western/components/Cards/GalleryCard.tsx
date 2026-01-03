import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translation';
import { X } from 'lucide-react';
import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';
import { useEffect, useRef, useState } from 'react';
import { PhotoProvider } from 'react-photo-view';

const GalleryCard = ({ item }: { item: any }) => {
    const [selectedItem, setSelectedItem] = useState(0);
    const { t, currentLocale } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [thumbScrollable, setThumbScrollable] = useState(false);
    const thumbContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // reset first
        setThumbScrollable(false);

        const el = thumbContainerRef.current;
        if (!el) return;

        requestAnimationFrame(() => {
            setThumbScrollable(el.scrollWidth > el.clientWidth);
            el.scrollLeft = 0;
        });
    }, [item.id, item.images.length]);
    

    const prevImage = () => {
        setSelectedItem((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setSelectedItem((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div className="group relative cursor-pointer">
                    <img src={`/assets/images/pages/${item.images[0]?.image}`} className="aspect-square object-cover" />
                    <div className="absolute bottom-0 w-full bg-primary/60 p-6 text-primary opacity-0 transition group-hover:opacity-100">
                        <p className="inline-block bg-white p-2 text-base font-bold">
                            {currentLocale == 'kh' ? item?.name_kh || item?.name : item?.name}
                        </p>
                    </div>
                </div>
            </AlertDialogTrigger>

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
                <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
                    {/* Image Gallery – FIRST on mobile */}
                    <PhotoProvider>
                        <div className="relative order-1 flex flex-col items-center lg:order-2">
                            {/* Main Image */}
                            <div className="relative w-full">
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
                                    src={`/assets/images/pages/${item.images[selectedItem]?.image}`}
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
                                    {item.images.map((src: any, index: number) => (
                                        <img
                                            key={index}
                                            src={`/assets/images/pages/thumb/${src?.image}`}
                                            alt={`Thumbnail ${index + 1}`}
                                            onClick={() => setSelectedItem(index)}
                                            className={`h-10 w-20 cursor-pointer object-cover transition sm:h-16 sm:w-24 ${
                                                index === selectedItem ? 'border-2 border-primary' : 'opacity-70 hover:opacity-100'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </PhotoProvider>

                    {/* Text – SECOND on mobile */}
                    <div className="order-2 inline-block flex-col gap-4 lg:order-1">
                        <h2 className="inline-block bg-primary p-2 text-lg font-bold text-white md:p-4 md:text-3xl lg:text-4xl">
                            {currentLocale == 'kh' ? item?.name_kh || item?.name : item?.name}
                        </h2>

                        <p
                            className="mt-4 text-justify text-black md:text-xl"
                            dangerouslySetInnerHTML={{
                                __html: currentLocale == 'kh' ? item?.long_description_kh || item?.long_description : item?.long_description,
                            }}
                        />
                    </div>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default GalleryCard;
