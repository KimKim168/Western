import NavbarPage from '../Buddhist/components/navbar/navbar';
import Statistics from '../Buddhist/components/Statistics';
import WesternHero from '../Buddhist/components/WesternHero';
import ActivitiAndEventHero from './components/ActivitiAndEvent/ActivitiAndEventHero';
import Campush from './components/Campush';
import Contact from './components/Contact';
import { VideoPlayer } from './components/video-thumbnail-player';
import WesternLayout from './WesternLayout';

const Index = () => {
    return (
        <WesternLayout>
            <div className="relative">
                {/* Navbar overlays video */}
                <div className="absolute top-0 left-0 z-20 w-full">
                    <NavbarPage />
                </div>
                {/* HERO SECTION */}
                <div className="mx-auto w-full">
                    <VideoPlayer
                        thumbnailUrl="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?q=80&w=2069&auto=format&fit=crop"
                        videoUrl="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb" // Example: YouTube embed URL with autoplay
                        title="Western International School"
                        description="Start Your Future Today!"
                        className="rounded-none"
                    />
                </div>
            </div>
            <WesternHero />
            <Statistics />
            <Campush />
            <ActivitiAndEventHero />
            <Contact />
        </WesternLayout>
    );
};

export default Index;
