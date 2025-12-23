import Header from '@/pages/Buddhist/components/Header';
import { usePage } from '@inertiajs/react';
import ValuseWisCare from '../components/ActivitiAndEvent/ValuseWisCare';
import Timeline from '../components/TimeLine';
import VisionAndMission from '../components/VisionAndMission';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const { historyAndValueHeader, timeLine, locale } = usePage<any>().props;
    return (
        <WesternLayout2>
            <div className="section-container mt-28 md:mt-36">
                {/* <Header
                    title={locale === 'kh' ? (historyAndValueHeader?.name_kh || historyAndValueHeader?.name) : historyAndValueHeader?.name}
                    short_description={locale === 'kh' ? (historyAndValueHeader?.long_description_kh || historyAndValueHeader?.long_description) : historyAndValueHeader?.long_description}
                /> */}
                <Header
                    title={'Western International School History'}
                    short_description={
                        'Western International School first opened its doors on September 1, 2003. We started with 262 students from kindergarten to grade 11 with just one (1) campus. Twenty years later, we are now welcoming over 8,000 students across our 14 campuses located in Phnom Penh. Western International School and other schools.'
                    }
                />

                <div className="flex flex-col">
                    <div className="mx-auto my-4 font-semibold text-primary md:text-2xl">Western International School Campuses Timeline:</div>
                    <Timeline />
                </div>
                <VisionAndMission />
                <ValuseWisCare />
            </div>
        </WesternLayout2>
    );
};

export default Index;
