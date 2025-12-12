import Header from "@/pages/Buddhist/components/Header";
import ButtonSimple from "@/pages/Sesor/components/Bottons/ButtonSimple";
import ActivitiAndEventCard from "./ActivitiAndEventCard";

interface StudentCouncil {
    title: string;
    long_description: string;
    images: { image: string }[];
}

const ActivitiAndEventHero = () => {
    // Static data
    const studentCouncil: StudentCouncil = {
        title: 'School Life Activities and Events',
        long_description: `
      <p>Western International School began to help shape the children's future in the year 2003 when it first opened. Since then, we have been continuously aiming to be Cambodia's leading and most progressive bilingual international school.
<p>We establish our students' educational background by providing a bilingual education program to build their literacy skills and attain proficiency in the English language. We also have summer classes and exchange programs which provide quality education or the students, preparing them to pursue their secondary education anywhere in the world.</p>
      
    `,
        images: [
            { image: 'hero.JPG' }, // Place this image in public/assets/images/pages/
        ],
    };

    return (
        <div className="mt-16  section-container">
            <Header title={'Activities and Events'} />
            <div className="relative mx-auto mt-8 flex flex-col px-4 sm:px-6 lg:px-0">
                {/* Hero Image */}
                <div className="relative w-full">
                    {studentCouncil.images?.[0]?.image ? (
                        <img
                            src={`/assets/buddhist/${studentCouncil.images[0].image}`}
                            className="aspect-[21/9] w-full object-cover"
                            alt={studentCouncil.title}
                        />
                    ) : (
                        <div className="w-full sm:h-20"></div>
                    )}
                </div>
                {/* Description Card */}
                <div className="absolute bottom-0 z-10 bg-primary/60 w-full">
                    <div className="w-full flex flex-col items-start p-4 px-8">
                        <h3 className="mb-4 text-2xl tracking-tight bg-white text-primary p-4 sm:text-3xl">{studentCouncil.title}</h3>
                        <div className="mt-16">
                        <ButtonSimple title='Read More' link={''}/>
                        </div>
                    </div>
                </div>
            </div>
            <ActivitiAndEventCard/>
        </div>
    );
};

export default ActivitiAndEventHero;
