import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import WesternLayout2 from '../WesternLayout2';
import CampusDialog from '../components/CampusDialog';
import HeaderAllPage from '../components/HeaderAllPage';

const Index = () => {
    const { ourCampuses } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <WesternLayout2>
            <HeaderAllPage data={ourCampuses} />
            {/* spacing tuned to mimic the provided image */}
            <div className="section-container mt-12 flex flex-wrap justify-center gap-4">
                {ourCampuses?.children?.map((item: any) => (
                    <div key={item.id} className="w-full md:w-[24%] md:max-w-[360px]">
                        <CampusDialog item={item} />
                    </div>
                ))}
            </div>
        </WesternLayout2>
    );
};

export default Index;
