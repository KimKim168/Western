import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const { schoolCalendar } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <WesternLayout2>
            <div className="section-container mt-28 md:mt-36">
                {/* Title */}
                <div className='py-3 md:py-8'>
 <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-5xl">
                    {currentLocale == 'kh' ? schoolCalendar?.name_kh || schoolCalendar?.name : schoolCalendar?.name}
                </p>
                <div
                    className="prose mt-4 max-w-5xl md:text-lg"
                    dangerouslySetInnerHTML={{
                        __html:
                            currentLocale == 'kh'
                                ? schoolCalendar?.long_description_kh || schoolCalendar?.long_description
                                : schoolCalendar?.long_description,
                    }}
                ></div>
                </div>
               
                
                <Tabs defaultValue={schoolCalendar?.children?.[0].id} >
                    <TabsList className="justify-centern w-full gap-2 rounded-none bg-transparent p-0">
                        {schoolCalendar?.children?.map((tab) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="h-full rounded-none border border-black bg-background text-black data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-none md:px-24 md:py-4"
                            >
                                <p className="md:text-xl">{currentLocale == 'kh' ? tab?.name_kh || tab?.name : tab?.name}</p>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {schoolCalendar?.children?.map((tab: any) => (
                        <TabsContent key={tab.id} value={tab.id}>
                            {tab.images?.map((item: any) => (
                                <img src={`/assets/images/pages/${item.image}`} className="mt-4" />
                            ))}
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </WesternLayout2>
    );
};

export default Index;
