import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import WesternLayout2 from '../WesternLayout2';
import CardSectionTextFisrt from '../components/Cards/CardSectionTextFisrt';

const Index = () => {
    const { activitiesAndEvents } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <WesternLayout2>
            <div className="section-container mt-28 md:mt-36">
                <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 md:text-5xl">
                    {currentLocale == 'kh' ? activitiesAndEvents?.name_kh || activitiesAndEvents?.name : activitiesAndEvents?.name}
                </p>
                <div
                    className="prose mt-2 max-w-5xl md:mt-4 md:text-lg"
                    dangerouslySetInnerHTML={{
                        __html:
                            currentLocale == 'kh'
                                ? activitiesAndEvents?.long_description_kh || activitiesAndEvents?.long_description
                                : activitiesAndEvents?.long_description,
                    }}
                />
                {/* Card with dielog */}
                <CardSectionTextFisrt data={activitiesAndEvents?.children} />
            </div>
        </WesternLayout2>
    );
};

export default Index;
