import useTranslation from '@/hooks/use-translation';

const SchoolFees = ({ data }: { data: any }) => {
    const { t, currentLocale } = useTranslation();

    return (
        <div className="mt-10 md:mt-16">
            {/* Parent Title */}
            <h1 className="text-center text-3xl font-bold text-primary mb-2 md:mb-8 md:text-start md:text-5xl">
                {currentLocale === 'kh' ? data?.name_kh || data?.name : data?.name}
            </h1>

            {/* Parent Long Description */}
            {/* {data?.long_description && (
                <div
                    className="prose max-w-none overflow-scroll mb-8"
                    dangerouslySetInnerHTML={{
                        __html:
                            currentLocale === 'kh'
                                ? data?.long_description_kh || data?.long_description
                                : data?.long_description,
                    }}
                />
            )} */}

            {/* Children */}
            {data?.children?.map((child: any) => (
                <div key={child.id} className="flex flex-col items-center justify-between">
                    <h2 className="text-center text-lg font-semibold text-primary md:text-start md:text-3xl">
                        {currentLocale === 'kh' ? child?.name_kh || child?.name : child?.name}
                    </h2>

                    {/* Child Long Description */}
                    {/* {child?.long_description && (
                        <div
                            className="prose max-w-none overflow-scroll my-4"
                            dangerouslySetInnerHTML={{
                                __html:
                                    currentLocale === 'kh'
                                        ? child?.long_description_kh || child?.long_description
                                        : child?.long_description,
                            }}
                        />
                    )} */}

                    {/* Child Images */}
                    {child?.images?.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-4 justify-center">
                            {child.images.map((img: any) => (
                                <img
                                    key={img.id}
                                    src={`/assets/images/pages/${img.image}`} // adjust path if needed
                                    alt={child.name}
                                    className="w-full object-cover"
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SchoolFees;
