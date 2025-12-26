import useTranslation from '@/hooks/use-translation';
import Header from '@/pages/Buddhist/components/Header';
import { usePage } from '@inertiajs/react';
import HeaderAllPage from '../components/HeaderAllPage';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const { curriculum } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <WesternLayout2>
            <div className="mt-28">
                <HeaderAllPage data={curriculum} />
            </div>

            <div className="section-container mt-4 md:mt-8">
                {/* <Header title={child?.title} /> */}

                <Header
                    title={currentLocale == 'kh' ? curriculum?.short_description_kh || curriculum?.short_description : curriculum?.short_description}
                    mainClass="text-xl md:text-[28px]"
                />
                <div className="flex items-center justify-center">
                    <div className="w-full">
                        <div className="mx-auto mt-4 w-full space-y-10 md:mt-8">
                            {curriculum?.children?.map((item: any) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col items-stretch justify-center gap-y-0 md:flex-row md:even:flex-row-reverse"
                                >
                                    {/* Image Section */}
                                    <div className="shrink-0 basis-[30%]">
                                        <img src={`/assets/images/pages/${item.images[0]?.image}`} className="h-full w-full object-cover" />
                                    </div>
                                    {/* Text Section */}
                                    <div className="flex w-full shrink-0 basis-[70%] flex-col justify-center border-8 border-primary p-4 text-primary">
                                        <h4 className="my-3 text-center text-2xl font-semibold">
                                            {currentLocale == 'kh' ? item?.name_kh || item?.name : item?.name}
                                        </h4>

                                        <p className="w-full text-base">{item.short_description}</p>

                                        {item.long_description && (
                                            <div
                                                className="prose max-w-none text-base text-primary"
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        currentLocale == 'kh'
                                                            ? item?.long_description_kh || item?.long_description
                                                            : item?.long_description,
                                                }}
                                            />
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
