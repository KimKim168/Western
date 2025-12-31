import useTranslation from '@/hooks/use-translation';
import Header from '@/pages/Buddhist/components/Header';
import { usePage } from '@inertiajs/react';
import AlertDetial from '../components/AlertDetial';
import HeaderAllPage from '../components/HeaderAllPage';
import WesternLayout2 from '../WesternLayout2';

interface StudentCouncil {
    title: string;
    long_description?: string;
    images: { image: string }[];
}

const Index = () => {
    const Data = {
        title: 'School Facilities',
        long_description: '',
        images: [{ image: 'hero.JPG' }],
    };
    const { schoolFacilties } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <WesternLayout2>
            <div >
                <HeaderAllPage data={schoolFacilties} />
            </div>
            <div className="section-container">
                {/*  */}
                <div className="mx-auto mt-8 max-w-3xl md:mt-10">
                    <Header
                        title={
                            currentLocale == 'kh'
                                ? schoolFacilties?.short_description_kh || schoolFacilties?.short_description
                                : schoolFacilties?.short_description
                        }
                        short_description={
                            currentLocale == 'kh'
                                ? schoolFacilties?.long_description_kh || schoolFacilties?.long_description
                                : schoolFacilties?.long_description
                        }
                        mainClass='text-xl md:text-[30px]'
                    />
                </div>
                <AlertDetial data={schoolFacilties.children} />
            </div>
        </WesternLayout2>
    );
};

export default Index;
