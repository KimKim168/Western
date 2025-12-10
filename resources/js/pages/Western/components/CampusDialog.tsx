import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';
import { MapPin, X } from 'lucide-react';
import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';
import { useState } from 'react';
import { PhotoProvider } from 'react-photo-view';

const CampusDialog = ({ item }) => {
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const mainImage = item.images[mainImageIndex];

    const prevImage = () => {
        setMainImageIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setMainImageIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
    };
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <div className="group relative cursor-pointer">
                        {/* Image wrapper */}
                        <div className="relative overflow-hidden border border-white/60 bg-white">
                            <img
                                src={item.images?.[0].image}
                                alt={item.title}
                                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* View text overlay (hidden until hover) */}
                            <div className="absolute bottom-4 left-4 flex items-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                                <p className="rounded bg-primary px-4 py-2 text-base font-semibold text-white">View</p>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="mt-1">
                            <p className="relative inline-block font-semibold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-2/3 after:-translate-x-1/2 after:rounded-full after:bg-primary after:content-['']">
                                {item.title}
                            </p>
                        </div>
                    </div>
                </AlertDialogTrigger>

                <AlertDialogContent className="gap-0 rounded-none border-none px-0 pt-0 sm:max-w-full">
                    <div className="flex justify-between bg-primary p-8">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold text-white md:text-3xl lg:text-4xl">{item.title}</h2>
                        </div>
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

                    <div className="grid grid-cols-2 justify-center  gap-6 p-8 ">
                        {/* Image Gallery */}
                        <PhotoProvider>
                            <div className="relative flex flex-col items-center">
                                {/* Main Image Container */}
                                <div className="relative w-full max-w-2xl">
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
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-left"
                                        >
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                    </button>

                                    {/* Main Image */}
                                    <img src={mainImage.image} className="max-h-[500px] w-full cursor-pointer object-cover shadow" />

                                    {/* Next Button */}
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
                                    {item?.images?.map((src, index) => (
                                        <img
                                            key={index}
                                            src={src?.image}
                                            onClick={() => setMainImageIndex(index)}
                                            className={`h-20 w-20 cursor-pointer object-cover transition ${
                                                index === mainImageIndex ? 'border-2 border-primary shadow-md' : 'opacity-70 hover:opacity-100'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </PhotoProvider>

                        <div className="flex flex-col max-h-[380px] justify-between">
                           <div>
                             {/* Address */}
                            <div>
                                <h2 className="text-xl font-bold text-primary md:text-3xl">Address:</h2>
                                <p className="text-xl text-gray-800">{item?.address}</p>
                            </div>

                            {/* Phone Numbers */}
                            <div className="mt-4">
                                <h2 className="text-xl font-bold text-primary md:text-3xl">Phone Number:</h2>
                                <div className="mt-2 flex flex-col space-y-1.5 text-xl text-gray-800">
                                    {item.phoneNumber.split('<br/>').map((num, index) => (
                                        <p key={index}>{num.trim()}</p>
                                    ))}
                                </div>
                            </div>

                           </div>
                            {/* Directions Button */}
                            <a
                                href={item?.linkLocation}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" inline-flex w-40 items-center gap-2 bg-primary px-3 py-2 text-xl text-white"
                            >
                                <MapPin className="h-5 w-5" />
                                <span>Directions</span>
                            </a>
                        </div>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default CampusDialog;
