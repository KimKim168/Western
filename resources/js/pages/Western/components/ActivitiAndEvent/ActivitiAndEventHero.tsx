import ButtonSimple from '@/pages/Sesor/components/Bottons/ButtonSimple';
import ActivitiAndEventCard from './ActivitiAndEventCard';

interface StudentCouncil {
    title: string;
    short_description: string;
    long_description: string;
    images: { image: string }[];
}

const ActivitiAndEventHero = () => {
    const studentCouncil: StudentCouncil = {
        title: 'School Life Activities and Events',
        short_description: ' Life Activities',
        long_description: '',
        images: [{ image: 'hero.JPG' }],
    };

    return (
        <div className="section-container mt-8 md:mt-12">
            {/* Title */}
            <div className="flex justify-center text-center">
                <p className="relative inline-block text-2xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-[60%] after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-[''] md:text-4xl lg:after:w-4/5">
                    Activities and Events
                </p>
            </div>
            {/* Cards */}
            <ActivitiAndEventCard />
        </div>
    );
};

export default ActivitiAndEventHero;
