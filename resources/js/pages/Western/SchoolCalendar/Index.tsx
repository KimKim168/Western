import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy } from 'lucide-react';
import WesternLayout from '../WesternLayout';

const Index = () => {
    const tabs = [
        {
            title: 'For Kindergarten',
            value: 'For Kindergarten',
            content: 'For Kindergarten dlx shadcn@latest add tabs',
            image:'/assets/buddhist/image4.png'
        },
        {
            title: 'For Grades',
            value: 'For Grades',
            content: 'npx shadcn@latest add tabs',
            image:'/assets/buddhist/image5.png'
        },
    ];

    return (
        <WesternLayout>
            <div className="section-container mt-28 md:mt-36">
                {/* Title */}
                <p className="relative inline-block text-3xl md:text-5xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 after:rounded-full after:bg-primary after:content-['']">
                    School Calendar
                </p>
                <div className="mt-4 max-w-5xl md:text-lg">
                    Western Internation School Calendar, featuring important dates, public holidays, school events, and closures for the entire
                    academic year. Stay informed!
                </div>
                <Tabs defaultValue={tabs[0].value} className="mt-8">
                    <TabsList className="w-full justify-centern gap-2 rounded-none bg-transparent p-0">
                        {tabs.map((tab) => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className="h-full rounded-none text-black border-black border md:px-24 md:py-4 bg-background data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-none"
                            >
                                <p className="md:text-xl">{tab.title}</p>{' '}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {tabs.map((tab) => (
                        <TabsContent key={tab.value} value={tab.value}>
                             <img src={tab.image} className='mt-2'/>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </WesternLayout>
    );
};

export default Index;
