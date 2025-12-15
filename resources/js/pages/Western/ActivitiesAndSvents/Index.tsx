import WesternLayout2 from '../WesternLayout2';
import CardSectionTextFisrt from '../components/Cards/CardSectionTextFisrt';

const Index = () => {
    return (
        <WesternLayout2>
            <div className="section-container mt-26 md:mt-36">
                <p className="relative inline-block text-3xl font-bold text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-4/5 after:-translate-x-1/2 md:text-5xl">
                    Activities And Events
                </p>
                <div className="mt-4 max-w-5xl md:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi iure dolore? Vel ea officia quod inventore quam sed
                    odit veniam eius, explicabo quisquam ad tempora rem cupiditate dolorum necessitatibus!
                </div>
                {/* Card with dielog */}
                <CardSectionTextFisrt />
            </div>
        </WesternLayout2>
    );
};

export default Index;
