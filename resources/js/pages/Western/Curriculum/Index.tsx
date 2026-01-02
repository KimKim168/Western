import { useEffect, useRef, useState } from 'react';
import useTranslation from '@/hooks/use-translation';
import Header from '@/pages/Buddhist/components/Header';
import { usePage } from '@inertiajs/react';
import HeaderAllPage from '../components/HeaderAllPage';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const { curriculum } = usePage<any>().props;
    const { currentLocale } = useTranslation();

    const [maxHeight, setMaxHeight] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate equal height (desktop only)
    useEffect(() => {
        if (!isDesktop) return;

        const heights = sectionRefs.current.map(el => el?.offsetHeight || 0);
        setMaxHeight(Math.max(...heights));
    }, [curriculum, isDesktop]);

    return (
        <WesternLayout2>
            <HeaderAllPage data={curriculum} />

            <div className="section-container mt-4 md:mt-8">
                <Header
                    title={
                        currentLocale === 'kh'
                            ? curriculum?.short_description_kh || curriculum?.short_description
                            : curriculum?.short_description
                    }
                    mainClass="text-xl md:text-[28px]"
                />

                <div className="mx-auto mt-4 w-full space-y-10 md:mt-8">
                    {curriculum?.children?.map((item: any, index: number) => (
                        <div
                            key={item.id}
                            ref={el => (sectionRefs.current[index] = el!)}
                            className="flex flex-col lg:flex-row lg:even:flex-row-reverse"
                            style={{ minHeight: isDesktop ? maxHeight : 'auto' }}
                        >
                            {/* Image */}
                            <div className="w-full lg:basis-[30%]">
                                <img
                                    src={`/assets/images/pages/${item.images[0]?.image}`}
                                    className="h-auto w-full object-cover lg:h-full"
                                    alt=""
                                />
                            </div>

                            {/* Text */}
                            <div className="flex w-full flex-col justify-center border-10 border-primary p-4 text-primary lg:basis-[70%]">
                                <h4 className="my-3 text-center text-2xl md:text-3xl font-semibold">
                                    {currentLocale === 'kh'
                                        ? item?.name_kh || item?.name
                                        : item?.name}
                                </h4>

                                <p className="text-base">{item.short_description}</p>

                                {item.long_description && (
                                    <div className="px-1.5">
                                        <div
                                            className="prose max-w-none text-justify text-[15px] text-primary"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    currentLocale === 'kh'
                                                        ? item?.long_description_kh || item?.long_description
                                                        : item?.long_description,
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </WesternLayout2>
    );
};

export default Index;
