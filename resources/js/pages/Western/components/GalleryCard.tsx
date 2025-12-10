import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
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
                    <div className="absolute bottom-0 w-full bg-primary/60 p-8 text-primary opacity-0 transition group-hover:opacity-100">
                        <p className="inline-block bg-white p-2 text-base ">{item.title}</p>
                    </div>
                </div>
            </AlertDialogTrigger>

            <AlertDialogContent className="sm:max-w-full">
                <div className="flex justify-end">
                    <AlertDialogPrimitive.Cancel
                        className={buttonVariants({
                            variant: 'ghost',
                            size: 'icon',
                            className: 'h-10 w-10',
                        })}
                    >
                        <X />
                    </AlertDialogPrimitive.Cancel>
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {/* Text */}
                    <div className="flex inline-block flex-col gap-4">
                        <h2 className="inline-block bg-primary p-4 text-xl md:text-3xl font-bold text-white lg:text-4xl">{item.title}</h2>
                        <p className="mt-6 text-xl text-gray-800">{item.long_description}</p>
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
                                    <ArrowLeft />
                                </button>

                                {/* Main Image */}
                                <img src={mainImage} className="max-h-[500px] w-full cursor-pointer object-cover shadow" />

                                {/* Next Button */}
                                <button
                                    onClick={nextImage}
                                    className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-primary/80 text-white transition hover:bg-primary"
                                >
                                    <ArrowRight />
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
