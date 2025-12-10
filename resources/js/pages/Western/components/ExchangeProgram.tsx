import { usePage } from '@inertiajs/react';
import { useState } from 'react';

const ExchangeProgram = ({ children }: { children: any[] }) => {
    const [activeTitle, setActiveTitle] = useState(children[0]?.title); 

    const activeItem = children.find((item) => item.title === activeTitle);
    const { locale } = usePage().props;

    return (
        <div className="mt-36 ">
            <div className="grid section-container grid-cols-1 gap-10 lg:grid-cols-12">
                
                
                {/* Main Content */}
                <div className="space-y-10 lg:col-span-8">
                    {activeItem && (
                        <>
                            <div className="w-full">
                                <h1 className="text-primary w-full text-3xl leading-tight font-bold md:text-4xl">{locale === 'kh' ? (activeItem.title_kh ?? activeItem.title) : activeItem.title}</h1>
                                <div>
                                <img
                                    src={`/assets/buddhist/${activeItem.images[0]?.image}`}
                                    alt={activeItem.title}
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                                <div
                                    className="prose dark:prose-invert mt-6 w-full max-w-none"
                                    dangerouslySetInnerHTML={{ __html: locale === 'kh' ? (activeItem.long_description_kh ?? activeItem.long_description) : activeItem.long_description }}
                                />
                            </div>
                            
                        </>
                    )}
                </div>
                {/* Sidebar */}
                <div className="lg:col-span-4 mt-12">
                    <div className="flex flex-col border border-solid border-black">
                        {children.map((item) => {
                            const isActive = item.title === activeTitle;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTitle(item.title)}
                                    className={`w-full px-4 py-2 text-start border border-solid border-black text-lg transition-colors duration-300 lg:w-auto ${
                                        isActive ? 'bg-primary text-white' : 'text-primary hover:bg-primary hover:text-white'
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
