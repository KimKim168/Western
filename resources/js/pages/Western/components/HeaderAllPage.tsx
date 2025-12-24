import useTranslation from '@/hooks/use-translation';

const HeaderAllPage = ({ data }: { data: any }) => {
    const { t, currentLocale } = useTranslation();

    return (
        <div className="relative mx-auto mt-6 flex flex-col sm:mt-8">
            {/* Hero Image */}
            {data.images?.[0]?.image ? (
                <div className="relative w-full overflow-hidden">
                    <img
                        src={`/assets/images/pages/${data.images?.[0].image}`}
                        alt={data.title}
                        className="aspect-[16/9] w-full object-cover sm:aspect-[21/7]"
                    />
                </div>
            ) : (
                <div className="h-14 w-full bg-muted sm:h-28" />
            )}

            {/* Title Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-10 bg-primary/70">
                <div className="section-container py-4 sm:py-6 md:py-8">
                    <h3 className="text-xl font-bold tracking-tight text-white sm:text-3xl md:text-[40px]">
                        {currentLocale == 'kh' ? data?.name_kh || data?.name : data?.name}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default HeaderAllPage;
