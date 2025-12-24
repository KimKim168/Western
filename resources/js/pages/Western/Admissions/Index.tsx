import useTranslation from '@/hooks/use-translation';
import SchoolFees from '@/pages/Western/components/SchoolFees';
import { usePage } from '@inertiajs/react';
import FeatureAddmision from '../components/FeaturAddmision';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const { howToEnrollYourChild, schoolFees } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <WesternLayout2>
            <div className="section-container mt-28 md:mt-36">
                <h1 className="text-3xl font-bold text-primary md:text-5xl">
                    {currentLocale == 'kh' ? howToEnrollYourChild?.name_kh || howToEnrollYourChild?.name : howToEnrollYourChild?.name}
                </h1>
                {/* Title */}
                <p className="relative mt-6 inline-block text-xl font-semibold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 after:rounded-full after:bg-primary after:content-[''] md:text-3xl">
                    {currentLocale == 'kh'
                        ? howToEnrollYourChild?.short_description_kh || howToEnrollYourChild?.short_description
                        : howToEnrollYourChild?.short_description}
                </p>
                <div
                    className="mt-4 max-w-5xl md:text-lg"
                    dangerouslySetInnerHTML={{
                        __html:
                            currentLocale == 'kh'
                                ? howToEnrollYourChild?.long_description_kh || howToEnrollYourChild?.long_description
                                : howToEnrollYourChild?.long_description,
                    }}
                />

                {/*  */}
                <FeatureAddmision data={howToEnrollYourChild.children} />
                {/*  */}
                <SchoolFees data={schoolFees}/>
                {/*  */}
            </div>
        </WesternLayout2>
    );
};

export default Index;
