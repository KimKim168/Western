import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import WesternLayout2 from '../WesternLayout2';
import CardSectionTextFisrt from '../components/Cards/CardSectionTextFisrt';
import ActivitiAndEventCard from '../components/ActivitiAndEvent/ActivitiAndEventCard';

const Index = () => {
    const { extracurricularActivities } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <WesternLayout2>
            <div className="section-container ">
                <p className="relative inline-block py-3 md:pt-8 text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 md:text-[55px]">
                    {currentLocale == 'kh' ? extracurricularActivities?.name_kh || extracurricularActivities?.name : extracurricularActivities?.name}
                </p>
                <div
                    className="prose max-w-5xl md:text-xl pb-3 md:pb-4 text-black"
                    dangerouslySetInnerHTML={{
                        __html:
                            currentLocale == 'kh'
                                ? extracurricularActivities?.long_description_kh || extracurricularActivities?.long_description
                                : extracurricularActivities?.long_description,
                    }}
                />
                {/* Card with dielog */}
                <CardSectionTextFisrt data={extracurricularActivities?.children} />
                {/* <ActivitiAndEventCard data={extracurricularActivities?.children} /> */}
            </div>
        </WesternLayout2>
    );
};

export default Index;
