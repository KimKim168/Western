import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

const faq = [
    {
        icon: 'puzzle.png',
        name: 'Wisdom',
        short_description: 'Have a good sense of judgment.',
    },
    {
        icon: 'puzzle.png',
        name: 'Integrity',
        short_description: `Do what is right "Good attitude and behavior".`,
    },
    {
        icon: 'puzzle.png',
        name: 'Support',
        short_description: `Keep the employees, students, and families that we serve at the forefront of our work.`,
    },
    {
        icon: 'puzzle.png',
        name: 'Collaboration',
        short_description: `Work as one team "Success in one team".`,
    },
    {
        icon: 'puzzle.png',
        name: 'Accountability',
        short_description: `Own one's actions "Responsible for one's actions".`,
    },
    {
        icon: 'puzzle.png',
        name: 'Respect',
        short_description: `Value every voice "Respect each other".`,
    },
    {
        icon: 'puzzle.png',
        name: 'Excellence',
        short_description: `Fully explore details of the management process in order to build the highest reliability and accountability in educational services.`,
    },
];

const ValuseWisCare = () => {
    const { valuesWiscare } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    const firstRow = valuesWiscare?.children?.slice(0, 3);
    const secondRow = valuesWiscare?.children?.slice(3);

    const renderItem = ({ name, name_kh, short_description, short_description_kh, icon, isLast }) => (
        <div key={name} className="relative border-[0.5px] border-primary p-5 sm:p-6">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                    <img src={`/assets/images/pages/thumb/${icon}`} className="h-full w-full object-contain" alt={name} />
                </div>

                {/* Right circle decoration (desktop only) */}
                {!isLast && (
                    <div className="hidden xl:block">
                        <div className="absolute top-1/2 -right-4.5 z-20 hidden h-10 w-10 -translate-y-1/2 rounded-full border-primary bg-white md:block" />
                        <div className="absolute top-1/2 -right-5.5 hidden h-10 w-10 -translate-y-1/2 rounded-full border border-primary bg-white md:block" />
                    </div>
                )}

                <h3 className="text-lg font-semibold text-primary sm:text-xl md:text-2xl">{currentLocale === 'kh' ? name_kh || name : name}</h3>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-foreground/70 sm:text-[14px]">
                {currentLocale === 'kh' ? short_description_kh || short_description : short_description}
            </p>
        </div>
    );

    return (
        <div className="mt-8 md:mt-12">
            <h2 className="my-4 text-center text-2xl font-bold text-primary sm:text-3xl">Valuse: WISCARE</h2>

            <div className="hidden grid-cols-1 border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-primary sm:grid-cols-2 xl:grid xl:grid-cols-3">
                {firstRow.map((item, index) => renderItem({ ...item, isLast: index === firstRow.length - 1 }))}
            </div>

            <div className="hidden grid-cols-1 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-primary sm:grid-cols-2 xl:grid xl:grid-cols-4">
                {secondRow.map((item, index) => renderItem({ ...item, isLast: index === secondRow.length - 1 }))}
            </div>

            <div className="grid grid-cols-1 border-[0.5px] border-primary md:grid-cols-2 xl:hidden">
                {valuesWiscare?.children?.map((item: any) => (
                    <div key={item.name} className="relative border-[0.5px] border-primary p-5 sm:p-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                                <img src={`/assets/images/pages/thumb/${item.icon}`} className="h-full w-full object-contain" alt={item.name} />
                            </div>

                            <h3 className="text-lg font-semibold text-primary sm:text-xl md:text-2xl">
                                {currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                            </h3>
                        </div>

                        <p className="mt-2 text-sm leading-relaxed text-foreground/70 sm:text-[14px]">
                            {currentLocale === 'kh' ? item?.short_description_kh || item?.short_description : item?.short_description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ValuseWisCare;
