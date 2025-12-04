
import WesternHero from '../Buddhist/components/WesternHero';
import WesternLayout from './WesternLayout';
import Header from '../Buddhist/components/Header';

const Index = () => {
    return (
        <WesternLayout>
            <div className="relative h-[80vh] w-full overflow-hidden md:h-[90vh]" id="home">
                {/* Background Video */}
                <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline>
                    <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* HERO TEXT */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-6xl">Western International School</h1>
                    <p className="mt-4 text-xl text-white drop-shadow-lg md:text-3xl">Start Your Future Today!</p>
                </div>
            </div>
            <WesternHero/>
            <Header title={'Statistics'}/>
        </WesternLayout>
    );
};

export default Index;
