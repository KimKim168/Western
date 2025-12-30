import { useEffect, useRef, useState } from 'react';
import useTranslation from '@/hooks/use-translation';
import Header from '@/pages/Buddhist/components/Header';
import { usePage } from '@inertiajs/react';
import HeaderAllPage from '../components/HeaderAllPage';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const { curriculum } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    const [maxHeight, setMaxHeight] = useState(0);
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (sectionRefs.current.length) {
            const heights = sectionRefs.current.map(ref => ref?.offsetHeight || 0);
            const tallest = Math.max(...heights);
            setMaxHeight(tallest);
        }
    }, [curriculum]);

    return (
        <WesternLayout2>
            <div className="mt-28">
                <HeaderAllPage data={curriculum} />
            </div>

            <div className="section-container mt-4 md:mt-8">
                <Header
                    title={
                        currentLocale == 'kh'
                            ? curriculum?.short_description_kh || curriculum?.short_description
                            : curriculum?.short_description
                    }
                    mainClass="text-xl md:text-[28px]"
                />

                <div className="flex items-center justify-center">
                    <div className="w-full">
                        <div className="mx-auto mt-4 w-full space-y-10 md:mt-8">
                            {curriculum?.children?.map((item: any, index: number) => (
                                <div
                                    key={item.id}
                                    ref={el => (sectionRefs.current[index] = el!)}
                                    className="flex flex-col items-stretch justify-center gap-y-0 lg:flex-row lg:even:flex-row-reverse"
                                    style={{ minHeight: maxHeight }}
                                >
                                    {/* Image Section */}
                                    <div className="shrink-0 basis-[30%] flex">
                                        <img
                                            src={`/assets/images/pages/${item.images[0]?.image}`}
                                            className="w-full object-cover"
                                            style={{ height: '100%' }}
                                            alt=""
                                        />
                                    </div>

                                    {/* Text Section */}
                                    <div className="flex w-full shrink-0 basis-[70%] flex-col justify-center border-10 border-primary p-4 text-primary">
                                        <h4 className="my-3 text-center text-2xl font-semibold">
                                            {currentLocale == 'kh' ? item?.name_kh || item?.name : item?.name}
                                        </h4>

                                        <p className="w-full text-base">{item.short_description}</p>

                                        {item.long_description && (
                                            <div className="px-1.5">
                                                <div
                                                    className="prose max-w-none text-justify text-base text-primary"
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            currentLocale == 'kh'
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
                </div>
            </div>
        </WesternLayout2>
    );
};

export default Index;
