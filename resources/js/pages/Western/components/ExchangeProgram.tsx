import { usePage } from '@inertiajs/react';
import { useState } from 'react';

const ExchangeProgram = ({ children }: { children: any[] }) => {
    const [activeTitle, setActiveTitle] = useState(children[0]?.title);
    const activeItem = children.find((item) => item.title === activeTitle);
    const { locale } = usePage().props;

    return (
        <div className="mt-28 px-4 md:mt-32 md:px-0">
            {/* Title */}
            <h1 className="mb-4 text-xl font-bold text-primary sm:text-3xl md:mb-6 md:ml-[75px] lg:text-4xl">
                {locale === 'kh' ? (activeItem.title_kh ?? activeItem.title) : activeItem.title}
            </h1>

            <div className="flex flex-col gap-10 lg:flex-row">
                {/* LEFT SIDE — IMAGE + DESCRIPTION */}
                <div className="flex-1">
                    {/* Image under the title */}
                    <img
                        src={`/assets/buddhist/${activeItem.images[0]?.image}`}
                        alt={activeItem.title}
                        className="aspect-[18/9] w-full object-cover md:mb-6"
                    />

                    {/* Description under the image */}
                    <div
                        className="prose mt-2 max-w-full md:ml-[75px] dark:prose-invert"
                        dangerouslySetInnerHTML={{
                            __html: locale === 'kh' ? (activeItem.long_description_kh ?? activeItem.long_description) : activeItem.long_description,
                        }}
                    />
                </div>

                {/* RIGHT SIDEBAR — STICKY */}
                <div className="w-full md:mr-[75px] lg:w-72">
                    <div className="overflow-hidden border border-black lg:sticky lg:top-36">
                        {children.map((item) => {
                            const isActive = item.title === activeTitle;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTitle(item.title)}
                                    className={`w-full border-b border-black px-4 py-3 text-left text-lg transition last:border-0 ${
                                        isActive ? 'bg-primary text-white' : 'bg-white text-black hover:bg-primary hover:text-white'
                                    }`}
                                >
                                    {locale === 'kh' ? (item.title_kh ?? item.title) : item.title}
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
