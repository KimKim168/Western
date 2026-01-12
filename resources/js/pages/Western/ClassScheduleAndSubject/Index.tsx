import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import HeaderAllPage from '../components/HeaderAllPage';
import WesternLayout2 from '../WesternLayout2';
import ImageGrid from '@/pages/Sesor/components/ImageGrid';

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
                                {/* Long Description HTML */}
                                <div
                                    className="prose mt-4 max-w-none"
                                    dangerouslySetInnerHTML={{
                                        __html: currentLocale == 'kh' ? item?.long_description_kh || item?.long_description : item?.long_description,
                                    }}
                                />
                                {item?.images?.length > 3 && <ImageGrid images={item.images} />}

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="section-container grid h-[1900px] grid-cols-4 grid-rows-6 gap-3">
                <div className="col-span-2 row-span-2">
                    <img src="/assets/iloveimg/3H6A6620.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="col-span-2 col-start-3">
                    <img src="/assets/iloveimg/2149123764.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="col-span-2 col-start-3 row-span-2 row-start-2">
                    <img src="/assets/iloveimg/3H6A8806.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="col-span-2 row-start-3">
                    <img src="/assets/iloveimg/football.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="row-span-2 row-start-4">
                    <img src="/assets/iloveimg/3H6A9758.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="row-start-4">
                    <img src="/assets/iloveimg/earth.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="row-start-4">
                    <img src="/assets/iloveimg/Valleyball.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="row-start-4">
                    <img src="/assets/iloveimg/3H6A9968.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="col-span-2 col-start-2 row-start-5">
                    <img src="/assets/iloveimg/2635.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="col-start-4 row-start-5">
                    <img src="/assets/iloveimg/3H6A2209.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="row-start-6">
                    <img src="/assets/iloveimg/basketball.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="row-start-6">
                    <img src="/assets/iloveimg/2148672236.jpg" className="h-full w-full object-cover" />
                </div>
                <div className="col-span-2 row-start-6">
                    <img src="/assets/iloveimg/3473251.jpg" className="h-full w-full object-cover" />
                </div>
            </div> */}
        </WesternLayout2>
    );
};

export default Index;
