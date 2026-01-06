import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

// NOTE: The 'faq' array was not being used in the component's render logic,
// so I have removed it for clarity. If you need it, you can add it back.

const ValuseWisCare = () => {
    const { valuesWiscare } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    const firstRow = valuesWiscare?.children?.slice(0, 3);
    const secondRow = valuesWiscare?.children?.slice(3);

    const renderItem = ({ name, name_kh, short_description, short_description_kh, icon, isLast }) => (
        <div key={name} className="relative flex min-h-[225px] flex-col border-[0.5px] border-primary p-12">
            {/* Title Row */}
            <div className="flex items-end justify-start gap-3">
                <div className="flex h-14 w-14 shrink-0">
                    <img src={`/assets/images/pages/thumb/${icon}`} className="h-full w-full object-contain" alt={name} />
                </div>

                {/* Half-circle decoration */}
                {!isLast && (
                    <div className="absolute top-1/2 -right-6 z-10 hidden h-12 w-6 -translate-y-1/2 rounded-r-full border-t border-r border-b border-primary bg-white xl:block" />
                )}

                <h3 className="text-xl font-bold text-primary sm:text-xl md:text-3xl">{currentLocale === 'kh' ? name_kh || name : name}</h3>
            </div>

            {/* Description */}
            <p className="mt-3 text-xl text-black">{currentLocale === 'kh' ? short_description_kh || short_description : short_description}</p>
        </div>
    );  

    return (
        <div className="mt-8 md:mt-12">
            <h2 className="my-4 text-center text-3xl font-bold text-primary md:text-[55px]">
                {currentLocale === 'kh' ? valuesWiscare?.name_kh || valuesWiscare?.name : valuesWiscare?.name}
            </h2>

            <div className="hidden grid-cols-1 border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-primary sm:grid-cols-2 xl:grid xl:grid-cols-3">
                {firstRow.map((item, index) => renderItem({ ...item, isLast: index === firstRow.length - 1 }))}
            </div>

            <div className="hidden grid-cols-1 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-primary sm:grid-cols-2 xl:grid xl:grid-cols-4">
                {secondRow.map((item, index) => renderItem({ ...item, isLast: index === secondRow.length - 1 }))}
            </div>

            <div className="grid grid-cols-1 border-[0.5px] border-primary md:grid-cols-2 xl:hidden">
                {valuesWiscare?.children?.map((item: any) => (
                    <div key={item.name} className="relative border-[0.5px] border-primary p-5 sm:p-6">
                        <div className="flex items-end gap-2">
                            <div className="flex h-14 w-14 shrink-0 sm:h-12 sm:w-12">
                                <img src={`/assets/images/pages/thumb/${item.icon}`} className="h-full w-full object-contain" alt={item.name} />
                            </div>

                            <h3 className="text-xl font-bold text-primary sm:text-xl md:text-3xl">
                                {currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                            </h3>
                        </div>

                        <p className="mt-2 text-base leading-relaxed text-black sm:text-[20px]">
                            {currentLocale === 'kh' ? item?.short_description_kh || item?.short_description : item?.short_description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ValuseWisCare;
