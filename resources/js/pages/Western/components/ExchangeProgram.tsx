import { usePage } from '@inertiajs/react';
import { useState } from 'react';

const ExchangeProgram = ({ children }: { children: any[] }) => {
    const [activeTitle, setActiveTitle] = useState(children[0]?.title);
    const activeItem = children.find((item) => item.title === activeTitle);
    const { locale } = usePage().props;

    return (
        <div className="mt-28 md:mt-36 px-4 md:px-0">
            <div className="flex flex-col lg:flex-row gap-10 section-container">
                {/* Main Content */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
                        {locale === 'kh' ? (activeItem.title_kh ?? activeItem.title) : activeItem.title}
                    </h1>

                    <div className="w-full">
                        <img
                            src={`/assets/buddhist/${activeItem.images[0]?.image}`}
                            alt={activeItem.title}
                            className="w-full aspect-[16/9] object-cover"
                        />
                    </div>

                    <div
                        className="prose dark:prose-invert mt-6 max-w-full"
                        dangerouslySetInnerHTML={{
                            __html: locale === 'kh' ? (activeItem.long_description_kh ?? activeItem.long_description) : activeItem.long_description,
                        }}
                    />
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-72 mt-6 lg:mt-18">
                    <div className="lg:sticky lg:top-36 flex flex-col border border-black overflow-hidden">
                        {children.map((item) => {
                            const isActive = item.title === activeTitle;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTitle(item.title)}
                                    className={`w-full px-4 py-2 text-start text-lg transition-colors duration-300 border-black border-b last:border-b-0 ${
                                        isActive
                                            ? 'bg-primary text-white'
                                            : 'text-black hover:bg-primary hover:text-white'
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
