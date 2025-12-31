import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import Header from './Header';

const Statistics = () => {
    const { statistics } = usePage<any>().props;
    const { currentLocale } = useTranslation();

    const title = currentLocale === 'kh' ? statistics?.name_kh || statistics?.name : statistics?.name;

    const shortDescription =
        currentLocale === 'kh' ? statistics?.short_description_kh || statistics?.short_description : statistics?.short_description;

    return (
        <div className="mt-8 md:mt-12">
            {/* Header */}
            {/* <Header title={title} short_description={shortDescription} /> */}
            <div className="flex justify-center text-center">
                <p className="relative inline-block text-2xl font-bold text-primary
                    after:absolute after:bottom-0 after:left-1/2 after:h-[2px]
                    after:w-[60%] after:-translate-x-1/2 after:translate-y-1
                    after:rounded-full after:bg-primary after:content-['']
                    md:text-4xl lg:after:w-4/5">
                    {title}
                </p>
            </div>

            {/* Statistics Section */}
            <div
                className="relative mx-auto mt-8 md:mt-12 h-[150px] w-full md:h-[300px]"
                style={{
                    backgroundImage: statistics?.images?.[0]?.image ? `url('/assets/images/pages/${statistics.images[0].image}')` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/60" />

                {/* Content */}
                <div className="relative mx-auto grid h-full grid-cols-4 items-center gap-2 px-4 md:grid-cols-4 md:gap-6">
                    {statistics?.children?.map((item: any) => {
                        const label = currentLocale === 'kh' ? item?.short_description_kh || item?.short_description : item?.short_description;

                        return (
                            <div key={item?.id} className="flex flex-col items-center justify-center md:gap-2 text-white md:flex-row md:gap-4">
                                {/* ICON */}
                                {item?.icon && (
                                    <img
                                        src={`/assets/images/pages/thumb/${item?.icon}`}
                                        alt={label}
                                        className="w-8 transition-all duration-500 hover:scale-110 md:w-[70px]"
                                    />
                                )}

                                <div className="flex flex-col items-center md:items-start">
                                    {/* VALUE */}
                                    <p className="text-sm font-bold md:text-4xl">{item?.name}</p>

                                    {/* LABEL */}
                                    {label && <p className="text-xs md:text-2xl">{label}</p>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Statistics;
