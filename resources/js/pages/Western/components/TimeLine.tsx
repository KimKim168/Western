import useTranslation from '@/hooks/use-translation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
        <>
            <div className="mx-4 h-0.5 w-4 bg-primary md:mx-auto"></div>
            <div className="relative w-full px-4 py-6 md:px-6">
                {/* CENTER LINE */}
                <div className="absolute top-0 left-6 h-full w-0.5 bg-primary md:left-1/2 md:-translate-x-1/2"></div>

                <div className='space-y-4 md:-space-y-12'>
                    {data.map((item, index) => {
                        let type = 'blue';
                        if (index > 0) {
                            type = Math.floor((index - 1) / 2) % 2 === 0 ? 'white' : 'blue';
                        }

                        const isLeft = index % 2 === 0;
                        const iconSrc = index === 0 ? 'flag.png' : 'school.png';

                        return (
                            <div key={item.title} className="relative flex w-full md:items-stretch">
                                {/* LEFT CARD */}
                                <div className={`hidden w-1/2 md:block ${isLeft ? 'pr-16' : 'pr-16 opacity-0'}`}>
                                    {isLeft && (
                                        <div
                                            data-aos="fade-right"
                                            className={`relative flex h-full min-h-[150px] flex-col justify-between p-4 ${
                                                type === 'blue' ? 'bg-primary text-white' : 'border border-primary bg-white'
                                            }`}
                                        >
                                            <div>
                                                <h3 className="text-xl md:text-3xl font-bold">
                                                    {currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                                                </h3>
                                                <p className="mt-2 md:text-xl">
                                                    {currentLocale === 'kh'
                                                        ? item?.short_description_kh || item?.short_description
                                                        : item?.short_description}
                                                </p>
                                            </div>

                                            {/* ARROW */}
                                            <div
                                                className={`absolute top-1/2 h-[27px] w-[27px] -translate-y-1/2 rotate-45 ${
                                                    type === 'blue' ? 'bg-primary' : 'border-t border-r border-primary bg-white'
                                                } -right-3.5`}
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* CENTER ICON */}
                                <div className="absolute top-1/2 left-2 -translate-x-1/2 -translate-y-1/2 md:left-1/2">
                                    <div
                                        data-aos="zoom-in"
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary md:h-14 md:w-14"
                                    >
                                        <img src={`/assets/${iconSrc}`} className="h-6 w-6 md:h-7 md:w-7" alt={item.title} />
                                    </div>
                                </div>

                                {/* RIGHT CARD */}
                                <div className={`hidden w-1/2 md:block ${!isLeft ? 'pl-16' : 'pl-16 opacity-0'}`}>
                                    {!isLeft && (
                                        <div
                                            data-aos="fade-left"
                                            className={`relative flex h-full min-h-[150px] flex-col justify-between p-4 ${
                                                type === 'blue' ? 'bg-primary text-white' : 'border border-primary bg-white'
                                            }`}
                                        >
                                            <div>
                                                <h3 className="text-xl md:text-3xl font-bold">
                                                    {currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                                                </h3>
                                                <p className="mt-2 md:text-xl">
                                                    {currentLocale === 'kh'
                                                        ? item?.short_description_kh || item?.short_description
                                                        : item?.short_description}
                                                </p>
                                            </div>

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
                                        className={`relative flex min-h-[150px] flex-col justify-between p-4 ${
                                            type === 'blue' ? 'bg-primary text-white' : 'border border-primary bg-white'
                                        }`}
                                    >
                                        <div>
                                            <h3 className="text-xl md:text-3xl font-bold">{currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}</h3>
                                            <p className="mt-2 md:text-xl">
                                                {currentLocale === 'kh'
                                                    ? item?.short_description_kh || item?.short_description
                                                    : item?.short_description}
                                            </p>
                                        </div>

                                        {/* MOBILE ARROW */}
                                        <div
                                            className={`absolute top-1/2 h-6 w-6 -translate-y-1/2 rotate-45 ${
                                                type === 'blue' ? 'bg-primary' : 'border-b border-l border-primary bg-white'
                                            } -left-3`}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="mx-4 h-0.5 w-4 bg-primary md:mx-auto"></div>
        </>
    );
}
