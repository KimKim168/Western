import Header from "./Header";

interface StudentCouncil {
    title: string;
    long_description: string;
    images: { image: string }[];
}

const WesternHero = () => {
    // Static data
    const studentCouncil: StudentCouncil = {
        title: 'Western International School',
        long_description: `
      <p>Western International School began to help shape the children's future in the year 2003 when it first opened. Since then, we have been continuously aiming to be Cambodia's leading and most progressive bilingual international school.
<p>We establish our students' educational background by providing a bilingual education program to build their literacy skills and attain proficiency in the English language. We also have summer classes and exchange programs which provide quality education or the students, preparing them to pursue their secondary education anywhere in the world.</p>
      
    `,
        images: [
            { image: 'hero.JPG' }, // Place this image in public/assets/images/pages/
        ],
    };

    return (
        <div className="mt-16">
            <Header title={'Welcome to Western International School'}/>
        <div className="mx-auto mt-8 relative flex flex-col px-4 sm:px-6  lg:px-0">
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
            <div className="absolute bottom-0 z-10 bg-primary/60">
                <div className="mx-auto flex flex-col items-start gap-[50px] rounded-xl p-4 px-8 shadow-lg lg:flex-row lg:items-center dark:shadow-foreground/10">
                    <h3 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-[40px]">{studentCouncil.title}</h3>
                    <div className="w-full flex-1 break-words gap-4 flex">
                    <div className="h-auto w-6 border bg-white "></div>
                        <div
                            className="ck-content text-base prose max-w-none bg-background p-4 py-6 leading-relaxed text-primary dark:prose-invert"
                            dangerouslySetInnerHTML={{ __html: studentCouncil.long_description }}
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default WesternHero;
