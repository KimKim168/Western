import useTranslation from '@/hooks/use-translation';

const SchoolFees = ({ data }: { data: any }) => {
    const { t, currentLocale } = useTranslation();
    return (
        <div>
            <div key={data.id} className="mt-16">
                <h1 className="text-center text-3xl font-bold text-primary md:mb-8 md:text-start md:text-5xl">
                    {currentLocale == 'kh' ? data?.name_kh || data?.name : data?.name}
                </h1>

                <div
                    className="prose max-w-none overflow-scroll"
                    dangerouslySetInnerHTML={{
                        __html: currentLocale == 'kh' ? data?.long_description_kh || data?.long_description : data?.long_description,
                    }}
                />
            </div>
        </div>
    );
};

export default SchoolFees;
