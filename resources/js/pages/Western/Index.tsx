import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import NavbarPage from '../Buddhist/components/navbar/navbar';
import Statistics from '../Buddhist/components/Statistics';
import WesternHero from '../Buddhist/components/WesternHero';
import ActivitiAndEventHero from './components/ActivitiAndEvent/ActivitiAndEventHero';
import Campush from './components/Campush';
import Contact from './components/Contact';
import { HomeVideoBanner } from './components/HomeVideoBanner';
import WesternLayout from './WesternLayout';

const Index = () => {
    const { homeVideoBanner } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <WesternLayout>
            <div className="relative">
                {/* Navbar overlays video */}
                <div className="absolute top-0 left-0 z-20 w-full">
                    <NavbarPage />
                </div>
                {/* HERO SECTION */}
                {homeVideoBanner?.video_file_name ? (
                    <div className="mx-auto w-full">
                        {/* <VideoPlayer
                        thumbnailUrl="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?q=80&w=2069&auto=format&fit=crop"
                        videoUrl="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb" // Example: YouTube embed URL with autoplay
                        title="Western International School"
                        description="Start Your Future Today!"
                        className="rounded-none"
                    /> */}
                        <HomeVideoBanner
                            title={currentLocale === 'kh' ? homeVideoBanner?.name_kh || homeVideoBanner?.name : homeVideoBanner?.name}
                            description={
                                currentLocale === 'kh'
                                    ? homeVideoBanner?.short_description_kh || homeVideoBanner?.short_description
                                    : homeVideoBanner?.short_description
                            }
                            videoUrl={`/assets/videos/banners/${homeVideoBanner?.video_file_name}`}
                        />
                    </div>
                ) : (
                    <div className="h-18 bg-primary xl:h-28"></div>
                )}
            </div>
            <WesternHero />
            <Statistics />
            <Campush />
            <div id="activities_and_events">
                <ActivitiAndEventHero />
            </div>
            <Contact />
        </WesternLayout>
    );
};

export default Index;
