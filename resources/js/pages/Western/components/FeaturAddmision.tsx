import { useEffect, useRef, useState } from 'react';
import useTranslation from '@/hooks/use-translation';

const FeatureAddmision = ({ data }: { data: any }) => {
    const { t, currentLocale } = useTranslation();
    const [maxHeight, setMaxHeight] = useState(0);
    const textRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (textRefs.current.length) {
            const heights = textRefs.current.map(ref => ref?.offsetHeight || 0);
            const tallest = Math.max(...heights);
            setMaxHeight(tallest);
        }
    }, [data]);

    return (
        <div className="flex justify-center">
            <div className="w-full">
                <div className="mx-auto mt-8 w-full space-y-10">
                    {data.map((item: any, index: number) => (
                        <div
                            key={item.id}
                            className="flex flex-col lg:flex-row lg:even:flex-row-reverse items-stretch"
                        >
                            {/* Text Column */}
                            <div
                                ref={el => (textRefs.current[index] = el!)}
                                className="flex w-full basis-[60%] flex-col justify-center border-12 border-primary p-2 text-primary"
                                style={{ minHeight: maxHeight }}
                            >
                                <h4 className="mb-3 mx-auto text-center text-2xl font-semibold tracking-[-0.02em] md:text-start">
                                    {currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                                </h4>

                                {item.short_description && (
                                    <p className="text-base">{item.short_description}</p>
                                )}

                                {item.long_description && (
                                    <div className="px-2">
                                        <div
                                            className="prose prose-strong:text-primary max-w-none text-base text-primary"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    currentLocale === 'kh'
                                                        ? item.long_description_kh || item.long_description
                                                        : item.long_description,
                                            }}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Image Column */}
                            {item.images?.[0]?.image && (
                                <div className="shrink-0 basis-[40%] flex">
                                    <img
                                        src={`/assets/images/pages/${item.images[0].image}`}
                                        className="w-full object-cover"
                                        style={{ height: 'auto' }}
                                        alt={item.name}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureAddmision;
