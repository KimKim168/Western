import { usePage } from '@inertiajs/react';
import { useState } from 'react';

const ExchangeProgram = ({ children }: { children: any[] }) => {
    const [activeTitle, setActiveTitle] = useState(children[0]?.name);
    const activeItem = children.find((item) => item.name === activeTitle);
    const { locale } = usePage().props;

    return (
        <div className=" px-4 md:px-0">
            {/* Title */}
            <h1 className="py-4 text-2xl font-extrabold text-primary sm:text-4xl md:py-6 md:ml-[75px] lg:text-[55px]">
                {locale === 'kh' ? (activeItem.name_kh ?? activeItem.name) : activeItem.name}
            </h1>

            <div className="flex flex-col gap-10 lg:flex-row">
                {/* LEFT SIDE — IMAGE + DESCRIPTION */}
                <div className="flex-1">
                    {/* Image under the title */}
                    <img
                        src={`/assets/images/pages/${activeItem.images[0]?.image}`}
                        alt={activeItem.name}
                        className="w-full object-cover md:mb-6"
                    />

                    {/* Description under the image */} 
                    <div
                        className="prose list-disc list-inside marker:text-black mt-2 max-w-full md:ml-[75px] text-black text-justify sm:text-xl"
                        dangerouslySetInnerHTML={{
                            __html: locale === 'kh' ? (activeItem.long_description_kh ?? activeItem.long_description) : activeItem.long_description,
                        }}
                    />
                </div>

                {/* RIGHT SIDEBAR — STICKY */}
                <div className="w-full md:mr-[75px] lg:w-72">
                    <div className="overflow-hidden border border-black lg:sticky lg:top-36">
                        {children.map((item) => {
                            const isActive = item.name === activeTitle;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTitle(item.name)}
                                    className={`w-full cursor-pointer border-b font-bold border-black px-4 py-3 text-left text-xl transition last:border-0 ${
                                        isActive ? 'bg-primary text-white' : 'bg-white text-black hover:bg-primary hover:text-white'
                                    }`}
                                >
                                    {locale === 'kh' ? (item.name_kh ?? item.name) : item.name}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExchangeProgram;
