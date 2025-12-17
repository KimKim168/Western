import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';
import { X } from 'lucide-react';
import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';
import { useState } from 'react';
import { PhotoProvider } from 'react-photo-view';

const GalleryCard = ({ item }) => {
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const mainImage = item.images[mainImageIndex];

    const prevImage = () => {
        setMainImageIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setMainImageIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div className="group relative cursor-pointer">
                    <img src={item.images[0]} className="aspect-square object-cover" />
                    <div className="absolute bottom-0 w-full bg-primary/60 p-6 text-primary opacity-0 transition group-hover:opacity-100">
                        <p className="inline-block bg-white p-2 text-base">{item.title}</p>
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

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {/* Text */}
                    <div className="flex inline-block flex-col gap-4">
                        <h2 className="inline-block bg-primary p-2 text-lg font-bold text-white md:p-4 md:text-3xl lg:text-4xl">{item.title}</h2>
                        <p
                            className="mt-2 text-black md:text-xl"
                            dangerouslySetInnerHTML={{
                                __html: item.long_description,
                            }}
                        />
                    </div>

                    {/* Image Gallery */}
                    <PhotoProvider>
                        <div className="relative flex flex-col items-center">
                            {/* Main Image Container */}
                            <div className="relative w-full max-w-xl">
                                {/* Prev Button */}
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
                                <img src={mainImage} className="max-h-[500px] w-full cursor-pointer object-cover shadow" />

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

                            {/* Thumbnails */}
                            <div className="mt-4 flex flex-wrap justify-center gap-3">
                                {item.images.map((src, index) => (
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
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default GalleryCard;
