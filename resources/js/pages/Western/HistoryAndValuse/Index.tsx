import useTranslation from '@/hooks/use-translation';
import Header from '@/pages/Buddhist/components/Header';
import { usePage } from '@inertiajs/react';
import ValuseWisCare from '../components/ActivitiAndEvent/ValuseWisCare';
import Timeline from '../components/TimeLine';
import VisionAndMission from '../components/VisionAndMission';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const { historyAndValue, timeLine, ourVision } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <WesternLayout2>
            <div className="section-container mt-28 md:mt-36">
                <Header
                    title={
                        currentLocale === 'kh'
                            ? historyAndValue?.short_description_kh || historyAndValue?.short_description
                            : historyAndValue?.short_description
                    }
                    short_description={
                        currentLocale === 'kh'
                            ? historyAndValue?.long_description_kh || historyAndValue?.long_description
                            : historyAndValue?.long_description
                    }
                />
                {/* <Header
                    title={'Western International School History'}
                    short_description={
                        'Western International School first opened its doors on September 1, 2003. We started with 262 students from kindergarten to grade 11 with just one (1) campus. Twenty years later, we are now welcoming over 8,000 students across our 14 campuses located in Phnom Penh. Western International School and other schools.'
                    }
                /> */}

                <div className="flex flex-col">
                    <div className="mx-auto my-4 font-semibold text-primary md:text-2xl">
                        {currentLocale === 'kh' ? timeLine?.name_kh || timeLine?.name : timeLine?.name}
                    </div>
                    <Timeline data={timeLine.children} />
                </div>
                <VisionAndMission />
                <ValuseWisCare />
            </div>
        </WesternLayout2>
    );
};

export default Index;
