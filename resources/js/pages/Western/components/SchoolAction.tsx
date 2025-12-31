import { useEffect, useRef, useState } from 'react';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';


const SchoolAction = () => {
    const { studentCouncilInAction } = usePage<any>().props;
    const { currentLocale } = useTranslation();

    const [maxHeight, setMaxHeight] = useState(0);
    const textRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (textRefs.current.length) {
            const heights = textRefs.current.map(ref => ref?.offsetHeight || 0);
            setMaxHeight(Math.max(...heights));
        }
    }, [studentCouncilInAction]);
    return (
        <>
            <div className="py-3 md:py-8">
                <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-4/5 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-[55px]">
                    {currentLocale == 'kh' ? studentCouncilInAction?.name_kh || studentCouncilInAction?.name : studentCouncilInAction?.name}
                </p>
            </div>

            <div className="flex justify-center">
                <div className="w-full">
                    <div className="mx-auto mt-8 w-full space-y-10">
                        {studentCouncilInAction?.children?.map((item: any, index: number) => (
                            <div
                                key={item.id}
                                className="flex flex-col lg:flex-row lg:even:flex-row-reverse items-stretch"
                            >
                                {/* Text Column */}
                                <div
                                    ref={el => (textRefs.current[index] = el!)}
                                    className="flex w-full basis-[60%] flex-col justify-center border-12 border-primary p-3 text-primary"
                                    style={{ minHeight: maxHeight }}
                                >
                                    <h4 className="mb-3 text-center text-xl font-bold md:text-3xl">
                                        {currentLocale === 'kh'
                                            ? item?.name_kh || item?.name
                                            : item?.name}
                                    </h4>

                                    {item.long_description && (
                                        <div
                                            className="prose prose-strong:text-primary max-w-none text-base text-primary text-justify"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    currentLocale === 'kh'
                                                        ? item.long_description_kh || item.long_description
                                                        : item.long_description,
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Image Column */}
                                {item.images?.[0]?.image && (
                                    <div className="shrink-0 basis-[40%] flex">
                                        <img
                                            src={`/assets/images/pages/${item.images[0].image}`}
                                            className="w-full object-cover"
                                            alt={item.name}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SchoolAction;
