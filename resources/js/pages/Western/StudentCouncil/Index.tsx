import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import SchoolAction from '../components/SchoolAction';
import StudentTeam from '../components/StudentTeam';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const { studentCouncil } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <WesternLayout2>
            <div className="section-container mt-26 md:mt-36">
                <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-4xl">
                    {currentLocale == 'kh' ? studentCouncil?.name_kh || studentCouncil?.name : studentCouncil?.name}
                </p>
                <div
                    className="prose mt-4 max-w-6xl md:text-lg"
                    dangerouslySetInnerHTML={{
                        __html:
                            currentLocale == 'kh'
                                ? studentCouncil?.long_description_kh || studentCouncil?.long_description
                                : studentCouncil?.long_description,
                    }}
                ></div>
                <StudentTeam />
                <SchoolAction />
            </div>
        </WesternLayout2>
    );
};

export default Index;
