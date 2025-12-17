const faq = [
    {
        icon: 'puzzle.png',
        question: 'Wisdom',
        answer: 'Have a good sense of judgment.',
    },
    {
        icon: 'puzzle.png',
        question: 'Integrity',
        answer: `Do what is right "Good attitude and behavior".`,
    },
    {
        icon: 'puzzle.png',
        question: 'Support',
        answer: `Keep the employees, students, and families that we serve at the forefront of our work.`,
    },
    {
        icon: 'puzzle.png',
        question: 'Collaboration',
        answer: `Work as one team "Success in one team".`,
    },
    {
        icon: 'puzzle.png',
        question: 'Accountability',
        answer: `Own one's actions "Responsible for one's actions".`,
    },
    {
        icon: 'puzzle.png',
        question: 'Respect',
        answer: `Value every voice "Respect each other".`,
    },
    {
        icon: 'puzzle.png',
        question: 'Excellence',
        answer: `Fully explore details of the management process in order to build the highest reliability and accountability in educational services.`,
    },
];

const ValuseWisCare = () => {
    const firstRow = faq.slice(0, 3);
    const secondRow = faq.slice(3);

    const renderItem = ({ question, answer, icon, isLast }) => (
        <div key={question} className="relative border-[0.5px] border-primary p-5 sm:p-6">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                    <img src={`/assets/buddhist/${icon}`} className="h-full w-full object-contain" alt={question} />
                </div>

                {/* Right circle decoration (desktop only) */}
                {!isLast && (
                    <div className="hidden xl:block">
                        <div className="absolute top-1/2 -right-4.5 z-20 hidden h-10 w-10 -translate-y-1/2 rounded-full border-primary bg-white md:block" />
                        <div className="absolute top-1/2 -right-5.5 hidden h-10 w-10 -translate-y-1/2 rounded-full border border-primary bg-white md:block" />
                    </div>
                )}

                <h3 className="text-lg font-semibold text-primary sm:text-xl md:text-2xl">{question}</h3>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-foreground/70 sm:text-[14px]">{answer}</p>
        </div>
    );

    return (
            <div className="mt-8 md:mt-12">
                <h2 className="my-4 text-center text-2xl font-bold text-primary sm:text-3xl">Valuse: WISCARE</h2>

                <div className="hidden grid-cols-1 sm:grid-cols-2 xl:grid xl:grid-cols-3 border-t-[0.5px] border-l-[0.5px] border-r-[0.5px] border-primary">
                    {firstRow.map((item, index) => renderItem({ ...item, isLast: index === firstRow.length - 1 }))}
                </div>

                <div className="hidden grid-cols-1 sm:grid-cols-2 xl:grid xl:grid-cols-4 border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-primary">
                    {secondRow.map((item, index) => renderItem({ ...item, isLast: index === secondRow.length - 1 }))}
                </div>

                <div className="xl:hidden grid-cols-1 grid md:grid-cols-2 border-[0.5px] border-primary ">
                {faq?.map((item) => (
                    <div key={item.question} className="relative border-[0.5px] border-primary p-5 sm:p-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                                <img src={`/assets/buddhist/${item.icon}`} className="h-full w-full object-contain" alt={item.question} />
                            </div>

                            <h3 className="text-lg font-semibold text-primary sm:text-xl md:text-2xl">{item.question}</h3>
                        </div>

                        <p className="mt-2 text-sm leading-relaxed text-foreground/70 sm:text-[14px]">{item.answer}</p>
                    </div>
                ))}
                </div>
            </div>
    );
};

export default ValuseWisCare;
