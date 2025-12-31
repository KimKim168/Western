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
            <div className="section-container">
               
                <div className='py-3 md:pt-8'>
                    <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-4/5 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-[55px]">
                    {currentLocale == 'kh' ? studentCouncil?.name_kh || studentCouncil?.name : studentCouncil?.name}
                </p>
                </div>
                <div
                    className="prose mt-3 max-w-7xl md:text-xl text-black text-justify"
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
