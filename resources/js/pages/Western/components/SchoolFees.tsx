import useTranslation from '@/hooks/use-translation';

const SchoolFees = ({ data }: { data: any }) => {
    const { t, currentLocale } = useTranslation();

    return (
        <div className="mt-4 md:mt-16">
            {/* Parent Title */}
            <h1 className=" text-3xl font-bold text-primary mb-8 md:mb-8 text-start md:text-5xl">
                {currentLocale === 'kh' ? data?.name_kh || data?.name : data?.name}
            </h1>

            {/* Parent Long Description */}
            {data?.long_description && (
                <div
                    className="prose max-w-none overflow-scroll prose-h2:my-0 prose-h1:my-0 prose-h3:my-0 prose-h4:my-0 prose-h5:my-0 prose-figure:my-0 "
                    dangerouslySetInnerHTML={{
                        __html:
                            currentLocale === 'kh'
                                ? data?.long_description_kh || data?.long_description
                                : data?.long_description,
                    }}
                />
            )}

            {/* Children */}
            
        </div>
    );
};

export default SchoolFees;
