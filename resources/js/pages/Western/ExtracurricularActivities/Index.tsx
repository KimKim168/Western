import WesternLayout from '../WesternLayout';
import WesternLayout2 from '../WesternLayout2';
import CardSectionTextFisrt from '../components/Cards/CardSectionTextFisrt';

const Index = () => {
    return (
        <WesternLayout2>
            <div className="section-container mt-26 md:mt-36">
                <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 md:text-5xl">
                    Extracurricular Activities
                </p>
                <div className="mt-4 max-w-5xl md:text-lg">
                    Our students also participate in other activities that help them build teamwork, communication, and relationship. It helps
                    students explore their interests and create a broader perspective of the worldview.
                </div>
                {/* Card with dielog */}
                <CardSectionTextFisrt />
            </div>
        </WesternLayout2>
    );
};

export default Index;
