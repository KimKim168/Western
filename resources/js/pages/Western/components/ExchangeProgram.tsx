import { usePage } from '@inertiajs/react';
import { useState } from 'react';

const ExchangeProgram = ({ children }: { children: any[] }) => {
    const [activeTitle, setActiveTitle] = useState(children[0]?.title);
    const activeItem = children.find((item) => item.title === activeTitle);
    const { locale } = usePage().props;

    return (
        <div className="mt-26 px-4 md:mt-32 md:px-0">
            {/* Title */}
            <h1 className=" md:ml-[75px] text-lg font-bold text-primary sm:text-3xl lg:text-4xl mb-6">
                {locale === 'kh'
                    ? (activeItem.title_kh ?? activeItem.title)
                    : activeItem.title}
            </h1>

            <div className="flex flex-col lg:flex-row gap-10">

                {/* LEFT SIDE — IMAGE + DESCRIPTION */}
                <div className="flex-1">

                    {/* Image under the title */}
                    <img
                        src={`/assets/buddhist/${activeItem.images[0]?.image}`}
                        alt={activeItem.title}
                        className="w-full aspect-[18/9] object-cover md:mb-6"
                    />

                    {/* Description under the image */}
                    <div
                        className="prose max-w-full dark:prose-invert md:ml-[75px]"
                        dangerouslySetInnerHTML={{
                            __html:
                                locale === 'kh'
                                    ? (activeItem.long_description_kh ?? activeItem.long_description)
                                    : activeItem.long_description,
                        }}
                    />
                </div>

                {/* RIGHT SIDEBAR — STICKY */}
                <div className="w-full lg:w-72 md:mr-[75px]">
                    <div className="lg:sticky lg:top-36 border border-black overflow-hidden">
                        {children.map((item) => {
                            const isActive = item.title === activeTitle;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTitle(item.title)}
                                    className={`w-full px-4 py-3 text-left border-b border-black last:border-0 text-lg transition ${
                                        isActive
                                            ? 'bg-primary text-white'
                                            : 'bg-white text-black hover:bg-primary hover:text-white'
                                    }`}
                                >
                                    {locale === 'kh'
                                        ? (item.title_kh ?? item.title)
                                        : item.title}
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
