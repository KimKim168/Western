import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translation';
import { MapPin, X } from 'lucide-react';
import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';
import { useState } from 'react';
import { PhotoProvider } from 'react-photo-view';

const CampusDialog = ({ item }: { item: any }) => {
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const mainImage = item.images[mainImageIndex];

    const prevImage = () => {
        setMainImageIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setMainImageIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
    };
    const { t, currentLocale } = useTranslation();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div className="group relative cursor-pointer">
                    <div className="relative overflow-hidden border border-white/60 bg-white">
                        <img
                            src={`/assets/images/pages/${item.images?.[0]?.image}`}
                            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 opacity-0 transition group-hover:opacity-100">
                            <p className="rounded bg-primary px-4 py-2 text-base font-semibold text-white">{t('View')}</p>
                        </div>  
                    </div>

                    <div className="mt-1">
                        <p className="relative inline-block text-lg font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-2/3 after:-translate-x-1/2 after:rounded-full after:bg-primary">
                            {currentLocale == 'kh' ? item?.name_kh || item?.name : item?.name}
                        </p>
                    </div>
                </div>
            </AlertDialogTrigger>

            {/* ===== Dialog ===== */}
            <AlertDialogContent
                className="gap-0 rounded-none border-none px-0 pt-0 sm:max-w-full"
                style={{
                    maxHeight: '90vh', // limits the height on mobile
                    overflowY: 'auto', // enable vertical scroll
                }}
            >
                {/* Header */}
                <div className="flex items-center justify-between bg-primary px-4 py-4 sm:px-8">
                    <h2 className="text-lg font-bold text-white sm:text-3xl lg:text-4xl">
                        {currentLocale == 'kh' ? item?.name_kh || item?.name : item?.name}
                    </h2>

                    <AlertDialogPrimitive.Cancel
                        className={buttonVariants({
                            variant: 'ghost',
                            size: 'icon',
                            className: 'h-10 w-10 bg-transparent hover:bg-transparent',
                        })}
                    >
                        <X className="text-white" />
                    </AlertDialogPrimitive.Cancel>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 gap-6 p-4 sm:p-8 lg:grid-cols-2">
                    {/* Image Gallery */}
                    <PhotoProvider>
                        <div className="flex flex-col items-center">
                            <div className="relative w-full">
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
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-chevron-left"
                                    >
                                        <path d="m15 18-6-6 6-6"></path>
                                    </svg>
                                </button>

                                {/* Main Image */}
                                <img
                                    src={`/assets/images/pages/${mainImage?.image}`}
                                    className="max-h-[500px] w-full cursor-pointer object-cover shadow"
                                />

                                {/* Next Button */}
                                <button
                                    onClick={nextImage}
                                    className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-primary/80 text-white transition hover:bg-primary"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </div>

                            <div className="mt-4 flex flex-wrap justify-center gap-3">
                                {item.images.map((src: any, index: number) => (
                                    <img
                                        key={index}
                                        src={`/assets/images/pages/${src?.image}`}
                                        onClick={() => setMainImageIndex(index)}
                                        className={`h-16 w-16 cursor-pointer object-cover sm:h-20 sm:w-20 ${
                                            index === mainImageIndex ? 'border-2 border-primary' : 'opacity-70 hover:opacity-100'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </PhotoProvider>

                    {/* Info */}
                    <div className="flex h-[80%] flex-col justify-between gap-6">
                        <div>
                            <h2 className="text-lg font-bold text-primary sm:text-2xl">{t('Address')}:</h2>
                            <p className="text-base sm:text-xl">
                                {currentLocale == 'kh' ? item?.short_description_kh || item?.short_description : item?.short_description}
                            </p>

                            <div className="mt-4">
                                <h2 className="text-lg font-bold text-primary sm:text-2xl">{t('Phone Number')}:</h2>
                                <p
                                    className="text-base sm:text-xl"
                                    dangerouslySetInnerHTML={{
                                        __html: currentLocale == 'kh' ? item?.long_description_kh || item?.long_description : item?.long_description,
                                    }}
                                ></p>
                            </div>
                        </div>

                        <a
                            href={item.link || '#'}
                            target="_blank"
                            className="inline-flex w-fit cursor-pointer items-center gap-2 bg-primary px-4 py-2 text-base text-white sm:text-xl"
                        >
                            <MapPin className="h-5 w-5" />
                            {t('Directions')}
                        </a>
                    </div>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default CampusDialog;
