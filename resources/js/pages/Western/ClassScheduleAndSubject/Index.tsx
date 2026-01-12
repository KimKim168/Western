import useTranslation from '@/hooks/use-translation';
import ImageGrid from '@/pages/Sesor/components/ImageGrid';
import { usePage } from '@inertiajs/react';
import HeaderAllPage from '../components/HeaderAllPage';
import WesternLayout2 from '../WesternLayout2';
import Heading from '@/components/heading';

const Index = () => {
    const { classSchedules, classSubject } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <WesternLayout2>
            <div className="space-y-10">
                 <div>
                        <HeaderAllPage data={classSchedules} />

                        <div className="section-container">
                            <div className="mt-2 space-y-4">
                                {/* Image */}
                                {/* Long Description HTML */}
                                <div
                                    className="prose mt-4 max-w-none"
                                    dangerouslySetInnerHTML={{
                                        __html: currentLocale == 'kh' ? classSchedules?.long_description_kh || classSchedules?.long_description : classSchedules?.long_description,
                                    }}
                                />
                                {/* {item?.images?.length > 3 && <ImageGrid images={item.images} />} */}
                            </div>
                        </div>
                    </div>
                    <div>
                        

                        <div className="section-container">
                            <div className='py-3 md:pt-8'>
                    <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-4/5 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-[55px]">
                    {currentLocale == 'kh' ? classSubject?.name_kh || classSubject?.name : classSubject?.name}
                </p>
                </div>
                            <div className="mt-2 space-y-4">
                                {/* Image */}
                                {classSubject?.images?.length > 3 && <ImageGrid images={classSubject.images} />}
                            </div>
                        </div>
                    </div>
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
