import useTranslation from '@/hooks/use-translation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const data = [
    {
        title: 'Found 2003',
        description:
            'Western International School: The first-ever campus was located in Toul Kork District. It offered Nursery to Grade 12 General Education (English and Khmer).',
        icon: 'flag.png',
    },
    {
        title: '2004',
        description: 'K-East Campus: The first Kindergarten campus',
        icon: 'school.png',
    },
    {
        title: '2005',
        description: 'New campus opened',
        icon: 'school.png',
    },
    {
        title: '2006',
        description: 'Expansion continues',
        icon: 'school.png',
    },
    {
        title: '2007',
        description: 'Another milestone',
        icon: 'school.png',
    },
];

export default function Timeline({ data }: { data: any }) {
    const { t, currentLocale } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: 'ease-in-out',
            once: true,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="relative w-full px-4 py-20 md:px-6">
            {/* CENTER LINE */}
            <div className="absolute top-0 left-6 h-full w-0.5 bg-primary md:left-1/2 md:-translate-x-1/2"></div>

            <div className="space-y-20 md:space-y-24">
                {data.map((item, index) => {
                    let type = 'blue';
                    if (index > 0) {
                        type = Math.floor((index - 1) / 2) % 2 === 0 ? 'white' : 'blue';
                    }
                    const isLeft = index % 2 === 0;
                    const iconSrc = index === 0 ? 'flag.png' : 'school.png';

                    return (
                        <div key={item.title} className="relative flex w-full md:items-center">
                            {/* LEFT CARD (DESKTOP) */}
                            <div className={`hidden w-1/2 md:block ${isLeft ? 'pr-16' : 'pr-16 opacity-0'}`}>
                                {isLeft && (
                                    <div
                                        data-aos="fade-right"
                                        className={`relative rounded-md p-8 ${
                                            type === 'blue' ? 'bg-primary text-white' : 'border border-primary bg-white'
                                        }`}
                                    >
                                        <h3 className="text-2xl font-bold">{currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}</h3>
                                        <p className="mt-2">
                                            {currentLocale === 'kh' ? item?.short_description_kh || item?.short_description : item?.short_description}
                                        </p>

                                        {/* ARROW */}
                                        <div
                                            className={`absolute top-1/2 h-7 w-7 -translate-y-1/2 rotate-45 ${
                                                type === 'blue' ? 'bg-primary' : 'border-t border-r border-primary bg-white'
                                            } -right-3.5`}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* CENTER ICON */}
                            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2">
                                <div
                                    data-aos="zoom-in"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary ring-8 ring-white md:h-14 md:w-14"
                                >
                                    <img src={`/assets/buddhist/${iconSrc}`} className="h-6 w-6 md:h-7 md:w-7" alt={item.title} />
                                </div>
                            </div>

                            {/* RIGHT CARD (DESKTOP) */}
                            <div className={`hidden w-1/2 md:block ${!isLeft ? 'pl-16' : 'pl-16 opacity-0'}`}>
                                {!isLeft && (
                                    <div
                                        data-aos="fade-left"
                                        className={`relative rounded-md p-8 ${
                                            type === 'blue' ? 'bg-primary text-white' : 'border border-primary bg-white'
                                        }`}
                                    >
                                        <h3 className="text-2xl font-bold">{currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}</h3>
                                        <p className="mt-2">
                                            {currentLocale === 'kh' ? item?.short_description_kh || item?.short_description : item?.short_description}
                                        </p>

                                        {/* ARROW */}
                                        <div
                                            className={`absolute top-1/2 h-7 w-7 -translate-y-1/2 rotate-45 ${
                                                type === 'blue' ? 'bg-primary' : 'border-b border-l border-primary bg-white'
                                            } -left-3.5`}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* MOBILE CARD */}
                            <div className="w-full pl-16 md:hidden">
                                <div
                                    data-aos="fade-up"
                                    className={`rounded-md p-6 ${type === 'blue' ? 'bg-primary text-white' : 'border border-primary bg-white'}`}
                                >
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="mt-2">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
