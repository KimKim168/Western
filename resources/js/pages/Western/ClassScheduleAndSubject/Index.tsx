import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import HeaderAllPage from '../components/HeaderAllPage';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const { classSchedulesndSubjects } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <WesternLayout2>
            <div className="space-y-10">
                {classSchedulesndSubjects?.children?.map((item: any) => (
                    <div key={item.id}>
                        <HeaderAllPage data={item} />

                        <div className="section-container">
                            <div key={item.id} className="mt-2 space-y-4">
                                {/* Image */}
                                {/* {item.images.map((img, iIndex) => (
                                        <img
                                            key={iIndex}
                                            src={`/assets/${img.image}`}
                                            alt=""
                                            className="w-full rounded-lg"
                                        />
                                    ))} */}
                                {/* Long Description HTML */}
                                <div
                                    className="prose mt-4 max-w-none"
                                    dangerouslySetInnerHTML={{
                                        __html: currentLocale == 'kh' ? item?.long_description_kh || item?.long_description : item?.long_description,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </WesternLayout2>
    );
};

export default Index;
